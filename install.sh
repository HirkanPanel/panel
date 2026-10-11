#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
command -v docker >/dev/null || { echo 'Install Docker Engine first.' >&2; exit 1; }
docker compose version >/dev/null
[ -f .env ] || cp .env.example .env
mkdir -p data
chmod 700 data
docker compose up -d --build
docker compose ps
