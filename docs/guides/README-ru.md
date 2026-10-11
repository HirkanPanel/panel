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
    <strong>Унифицированное решение для управления прокси, устойчивое к цензуре</strong>
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
    <img src="https://raw.githubusercontent.com/HirkanPanel/panel/main/dashboard/public/statics/favicon/logo.png" alt="Hirkan скриншоты" width="600" height="auto">
  </a>
</p>

## 📋 Содержание

> **Быстрая навигация** - Перейдите к любому разделу ниже

-   [📖 Обзор](#-обзор)
    -   [🤔 Зачем использовать Hirkan?](#-зачем-использовать-hirkan)
        -   [✨ Функции](#-функции)
-   [🚀 Руководство по установке](#-руководство-по-установке)
-   [📚 Документация](#-документация)
-   [💖 Пожертвования](#-пожертвования)

---

# 📖 Обзор

> **Что такое Hirkan?**

Hirkan — это мощный инструмент управления прокси-серверами, который предлагает интуитивно понятный и эффективный интерфейс для работы с сотнями прокси-аккаунтов. Построенный на Python и React.js, он сочетает производительность, масштабируемость и простоту использования для упрощения управления прокси в больших масштабах. Он поддерживает и [Xray-core](https://github.com/XTLS/Xray-core), и [WireGuard](https://www.wireguard.com/) для максимальной производительности.

---

## 🤔 Зачем использовать Hirkan?

> **Простой, Мощный, Надежный**

Hirkan — это удобный, многофункциональный и надежный инструмент управления прокси-серверами. Он позволяет создавать и управлять несколькими прокси для ваших пользователей без необходимости сложной настройки. С помощью встроенного веб-интерфейса вы можете легко отслеживать активность, изменять настройки и контролировать ограничения доступа пользователей — все из одного удобного панели управления.

---

### ✨ Функции

<div align="left">

**🌐 Веб-интерфейс и API**
- Встроенная панель управления **Web UI**
- Полностью функциональный бэкенд **REST API**
- Поддержка **Multi-Node** для распределения инфраструктуры

**🔐 Протоколы и безопасность**
- Поддержка **Vmess**, **VLESS**, **Trojan**, **Shadowsocks**, **WireGuard** и **Hysteria2**
- Поддержка **TLS** и **REALITY**
- **Мультипротокол** для одного пользователя

**👥 Управление пользователями**
- **Мультипользователь** на одном inbound
- **Мультиinbound** на **одном порту** (поддержка fallbacks)
- Ограничения по **трафику** и **сроку действия**
- **Периодические** ограничения трафика (ежедневно, еженедельно и т.д.)
- Ограничения **HWID/устройств** для контроля доступа по оборудованию

**🔗 Подписки и обмен**
- **Ссылка подписки** совместимая с **V2ray**, **Clash** и **ClashMeta**
- Автоматический генератор **ссылок для обмена** и **QR-кодов**
- Мониторинг системы и **статистика трафика**

**🛠️ Инструменты и настройка**
- Настраиваемая конфигурация xray
- Встроенный **Telegram Bot**
- **Интерфейс командной строки (CLI)**
- Поддержка **многоязычности**
- Поддержка **множественных администраторов** с **RBAC** для детальных прав и ограниченных областей доступа

</div>

---

# 🚀 Руководство по установке

> **Быстрый старт** - Запустите Hirkan за несколько минут

### Для быстрой настройки используйте следующие команды в зависимости от предпочитаемой базы данных.

---

**TimescaleDB (Рекомендуется):**
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

### 📋 После установки:

<div align="left">

**📋 Следите за логами** (нажмите `Ctrl+C` для остановки)

**📁 Файлы находятся в** `/opt/hirkan`

**⚙️ Файл конфигурации:** `/opt/hirkan/.env` (см. [Конфигурация](#-конфигурация) для деталей)

**💾 Файлы данных:** `/var/lib/hirkan`

**🔒 Важно:** Панель управления требует SSL-сертификат для безопасности
- Получить SSL-сертификат: [Руководство](https://github.com/HirkanPanel/panel/tree/main/docs/guides)
- Доступ: `https://YOUR_DOMAIN:8000/dashboard/`

**🔗 Для тестирования без домена:** Используйте SSH port forwarding (см. ниже)

</div>

---

```bash
ssh -L 8000:localhost:8000 user@serverip
```

Затем доступ: `http://localhost:8000/dashboard/`

> ⚠️ **Только для тестирования** - Вы потеряете доступ при закрытии SSH-терминала.

### 🔧 Следующие шаги:

```bash
# Сгенерировать одноразовый временный ключ для настройки owner-аккаунта
hirkan cli generate-temp-key

# Используйте ключ на странице входа в панель, чтобы создать owner-аккаунт

# Получить справку
hirkan --help
```

---

# 📚 Документация

<div align="left">

**📖 Официальная документация** - Полные руководства доступны на:

🇺🇸 **[English](https://github.com/HirkanPanel/panel/tree/main/docs/guides)**

🇮🇷 **[فارسی](https://github.com/HirkanPanel/panel/tree/main/docs/guides)**

🇷🇺 **[Русский](https://github.com/HirkanPanel/panel/tree/main/docs/guides)**

</div>

> **Участие:** Помогите улучшить документацию на [GitHub](https://github.com/HirkanPanel/panel)

---

# 💖 Пожертвования

<div align="left">

> **Поддержка разработки Hirkan**

Если Hirkan помогает вам, рассмотрите возможность поддержки его разработки:

[![Donate](https://img.shields.io/badge/Donate-Support%20Us-green?style=for-the-badge)](https://t.me/dev_vexel)

**Спасибо за вашу поддержку!** 💖

</div>

---

<p align="center">
  Made with ❤️ for Internet freedom
</p>
