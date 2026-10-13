import React from "react";
import LegalPage, { LegalSection, legalMetadata } from "../_components/LegalPage";
import { siteConfig } from "@/lib/site-config";

const LAST_UPDATED = "12 Oktober 2026";

export const metadata = legalMetadata({
  title: "Kebijakan Privasi",
  description: `Bagaimana ${siteConfig.name} mengumpulkan, menggunakan, dan melindungi data pribadi Anda.`,
  path: "/privacy",
});

function Privacy() {
  const mail = <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>;

  return (
    <LegalPage title="Kebijakan Privasi" lastUpdated={LAST_UPDATED}>
      <LegalSection title="1. Pendahuluan">
        {/* TODO: cantumkan nama badan hukum resmi jika Wawancarai sudah berbadan hukum (mis. PT ...) */}
        <p>
          Kebijakan Privasi ini menjelaskan bagaimana {siteConfig.name} (&quot;kami&quot;) mengumpulkan, menggunakan, menyimpan, dan melindungi data pribadi Anda saat menggunakan situs {siteConfig.url} dan layanan latihan wawancara berbasis AI
          kami. Dengan menggunakan layanan kami, Anda menyetujui praktik yang dijelaskan dalam kebijakan ini.
        </p>
      </LegalSection>

      <LegalSection title="2. Data yang Kami Kumpulkan">
        <p>Kami hanya mengumpulkan data yang diperlukan untuk menjalankan layanan:</p>
        <ul>
          <li>
            {/* TODO: sesuaikan dengan metode login yang aktif di dashboard Clerk (email, Google, dll.) */}
            <strong>Data akun.</strong> Saat Anda mendaftar atau masuk, data akun seperti alamat email, nama, dan foto profil (tergantung metode login yang Anda pilih) dikelola oleh penyedia autentikasi kami. Alamat email Anda juga kami
            simpan di database sebagai penanda kepemilikan data latihan Anda.
          </li>
          <li>
            <strong>Data latihan wawancara.</strong> Posisi pekerjaan, deskripsi pekerjaan atau keahlian, lama pengalaman kerja, dan bahasa wawancara yang Anda isi; pertanyaan dan contoh jawaban yang dihasilkan AI; teks hasil transkripsi
            jawaban Anda; serta rating, umpan balik per pertanyaan, umpan balik keseluruhan, dan tanggal pembuatan.
          </li>
          <li>
            {/* TODO: lengkapi jika penyedia hosting mencatat log akses (alamat IP, user agent, dll.) */}
            <strong>Data teknis.</strong> Cookie yang diperlukan untuk menjaga sesi login Anda. Saat ini kami tidak menggunakan alat analitik atau cookie iklan.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Penggunaan Kamera dan Mikrofon">
        <ul>
          <li>
            <strong>Kamera</strong> hanya ditampilkan di layar Anda untuk membuat simulasi wawancara terasa nyata. Video tidak direkam, tidak disimpan, dan tidak dikirim ke server kami.
          </li>
          <li>
            <strong>Mikrofon</strong> digunakan untuk mengubah jawaban lisan Anda menjadi teks melalui fitur pengenalan suara bawaan browser (Web Speech API). Pada sebagian browser, misalnya Google Chrome, proses ini dijalankan oleh layanan
            pengenalan suara milik penyedia browser sehingga audio Anda dikirim oleh browser ke penyedia tersebut sesuai kebijakan privasinya. Kami tidak merekam maupun menyimpan audio Anda. Yang kami terima dan simpan hanyalah teks
            hasil transkripsi.
          </li>
          <li>Akses kamera dan mikrofon hanya aktif setelah Anda memberikan izin, dan dapat Anda cabut kapan saja melalui pengaturan browser.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Pemrosesan oleh Layanan Pihak Ketiga">
        <p>Untuk menjalankan layanan, sebagian data Anda diproses oleh penyedia layanan berikut:</p>
        <ul>
          <li>
            {/* TODO: pastikan tier Gemini API yang dipakai. Pada tier gratis, Google dapat menggunakan data input/output untuk meningkatkan produknya; pada tier berbayar tidak. Sesuaikan kalimat ini. */}
            <strong>Google (Gemini API)</strong>: memproses posisi, deskripsi pekerjaan, pengalaman, bahasa wawancara, dan teks jawaban Anda untuk menghasilkan pertanyaan, contoh jawaban, rating, dan umpan balik.
          </li>
          <li>
            <strong>Clerk</strong>: layanan autentikasi untuk pendaftaran, login, dan pengelolaan akun.
          </li>
          <li>
            <strong>Neon</strong>: layanan database tempat data latihan Anda disimpan. Server database berada di Amerika Serikat, sehingga data Anda ditransfer dan disimpan di luar wilayah Indonesia.
          </li>
          <li>
            <strong>Penyedia pengenalan suara browser</strong>: sebagaimana dijelaskan pada bagian 3.
          </li>
          {/* TODO: tambahkan penyedia hosting situs (mis. Vercel) beserta lokasi servernya */}
          <li>
            <strong>Tally</strong>: hanya jika Anda memilih untuk mengisi formulir &quot;Give Feedback&quot;, data yang Anda isi di formulir tersebut diproses oleh Tally.
          </li>
        </ul>
        <p>Kami tidak menjual data pribadi Anda dan tidak membagikannya kepada pihak lain untuk tujuan iklan.</p>
      </LegalSection>

      <LegalSection title="5. Penggunaan Data">
        <ul>
          <li>Menyediakan fitur latihan wawancara: membuat pertanyaan, menilai jawaban, dan memberi umpan balik.</li>
          <li>Menyimpan riwayat latihan agar Anda dapat melihat kembali hasil wawancara Anda.</li>
          <li>Mengamankan akun dan memastikan setiap pengguna hanya dapat mengakses datanya sendiri.</li>
          <li>Menanggapi pertanyaan atau permintaan yang Anda kirimkan kepada kami.</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Penyimpanan dan Retensi Data">
        {/* TODO: tentukan masa retensi resmi dan apakah data dihapus otomatis saat akun Clerk dihapus (saat ini belum ada mekanisme otomatisnya) */}
        <p>
          Data latihan wawancara disimpan selama akun Anda aktif dan sampai Anda menghapusnya. Anda dapat menghapus sebuah sesi wawancara kapan saja dari halaman Wawancara; tindakan ini menghapus permanen sesi tersebut beserta jawaban,
          rating, dan umpan balik terkait. Untuk menghapus seluruh data dan akun Anda, kirim permintaan ke {mail}.
        </p>
      </LegalSection>

      <LegalSection title="7. Hak Anda">
        <p>Sesuai peraturan perundang-undangan yang berlaku, termasuk Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi, Anda berhak untuk:</p>
        <ul>
          <li>Mengakses data latihan Anda melalui halaman Wawancara.</li>
          <li>Meminta perbaikan data yang tidak akurat.</li>
          <li>Menghapus sesi wawancara secara mandiri, atau meminta penghapusan seluruh data dan akun Anda.</li>
          <li>Menarik persetujuan, misalnya dengan mencabut izin kamera dan mikrofon atau berhenti menggunakan layanan.</li>
        </ul>
        <p>Untuk menggunakan hak-hak tersebut, hubungi kami melalui {mail}.</p>
      </LegalSection>

      <LegalSection title="8. Keamanan Data">
        <p>
          Data dikirim melalui koneksi terenkripsi, dan akses ke data latihan dibatasi sehingga setiap pengguna hanya dapat melihat datanya sendiri. Meskipun demikian, tidak ada sistem yang sepenuhnya bebas risiko, sehingga kami tidak
          dapat menjamin keamanan mutlak.
        </p>
      </LegalSection>

      <LegalSection title="9. Perubahan Kebijakan">
        <p>Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Perubahan akan dipublikasikan di halaman ini dengan tanggal &quot;Terakhir diperbarui&quot; yang baru.</p>
      </LegalSection>

      <LegalSection title="10. Hubungi Kami">
        <p>
          Jika Anda memiliki pertanyaan tentang kebijakan ini atau data pribadi Anda, hubungi kami di {mail} atau di alamat {siteConfig.address}.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

export default Privacy;
