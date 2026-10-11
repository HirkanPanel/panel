#! /bin/bash
set -e
cd "$(dirname "$0")"
uv run scripts/package_source.py
cd dashboard
VITE_BASE_API=/ bun run build
cp ./build/index.html ./build/404.html
