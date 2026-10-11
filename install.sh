#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
command -v docker >/dev/null || { echo "Docker is required." >&2; exit 1; }
docker compose version >/dev/null
[ -f .env ] || cp .env.example .env
mkdir -p data
# The downloadable source-only archive intentionally excludes itself.
# Recreate it when installing from that archive rather than a git checkout.
if [ ! -s dashboard/public/statics/hirkan-source.zip ]; then
    docker run --rm -v "$PWD:/source" -w /source python:3.14-slim python scripts/package_source.py
fi
docker compose build
docker compose up -d
docker compose ps
