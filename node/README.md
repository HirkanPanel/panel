# Hirkan Node 1.0.0

Full Xray and WireGuard node service with authenticated REST and gRPC interfaces. Panel and node protocol definitions are coordinated in this distribution.

## Docker build

From the node directory:

```bash
cp .env.example .env
# Set HIRKAN_NODE_API_KEY in .env to a fresh UUID.
mkdir -p data/certs
openssl req -x509 -newkey ec -pkeyopt ec_paramgen_curve:P-256 -nodes -days 365 -keyout data/certs/ssl_key.pem -out data/certs/ssl_cert.pem -subj /CN=YOUR_NODE_HOST -addext subjectAltName=DNS:YOUR_NODE_HOST
docker compose up -d --build
```

Use the real node hostname in both certificate arguments. Store the key and .env with restricted permissions. The public certificate and API key must match the node record in the panel. The default service port is 62050. In the panel, create a core and a node, select the matching service protocol, and supply the node address, port, API key and server certificate. Do not disable certificate verification.

The image installs official Xray releases using the bundled installer. WireGuard uses the host kernel interface and NET_ADMIN capability. Routing options are listed in .env.example.

## Native build

```bash
go build -buildvcs=false -trimpath -o hirkan-node ./cmd/node
./hirkan-node
```

Set .env first and install the Xray executable separately. See .env.example for TLS and binary paths. Full protocol tests require Xray, test certificates under certs/, and permission to open local sockets. Config, user synchronization, traffic, latency and routing modules are retained.
