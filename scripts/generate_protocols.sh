#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
uv run --with grpcio-tools==1.80.0 --with grpclib python -m grpc_tools.protoc -I packages/node-bridge --python_out=packages/node-bridge --pyi_out=packages/node-bridge --grpclib_python_out=packages/node-bridge HirkanNodeBridge/common/service.proto
# Install protoc-gen-go and protoc-gen-go-grpc on PATH before this step.
uv run --with grpcio-tools==1.80.0 python -m grpc_tools.protoc -I node --go_out=node --go_opt=paths=source_relative --go-grpc_out=node --go-grpc_opt=paths=source_relative common/service.proto
