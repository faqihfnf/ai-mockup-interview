# Pembenahan Website Wawancarai

Tujuan: membuat `wawancarai.com` terlihat dan terverifikasi sebagai startup, bukan proyek personal. Identitas perusahaan, email, dan tautan harus konsisten di seluruh situs.

## 0. Nilai yang dipakai

Isi bagian ini sebelum menjalankan instruksi. Simpan nilai-nilai ini di satu file konfigurasi (misalnya `src/config/site.ts` atau `lib/site-config.ts`, sesuaikan dengan struktur proyek), lalu rujuk dari semua komponen. Jangan hardcode di banyak tempat.

```ts
export const siteConfig = {
  name: "Wawancarai",
  url: "https://www.wawancarai.com",
  email: "info@wawancarai.com",
  phone: "+62 899 6423 135",
  whatsapp: "https://wa.me/628996423135",
  address: "Kampung Makasar, Jakarta Timur, DKI Jakarta, Indonesia",
  founder: "Faqih Nur Fahmi",
  foundedYear: "2026",           // ganti jika berbeda
  linkedinCompany: "",            // isi URL halaman LinkedIn Wawancarai jika sudah dibuat
  linkedinFounder: "https://www.linkedin.com/in/faqih-nur-fahmi-b51bb1ab/",
  github: "https://github.com/faqihfnf",
};
```

## Cara kerja

1. Jelajahi struktur proyek terlebih dahulu (Next.js). Temukan komponen landing page, footer, FAQ, dan layout/metadata sebelum mengubah apa pun.
2. Kerjakan tugas di bawah sesuai urutan prioritas.
3. Setelah selesai, jalankan `lint` dan `build` dan pastikan tidak ada error.
4. Jangan commit atau push. Tutup dengan ringkasan file yang diubah dan hal yang perlu saya cek manual.

## 1. Email kontak (prioritas tertinggi)

- Ganti semua kemunculan `faqih.fnf@gmail.com` di seluruh situs dengan `siteConfig.email`.
- Saat ini email di footer memakai `href="#"`. Ubah menjadi tautan `mailto:` yang berfungsi.
- Cari juga di metadata, halaman lain, dan komponen yang tidak tampil di landing page.

## 2. Identitas perusahaan

Tambahkan bagian **Tentang Wawancarai** di landing page, letakkan sebelum FAQ. Isinya:

- Judul: "Tentang Wawancarai"
- Paragraf misi:
  > Wawancarai lahir dari satu keyakinan sederhana: setiap pencari kerja berhak berlatih sebelum menghadapi wawancara yang sesungguhnya. Banyak kandidat di Indonesia tidak pernah punya kesempatan itu. Wawancarai hadir sebagai teman latihan berbasis AI yang menyesuaikan pertanyaan dengan pengalaman dan posisi yang kamu tuju, lalu memberi umpan balik yang jujur agar kamu datang ke wawancara dengan lebih siap.
- Kartu founder kecil: nama `siteConfig.founder`, jabatan "Founder", latar belakang singkat "Praktisi HR dengan pengalaman lebih dari 8 tahun di industri logistik Indonesia sekaligus fullstack developer.", dan tautan ke `siteConfig.linkedinFounder`.
- Baris kecil: "Didirikan di Jakarta, {siteConfig.foundedYear}."

Ikuti gaya visual komponen lain yang sudah ada. Jangan membuat gaya baru.

## 3. Footer

- Copyright: ubah menjadi `© {tahun} Wawancarai. All rights reserved.`
- Ganti "Created with ❤️ by Faqih Nur Fahmi" menjadi "Didirikan oleh Faqih Nur Fahmi".
- Hapus ikon Facebook dan Instagram yang mengarah ke `#`.
- Ikon LinkedIn: arahkan ke `siteConfig.linkedinCompany` jika sudah diisi; jika masih kosong, arahkan ke `siteConfig.linkedinFounder`.
- Heading "Contact Me" ubah menjadi "Hubungi Kami".
- Tambahkan tautan "Kebijakan Privasi" dan "Syarat & Ketentuan" (lihat tugas 5).
- Perbaiki deskripsi footer: "Wawancarai is an AI-powered mockup interview tool..." menjadi "Wawancarai adalah platform latihan wawancara berbasis AI untuk pencari kerja di Indonesia."

## 4. Label dan bahasa

- Tombol "Contact Me" di hero ubah menjadi "Hubungi Kami".
- Perbaiki salah ketik:
  - "relefan" → "relevan"
  - "dirubah" → "diubah"
  - "mockup interview" → "mock interview" (di semua tempat)
- Periksa sisa teks landing page untuk salah ketik serupa dan perbaiki.

## 5. Kebijakan Privasi dan Syarat & Ketentuan

Buat dua halaman baru: `/privacy` dan `/terms`, dalam Bahasa Indonesia, dengan layout yang sama seperti halaman lain.

**Penting:** sebelum menulis isinya, periksa kode untuk mengetahui praktik data yang sebenarnya. Jangan mengklaim sesuatu yang tidak sesuai kode. Cek khususnya:

- Apakah rekaman video atau audio disimpan, atau hanya diproses di browser?
- Data apa yang disimpan di database (profil, input pengalaman, pertanyaan, jawaban, rating, feedback)?
- Layanan pihak ketiga apa yang menerima data (penyedia AI, speech-to-text, autentikasi, analitik)?
- Apakah ada login, dan dengan metode apa?

**Kebijakan Privasi** minimal memuat: data yang dikumpulkan, penggunaan kamera dan mikrofon, pemrosesan oleh layanan AI pihak ketiga, penyimpanan dan lama retensi, hak pengguna untuk meminta penghapusan data, dan kontak `siteConfig.email`.

**Syarat & Ketentuan** minimal memuat: deskripsi layanan, bahwa hasil AI bersifat latihan dan tidak menjamin hasil wawancara sebenarnya, kewajiban pengguna, batasan tanggung jawab, dan kontak.

Cantumkan tanggal "Terakhir diperbarui" di kedua halaman. Jika ada praktik data yang tidak bisa dipastikan dari kode, tandai dengan komentar `TODO` dan sebutkan di ringkasan akhir.

## 6. Konsistensi fitur

Periksa apakah alur wawancara sudah menerima input lowongan atau posisi yang dilamar (bukan hanya keahlian dan pengalaman).

- Jika **sudah ada**: perbarui deskripsi fitur "AI Generating Question" agar menyebut bahwa pertanyaan disesuaikan dengan pengalaman pengguna dan posisi yang dilamar.
- Jika **belum ada**: jangan ubah teksnya, cukup laporkan di ringkasan akhir.

## 7. Metadata

- Pastikan `title`, `description`, dan Open Graph (`og:title`, `og:description`, `og:url`, `og:site_name`) terisi dan memakai `siteConfig`.
- Tambahkan halaman `/privacy` dan `/terms` ke sitemap jika proyek memilikinya.

## Ringkasan akhir yang saya harapkan

1. Daftar file yang diubah atau dibuat.
2. Hasil `lint` dan `build`.
3. Temuan tugas 6 (input lowongan ada atau belum).
4. Semua `TODO` yang perlu saya isi atau putuskan sendiri.
