ARG PYTHON_VERSION=3.14

FROM oven/bun:1.3.13 AS frontend
WORKDIR /frontend
COPY package.json bun.lock ./
COPY dashboard/package.json dashboard/package.json
COPY packages/ packages/
RUN bun install --frozen-lockfile
COPY dashboard/ dashboard/
ENV VITE_BASE_API=/
RUN cd dashboard && bun run build && cp build/index.html build/404.html

FROM ghcr.io/astral-sh/uv:python$PYTHON_VERSION-bookworm-slim AS builder
ENV UV_COMPILE_BYTECODE=1 UV_LINK_MODE=copy

RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    python3-dev \
    libc6-dev \
    && rm -rf /var/lib/apt/lists/*

ENV UV_PYTHON_DOWNLOADS=0

WORKDIR /build
COPY packages/ /build/packages/
RUN --mount=type=cache,target=/root/.cache/uv \
    --mount=type=bind,source=uv.lock,target=uv.lock \
    --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
    uv sync --frozen --no-install-project --no-dev
ADD . /build
RUN --mount=type=cache,target=/root/.cache/uv \
    uv sync --frozen --no-dev


FROM python:$PYTHON_VERSION-slim-bookworm

COPY --from=builder /build /code
COPY --from=frontend /frontend/dashboard/build /code/dashboard/build
WORKDIR /code

ENV PATH="/code/.venv/bin:$PATH"

# Keep the runtime trust store explicit. Outbound notification clients use it
# without replacing Python's process-wide SSLContext.
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    && update-ca-certificates \
    && rm -rf /var/lib/apt/lists/*

COPY cli_wrapper.sh /usr/bin/hirkan-cli
RUN chmod +x /usr/bin/hirkan-cli

COPY tui_wrapper.sh /usr/bin/hirkan-tui
RUN chmod +x /usr/bin/hirkan-tui

# Copy healthcheck script
COPY healthcheck.sh /code/healthcheck.sh
RUN chmod +x /code/healthcheck.sh

RUN chmod +x /code/start.sh

ENTRYPOINT ["/code/start.sh"]
