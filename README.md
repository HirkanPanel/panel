# Hirkan 1.0.0 — هیرکان

<img src="dashboard/public/statics/favicon/logo-dark.png" width="128" alt="Hirkan">

پنل کامل مدیریت پروکسی با داشبورد، REST API، کاربران و گروه‌ها، مدیران و نقش‌ها، کلیدهای API، هاست‌ها، نودهای Xray و WireGuard، ویرایشگر هسته، لینک اشتراک و قالب‌ها، HWID، ربات Telegram، اعلان‌ها، آمار، عملیات گروهی و workerهای NATS.

راهنمای کامل امکانات: [فارسی](docs/guides/README-fa.md) · [English](docs/guides/README.md) · [Русский](docs/guides/README-ru.md) · [中文](docs/guides/README-zh-cn.md).

## نصب پنل از سورس

Linux، Docker Engine و Docker Compose v2 لازم است. image پنل از همین سورس ساخته می‌شود؛ نیازی به image منتشرشده در Docker Hub ندارد.

```bash
git clone https://github.com/HirkanPanel/panel.git
cd panel
cp .env.example .env
bash install.sh
docker compose exec hirkan hirkan-cli admin create --help
```

برای ساخت مدیر، دستور آخر پارامترهای CLI را نشان می‌دهد. تنظیمات آدرس، پورت و TLS را در `.env` تعیین کنید. بدون TLS پنل روی localhost در دسترس است؛ برای استفادهٔ عمومی HTTPS را تنظیم کنید. مسیر گواهی داخل کانتینر باید زیر `/var/lib/hirkan` باشد که به پوشهٔ `data` متصل است.

داشبورد: `/dashboard/`. پایگاه SQLite پیش‌فرض: `data/db.sqlite3`. PostgreSQL، TimescaleDB، MySQL و MariaDB از طریق `SQLALCHEMY_DATABASE_URL` و تنظیمات `.env.example` قابل استفاده‌اند. این نصب، سرویس دیتابیس خارجی ایجاد نمی‌کند؛ باید آدرس دیتابیس موجود را تنظیم کنید.

## نود

سورس کامل نود در `node/` و پل Python در `packages/node-bridge/` همراه پروژه هستند. در README نود روش ساخت، TLS و اتصال توضیح داده شده است. پورت پیش‌فرض نود 62050 است؛ برای هر نود کلید API و گواهی خودش را تنظیم کنید. WireGuard به پشتیبانی کرنل میزبان و تنظیم مسیر شبکه نیاز دارد.

## ساخت محلی

Python 3.14، uv، Bun 1.3.13 و Go 1.26.3 برای ساخت همهٔ اجزا لازم‌اند.

```bash
uv sync --frozen
bun install --frozen-lockfile
cd dashboard
VITE_BASE_API=/ bun run build
cd ..
uv run alembic upgrade head
uv run main.py
```

تمام کتابخانه‌های اختصاصی در `packages/` موجودند و با مسیر محلی نصب می‌شوند. آزمون‌های پنل در دیتابیس موقت و جدا اجرا می‌شوند:

```bash
bash scripts/test_panel.sh -q
cd node
go test ./...
go build -buildvcs=false -trimpath -o hirkan-node ./cmd/node
```

تست‌های اتصال نود به Xray، TLS و دسترسی شبکهٔ محلی نیاز دارند. برای بازتولید فایل‌های پروتکل از `scripts/generate_protocols.sh` استفاده کنید. نسخهٔ برنامه 1.0.0 است؛ شماره‌های وابستگی‌ها شمارهٔ فنی خود کتابخانه‌ها هستند.

## ارتقا و داده‌ها

مهاجرت‌های دیتابیس و شناسه‌های آن‌ها حفظ شده‌اند. پیش از نصب روی پنل موجود از دیتابیس، `.env`، گواهی‌ها و قالب‌های سفارشی پشتیبان بگیرید. دو پنل را هم‌زمان به یک دیتابیس وصل نکنید. در این توزیع نام‌های پیش‌فرض NATS با `hirkan` شروع می‌شوند؛ همهٔ workerها باید از یک `.env` و همین نام‌ها استفاده کنند.

## سورس، مجوز و پشتیبانی

سورس همین انتشار باید در اختیار کاربران شبکه باشد. بستهٔ سورس از لینک فوتر در دسترس است؛ پس از تغییرات، آن را با `uv run scripts/package_source.py` دوباره بسازید. مجوزهای اجزا در `LICENSE` و `NOTICE.md` آمده‌اند. نتیجه و حدود بررسی‌ها در `VALIDATION.md` ثبت می‌شود.

پشتیبانی: https://t.me/dev_vexel
