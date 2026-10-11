<p align="center">
  <a href="https://github.com/HirkanPanel/panel" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/HirkanPanel/panel/main/dashboard/public/statics/favicon/logo.png">
      <img width="160" height="160" src="https://raw.githubusercontent.com/HirkanPanel/panel/main/dashboard/public/statics/favicon/logo.png">
    </picture>
  </a>
</p>

<h1 align="center">🛡️ هیرکان</h1>

<p align="center">
    <strong>راه‌حل یکپارچه و مقاوم در برابر سانسور برای مدیریت پروکسی</strong>
</p>

---

<br/>
<p align="center">
    <a href="#">
        <img src="https://img.shields.io/github/actions/workflow/status/HirkanPanel/panel/build.yml?style=flat-square" />
    </a>
    <a href="https://github.com/HirkanPanel/panel" target="_blank">
        <img src="https://img.shields.io/badge/Hirkan-1.0.0-blue?style=flat-square" />
    </a>
    <a href="#">
        <img src="https://img.shields.io/github/license/HirkanPanel/panel?style=flat-square" />
    </a>
    <a href="https://t.me/dev_vexel" target="_blank">
        <img src="https://img.shields.io/badge/telegram-group-blue?style=flat-square&logo=telegram" />
    </a>
    <a href="#">
        <img src="https://img.shields.io/badge/twitter-commiunity-blue?style=flat-square&logo=twitter" />
    </a>
    <a href="#">
        <img src="https://img.shields.io/github/stars/HirkanPanel/panel?style=social" />
    </a>
</p>

<p align="center">
 <a href="./README.md">
 🇺🇸 English
 </a>
 /
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
    <img src="https://raw.githubusercontent.com/HirkanPanel/panel/main/dashboard/public/statics/favicon/logo.png" alt="لوگوی هیرکان" width="600" height="auto">
  </a>
</p>

## 📋 فهرست مطالب

> **ناوبری سریع** - به هر بخش زیر پرش کنید

-   [📖 بررسی اجمالی](#-بررسی-اجمالی)
    -   [🤔 چرا از هیرکان استفاده کنیم؟](#-چرا-از-هیرکان-استفاده-کنیم)
        -   [✨ ویژگی‌ها](#-ویژگیها)
-   [🚀 راهنمای نصب](#-راهنمای-نصب)
-   [📚 مستندات](#-مستندات)
-   [💖 حمایت مالی](#-حمایت-مالی)

---

# 📖 بررسی اجمالی

> **هیرکان چیست؟**

هیرکان یک ابزار قدرتمند مدیریت پروکسی است که رابط کاربری بصری و کارآمدی برای مدیریت صدها حساب پروکسی ارائه می‌دهد. این ابزار با Python و React.js ساخته شده و عملکرد، مقیاس‌پذیری و سهولت استفاده را برای ساده‌سازی مدیریت پروکسی در مقیاس بزرگ ترکیب می‌کند. این ابزار هم از [Xray-core](https://github.com/XTLS/Xray-core) و هم از [WireGuard](https://www.wireguard.com/) برای حداکثر عملکرد پشتیبانی می‌کند.

---

## 🤔 چرا از هیرکان استفاده کنیم؟

> **ساده، قدرتمند، قابل اعتماد**

هیرکان یک ابزار مدیریت پروکسی کاربرپسند، غنی از ویژگی و قابل اعتماد است. این ابزار به شما امکان ایجاد و مدیریت چندین پروکسی برای کاربران بدون نیاز به پیکربندی پیچیده را می‌دهد. با رابط کاربری وب داخلی آن، می‌توانید به راحتی فعالیت‌ها را نظارت کنید، تنظیمات را تغییر دهید و محدودیت‌های دسترسی کاربران را کنترل کنید — همه از یک داشبورد مناسب.

---

### ✨ ویژگی‌ها

<div align="right">

**🌐 رابط کاربری وب و API**
- داشبورد **Web UI** داخلی
- بک‌اند کاملاً **REST API**
- پشتیبانی از **Multi-Node** برای توزیع زیرساخت

**🔐 پروتکل‌ها و امنیت**
- پشتیبانی از **Vmess**، **VLESS**، **Trojan**، **Shadowsocks**، **WireGuard** و **Hysteria2**
- پشتیبانی از **TLS** و **REALITY**
- **چند پروتکل** برای یک کاربر

**👥 مدیریت کاربران**
- **چند کاربر** روی یک inbound
- **چند inbound** روی **یک پورت** (پشتیبانی از fallbacks)
- محدودیت‌های **ترافیک** و **تاریخ انقضا**
- محدودیت ترافیک **دوره‌ای** (روزانه، هفتگی و غیره)
- محدودیت **HWID/دستگاه** برای کنترل دسترسی مبتنی بر سخت‌افزار

**🔗 اشتراک‌ها و اشتراک‌گذاری**
- **لینک اشتراک** سازگار با **V2ray**، **Clash** و **ClashMeta**
- تولیدکننده خودکار **لینک اشتراک** و **QRcode**
- نظارت بر سیستم و **آمار ترافیک**

**🛠️ ابزارها و سفارشی‌سازی**
- پیکربندی قابل تنظیم xray
- **ربات تلگرام** یکپارچه
- **رابط خط فرمان (CLI)**
- پشتیبانی از **چند زبان**
- پشتیبانی از **چند ادمین** با **RBAC** برای دسترسی‌های دقیق و محدوده‌بندی‌شده

</div>

---

# 🚀 راهنمای نصب

> **شروع سریع** - هیرکان را در چند دقیقه راه‌اندازی کنید

### برای راه‌اندازی سریع، از دستورات زیر بر اساس دیتابیس مورد نظرتان استفاده کنید.

---

**TimescaleDB (توصیه شده):**
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

### 📋 پس از نصب:

<div align="right">

**📋 لاگ‌ها را مشاهده کنید** (برای توقف `Ctrl+C` را فشار دهید)

**📁 فایل‌ها در مسیر** `/opt/hirkan` قرار دارند

**⚙️ فایل پیکربندی:** `/opt/hirkan/.env` (برای جزئیات [پیکربندی](#-پیکربندی) را ببینید)

**💾 فایل‌های داده:** `/var/lib/hirkan`

**🔒 مهم:** داشبورد برای امنیت نیاز به گواهی SSL دارد
- دریافت گواهی SSL: [راهنما](https://github.com/HirkanPanel/panel/tree/main/docs/guides)
- دسترسی: `https://YOUR_DOMAIN:8000/dashboard/`

**🔗 برای تست بدون دامنه:** از SSH port forwarding استفاده کنید (پایین را ببینید)

</div>

---

```bash
ssh -L 8000:localhost:8000 user@serverip
```

سپس دسترسی: `http://localhost:8000/dashboard/`

> ⚠️ **فقط برای تست** - با بستن ترمینال SSH دسترسی خود را از دست خواهید داد.

### 🔧 مراحل بعدی:

```bash
# ایجاد کلید موقت یک‌بارمصرف برای راه‌اندازی حساب owner
hirkan cli generate-temp-key

# از این کلید در صفحه ورود داشبورد برای ایجاد حساب owner استفاده کنید

# دریافت راهنما
hirkan --help
```

---

# 📚 مستندات

<div align="right">

**📖 مستندات رسمی** - راهنماهای کامل در دسترس:

🇺🇸 **[English](https://github.com/HirkanPanel/panel/tree/main/docs/guides)**

🇮🇷 **[فارسی](https://github.com/HirkanPanel/panel/tree/main/docs/guides)**

🇷🇺 **[Русский](https://github.com/HirkanPanel/panel/tree/main/docs/guides)**

</div>

> **مشارکت:** در بهبود مستندات در [GitHub](https://github.com/HirkanPanel/panel) کمک کنید

---

# 💖 حمایت مالی

<div align="right">

> **حمایت از توسعه هیرکان**

اگر هیرکان به شما کمک می‌کند، از توسعه آن حمایت کنید:

[![Donate](https://img.shields.io/badge/Donate-Support%20Us-green?style=for-the-badge)](https://t.me/dev_vexel)

**از حمایت شما متشکریم!** 💖

</div>

---

<p align="center">
  Made with ❤️ for Internet freedom
</p>
