# API Demo dengan Node.JS + Express + Sequelize

Script basic API untuk Sharing di BIT Development Team

## Installation Awal

Gunakan langkah berikut untuk installasi

```textile
Pastikan Node sudah terinstall di local computer sebelum melalukan step dibawah ini

1. Buat Database baru di MS SQL Server yang ada beri nama bitapi
2. Buat folder bitapi
3. Ketik command berikut dari terminal :\>git clone https://github.com/JerryPeter/bitapi.git . 
4. Sekarang pada folder kita sudah ada semua script hasil cloning dari GITHUB
5. Edit configurasi koneksi ke database pada file config\config.json
6. Install paket npm yang diperlukan, dengan mengetikan command berikut dari terminal :\>npm install
7. Jalankan database migration dengan command berikut dari terminal :\>npx sequelize-cli db:migrate
8. Lakukan seeding data default dengan command berikut dari terminal :\>npx sequelize-cli db:seed:all
9. Setelah selesai coba running aplikasi dengan command berikut dari terminal :\>npm start
10. Buka browser dan akses dari url http:\\localhost:3000
```

## Cara pengunaan

Untuk pengunaan bisa diakses dari POSTMAN / INSOMNIA / THUNDER CLIENT dan lainnya

```textile
CREATE = http:\\localhost:3000\create <-- Pakai POST Method
READ = http:\\localhost:3000\users <-- Pakai GET Method
UPDATE = http:\\localhost:3000\users\1 <-- Pakai PATCH Method, dengan kirim data pada Body
DELETE = http:\\localhost:3000\users\1 <-- Pakai DELETE Method, dengan kirim data pada Body
```