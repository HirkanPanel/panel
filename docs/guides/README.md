<p align="center">
  <a href="https://github.com/HirkanPanel/panel" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/HirkanPanel/panel/main/dashboard/public/statics/favicon/logo.png">
      <img width="160" height="160" src="https://raw.githubusercontent.com/HirkanPanel/panel/main/dashboard/public/statics/favicon/logo.png">
    </picture>
  </a>
</p>

<h1 align="center">🛡️ Hirkan</h1>

<p align="center">
    <strong>Unified & Censorship-Resistant Proxy Management Solution</strong>
</p>

---

<br/>
<p align="center">
    <a href="https://github.com/HirkanPanel/panel/actions/workflows/build.yml" target="_blank">
        <img src="https://img.shields.io/github/actions/workflow/status/HirkanPanel/panel/build.yml?style=flat-square" />
    </a>
    <a href="https://github.com/HirkanPanel/panel" target="_blank">
        <img src="https://img.shields.io/badge/Hirkan-1.0.0-blue?style=flat-square" />
    </a>
    <a href="https://github.com/HirkanPanel/panel/blob/main/LICENSE" target="_blank">
        <img src="https://img.shields.io/github/license/HirkanPanel/panel?style=flat-square" />
    </a>
    <a href="https://t.me/dev_vexel" target="_blank">
        <img src="https://img.shields.io/badge/telegram-group-blue?style=flat-square&logo=telegram" />
    </a>
    <a href="https://github.com/HirkanPanel/panel" target="_blank">
        <img src="https://img.shields.io/github/stars/HirkanPanel/panel?style=social" />
    </a>
</p>

<p align="center">
 <a href="./README-fa.md">
 🇮🇷 فارسی
 </a>
  /
  <a href="./README-zh-cn.md">
 🇨🇳 简体中文
 </a>
   /
  <a href="./README-ru.md">
 🇷🇺 Русский
 </a>
</p>

<p align="center">
  <a href="https://github.com/HirkanPanel/panel" target="_blank" rel="noopener noreferrer" >
    <img src="https://raw.githubusercontent.com/HirkanPanel/panel/main/dashboard/public/statics/favicon/logo.png" alt="Hirkan screenshots" width="600" height="auto">
  </a>
</p>

## 📋 Table of Contents

> **Quick Navigation** - Jump to any section below

-   [📖 Overview](#-overview)
    -   [🤔 Why using Hirkan?](#-why-using-hirkan)
        -   [✨ Features](#-features)
-   [🚀 Installation guide](#-installation-guide)
-   [📚 Documentation](#-documentation)
-   [💖 Donation](#-donation)

---

# 📖 Overview

> **What is Hirkan?**

Hirkan is a powerful proxy management tool that offers an intuitive and efficient interface for handling hundreds of proxy accounts. Built with Python and React.js it combines performance, scalability, and ease of use to simplify large-scale proxy management. It supports both [Xray-core](https://github.com/XTLS/Xray-core) and [WireGuard](https://www.wireguard.com/) for maximum performance.

---

## 🤔 Why using Hirkan?

> **Simple, Powerful, Reliable**

Hirkan is a user-friendly, feature-rich, and reliable proxy management tool. It allows you to create and manage multiple proxies for your users without the need for complex configuration. With its built-in web interface, you can easily monitor activity, modify settings, and control user access limits — all from one convenient dashboard.

---

### ✨ Features

<div align="left">

**🌐 Web Interface & API**
- Built-in **Web UI** dashboard
- Fully **REST API** backend
- **Multi-Node** support for infrastructure distribution

**🔐 Protocols & Security**
- Supports **Vmess**, **VLESS**, **Trojan**, **Shadowsocks**, **WireGuard** and **Hysteria2**
- **TLS** and **REALITY** support
- **Multi-protocol** for a single user

**👥 User Management**
- **Multi-user** on a single inbound
- **Multi-inbound** on a **single port** (fallbacks support)
- **Traffic** and **expiry date** limitations
- **Periodic** traffic limit (daily, weekly, etc.)
- **HWID/device limits** for hardware-bound access control

**🔗 Subscriptions & Sharing**
- **Subscription link** compatible with **V2ray**, **Clash** and **ClashMeta**
- Automated **Share link** and **QRcode** generator
- System monitoring and **traffic statistics**

**🛠️ Tools & Customization**
- Customizable xray configuration
- Integrated **Telegram Bot**
- **Command Line Interface (CLI)**
- **Multi-language** support
- **Multi-admin** support with **RBAC** for granular permissions and scoped access

</div>

---

# 🚀 Installation guide

> **Quick Start** - Get Hirkan running in minutes

### For a quick setup, use the following commands based on your preferred database.

---

**TimescaleDB (Recommended):**
```bash
bash install.sh
```

**SQLite:**
```bash
bash install.sh
```

**MySQL:**
```bash
bash install.sh
```

**MariaDB:**
```bash
bash install.sh
```

**PostgreSQL:**
```bash
bash install.sh
```

### 📋 After installation:

<div align="left">

**📋 Watch the logs** (press `Ctrl+C` to stop)

**📁 Files are located at** `/opt/hirkan`

**⚙️ Config file:** `/opt/hirkan/.env` (see [Configuration](#-configuration) for details)

**💾 Data files:** `/var/lib/hirkan`

**🔒 Important:** Dashboard requires SSL certificate for security
- Get SSL certificate: [Guide](https://github.com/HirkanPanel/panel/tree/main/docs/guides)
- Access: `https://YOUR_DOMAIN:8000/dashboard/`

**🔗 For testing without domain:** Use SSH port forwarding (see below)

</div>

---

```bash
ssh -L 8000:localhost:8000 user@serverip
```

Then access: `http://localhost:8000/dashboard/`

> ⚠️ **Testing only** - You'll lose access when you close the SSH terminal.

### 🔧 Next Steps:

```bash
# Generate a one-time setup key for owner account setup
hirkan cli generate-temp-key

# Use the key on the dashboard login page to create the owner account

# Get help
hirkan --help
```



# 📚 Documentation

<div align="left">

**📖 Official Documentation** - Complete guides available in:

🇺🇸 **[English](https://github.com/HirkanPanel/panel/tree/main/docs/guides)**

🇮🇷 **[فارسی](https://github.com/HirkanPanel/panel/tree/main/docs/guides)**

🇷🇺 **[Русский](https://github.com/HirkanPanel/panel/tree/main/docs/guides)**

🇨🇳 **[简体中文](https://github.com/HirkanPanel/panel/tree/main/docs/guides)**

</div>

> **Contributing:** Help improve documentation on [GitHub](https://github.com/HirkanPanel/panel)

---

# 💖 Donation

<div align="left">

> **Support Hirkan Development**

If Hirkan helps you, consider supporting its development:

[![Donate](https://img.shields.io/badge/Donate-Support%20Us-green?style=for-the-badge)](https://t.me/dev_vexel)

**Thank you for your support!** 💖

</div>

---

<p align="center">
  Made with ❤️ for Internet freedom
</p>

