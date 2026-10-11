# هیرکان — نسخهٔ ۱.۰.۰

پشتیبانی: https://t.me/dev_vexel

این بسته شامل سورس کامل پنل، رابط، API، مدیریت کاربران و نودها، اشتراک، تنظیمات، ربات تلگرام و مهاجرت‌های دیتابیس است.

نصب روی لینوکس دارای Docker و Compose v2:

```sh
cp .env.example .env
# پورت، دامنه و مسیر گواهی SSL را در .env تنظیم کنید
./install.sh
docker compose exec hirkan hirkan-cli admin create --help
```

آدرس ورود: `https://DOMAIN:PORT/dashboard/`

مسیر دیتابیس پیش‌فرض: `data/db.sqlite3`. گواهی‌ها و داده‌ها داخل `data/` نگهداری می‌شوند. برای انتقال پنل موجود ابتدا بکاپ مستقل بگیرید؛ نصب این بسته به‌تنهایی کاربران قبلی را منتقل نمی‌کند.

راهنمای کامل نصب در README.md و توضیحات مجوز در NOTICE.md و LICENSE قرار دارد.
