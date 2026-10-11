# Hirkan 1.0.0 validation

Checks completed on 2026-10-11.

- All original application, dashboard feature and test file paths are retained.
- All 153 Python database migration files are byte-for-byte unchanged.
- Panel tests: **621 passed, 19 skipped**. A focused node reconnect regression check also passed.
- Bundled Python node bridge tests: **11 passed**.
- Python dependencies: `uv sync --frozen` passed on Python 3.14.8.
- Frontend: TypeScript project check `bun x tsc -b` passed; production Vite and PWA builds passed on Bun 1.3.13.
- Generated API client retains all **924 exported functions**. Its response types match the existing JSON-body mutator. Request cancellation, XHTTP/XMux payload names, subscription form typing and notification API-key schema fields were corrected without removing feature modules.
- OpenAPI generation and a live local HTTP startup passed: **172 API paths**, version **1.0.0**, dashboard HTTP 200 and PNG logo HTTP 200.
- Fresh SQLite migrations to head passed. Live startup/shutdown used a temporary database.
- Full Go node built for Linux amd64 with Go 1.26.3. WireGuard backend, Xray API, controller, statistics, system statistics and Xray unit checks passed.
- Python and Go protocol schemas match token-for-token except their Go package path; generated bindings were regenerated together.
- Branding scan of source filenames and bytes found zero occurrences of the previous product name or spelling. The final archive and production assets are checked separately before delivery.
- All dependency source needed for the renamed bridge and configuration packages is included under `packages/`; installation uses local paths/workspaces.

## Limits

Passing these checks is not a guarantee that every deployment is defect-free. Docker Engine is unavailable here, so a Docker image was not built or run. Integration tests needing a real Xray executable, TLS fixtures or restricted Unix sockets were not verified here. Real WireGuard routing, a provisioned remote node, databases other than SQLite, and installation on the user's server remain unverified. No server deployment is claimed.
