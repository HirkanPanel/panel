#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
test_directory=$(mktemp -d -t hirkan-tests-XXXXXXXX)
trap 'rm -rf "$test_directory"' EXIT
export SQLALCHEMY_DATABASE_URL="sqlite+aiosqlite:///$test_directory/test.sqlite3"
export DATABASE_URL="$SQLALCHEMY_DATABASE_URL"
export TEST_FROM=local
uv run pytest tests "$@"
