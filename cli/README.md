# Hirkan CLI

A modern, type-safe command-line interface for managing Hirkan, built with Typer. Hirkan supports both [Xray-core](https://github.com/XTLS/Xray-core) and [WireGuard](https://www.wireguard.com/).

## Features

-   🎯 Type-safe CLI with rich output
-   🔒 One-time temp key generation for owner setup
-   ⌨️ Simple project-root and installed-service usage

## Installation

The CLI is included with Hirkan and can be used directly:

```bash
Hirkan cli --help

# Or from the project root
uv run Hirkan-cli.py --help
```

## Usage

### General Commands

```bash
# Show version
hirkan cli version

# Generate a one-time temp key for owner setup
hirkan cli generate-temp-key

# Show help
hirkan cli --help
```

### Owner Setup

Admin management is handled from the dashboard. For owner setup, reset, delete, or upgrade operations, generate a one-time temp key and use it on the dashboard login page.

```bash
hirkan cli generate-temp-key
```
