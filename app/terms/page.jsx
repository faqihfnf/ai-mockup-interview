import React from "react";
import LegalPage, { LegalSection, legalMetadata } from "../_components/LegalPage";
import { siteConfig } from "@/lib/site-config";

const LAST_UPDATED = "12 Oktober 2026";

export const metadata = legalMetadata({
  title: "Syarat & Ketentuan",
  description: `Syarat dan ketentuan penggunaan layanan latihan wawancara ${siteConfig.name}.`,
  path: "/terms",
});

function Terms() {
  const mail = <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>;

  return (
    <LegalPage title="Syarat & Ketentuan" lastUpdated={LAST_UPDATED}>
      <LegalSection title="1. Penerimaan Syarat">
        {/* TODO: cantumkan nama badan hukum resmi jika Wawancarai sudah berbadan hukum (mis. PT ...) */}
        <p>
          Syarat &amp; Ketentuan ini mengatur penggunaan situs {siteConfig.url} dan layanan {siteConfig.name} (&quot;kami&quot;). Dengan membuat akun atau menggunakan layanan kami, Anda menyatakan telah membaca, memahami, dan menyetujui
          Syarat &amp; Ketentuan ini serta <a href="/privacy">Kebijakan Privasi</a> kami. Jika Anda tidak setuju, mohon untuk tidak menggunakan layanan.
        </p>
      </LegalSection>

      <LegalSection title="2. Deskripsi Layanan">
        <p>{siteConfig.name} adalah platform latihan wawancara kerja berbasis AI. Layanan kami memungkinkan Anda untuk:</p>
        <ul>
          <li>Membuat sesi wawancara dengan pertanyaan dan contoh jawaban yang dihasilkan AI berdasarkan posisi, keahlian, pengalaman kerja, dan bahasa yang Anda pilih.</li>
          <li>Menjawab pertanyaan secara lisan melalui mikrofon, yang kemudian diubah menjadi teks.</li>
          <li>Mendapatkan rating dan umpan balik dari AI untuk setiap jawaban, serta umpan balik keseluruhan di akhir sesi.</li>
          <li>Menyimpan dan melihat kembali riwayat latihan Anda.</li>
        </ul>
        <p>Saat ini layanan disediakan secara gratis. Fitur yang ditandai &quot;soon&quot;, seperti CV Review dan CV Maker, belum tersedia.</p>
      </LegalSection>

      <LegalSection title="3. Akun Pengguna">
        <ul>
          <li>Anda perlu masuk ke akun untuk menggunakan fitur wawancara.</li>
          <li>Anda bertanggung jawab menjaga kerahasiaan akses akun Anda dan atas seluruh aktivitas yang terjadi melalui akun tersebut.</li>
          <li>Anda wajib memberikan informasi yang benar dan tidak menggunakan akun milik orang lain.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Sifat Hasil AI">
        <ul>
          <li>Pertanyaan, contoh jawaban, rating, dan umpan balik dihasilkan secara otomatis oleh AI dan ditujukan semata-mata sebagai bahan latihan.</li>
          <li>Hasil AI dapat tidak akurat, tidak lengkap, atau tidak sesuai dengan standar perusahaan tertentu. Contoh jawaban bukan satu-satunya jawaban yang benar.</li>
          <li>
            Rating dan umpan balik bukan penilaian dari perekrut atau perusahaan mana pun, dan <strong>tidak menjamin</strong> hasil wawancara yang sebenarnya, diterimanya Anda di suatu pekerjaan, maupun hasil karier lainnya.
          </li>
          <li>Hasil transkripsi suara dapat keliru menangkap jawaban Anda, sehingga dapat memengaruhi penilaian AI.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Kewajiban Pengguna">
        <p>Saat menggunakan layanan, Anda setuju untuk:</p>
        <ul>
          <li>Menggunakan layanan hanya untuk tujuan yang sah dan sesuai peraturan perundang-undangan yang berlaku.</li>
          <li>Tidak memasukkan data pribadi orang lain, data pribadi yang bersifat sensitif, atau informasi rahasia milik perusahaan ke dalam formulir maupun jawaban Anda.</li>
          <li>Tidak memasukkan konten yang melanggar hukum, mengandung kebencian, pelecehan, atau melanggar hak pihak lain.</li>
          <li>Tidak menyalahgunakan layanan, termasuk menggunakan otomatisasi atau bot, membebani sistem secara berlebihan, mencoba mengakses data pengguna lain, atau melakukan rekayasa balik terhadap layanan.</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Hak Kekayaan Intelektual">
        <p>
          Seluruh merek, desain, dan kode {siteConfig.name} merupakan milik kami. Jawaban yang Anda berikan tetap menjadi milik Anda; Anda memberi kami izin untuk menyimpan dan memprosesnya, termasuk melalui penyedia AI pihak ketiga, sebatas
          yang diperlukan untuk menyediakan layanan kepada Anda.
        </p>
      </LegalSection>

      <LegalSection title="7. Ketersediaan Layanan">
        <p>
          Layanan disediakan &quot;sebagaimana adanya&quot; dan &quot;sebagaimana tersedia&quot;. Layanan bergantung pada penyedia pihak ketiga (seperti penyedia AI, autentikasi, dan database), sehingga dapat mengalami gangguan,
          keterlambatan, atau kegagalan sewaktu-waktu. Kami dapat mengubah, menambah, atau menghentikan fitur tertentu tanpa pemberitahuan sebelumnya.
        </p>
      </LegalSection>

      <LegalSection title="8. Batasan Tanggung Jawab">
        <p>
          Sejauh diizinkan oleh hukum yang berlaku, {siteConfig.name} tidak bertanggung jawab atas kerugian langsung maupun tidak langsung yang timbul dari penggunaan atau ketidakmampuan menggunakan layanan, termasuk keputusan yang Anda
          ambil berdasarkan hasil AI, hasil wawancara kerja Anda, maupun kehilangan data akibat gangguan layanan pihak ketiga.
        </p>
      </LegalSection>

      <LegalSection title="9. Penghentian Akses">
        <p>
          Kami dapat menangguhkan atau menghentikan akses Anda apabila Anda melanggar Syarat &amp; Ketentuan ini. Anda dapat berhenti menggunakan layanan kapan saja dan meminta penghapusan data Anda sebagaimana diatur dalam{" "}
          <a href="/privacy">Kebijakan Privasi</a>.
        </p>
      </LegalSection>

      <LegalSection title="10. Hukum yang Berlaku">
        {/* TODO: tentukan mekanisme/forum penyelesaian sengketa (mis. musyawarah, lalu pengadilan negeri tertentu) */}
        <p>Syarat &amp; Ketentuan ini diatur oleh dan ditafsirkan berdasarkan hukum Republik Indonesia.</p>
      </LegalSection>

      <LegalSection title="11. Perubahan Syarat & Ketentuan">
        <p>
          Kami dapat memperbarui Syarat &amp; Ketentuan ini dari waktu ke waktu. Perubahan akan dipublikasikan di halaman ini dengan tanggal &quot;Terakhir diperbarui&quot; yang baru. Dengan terus menggunakan layanan setelah perubahan,
          Anda dianggap menyetujui perubahan tersebut.
        </p>
      </LegalSection>

      <LegalSection title="12. Kontak">
        <p>
          Pertanyaan mengenai Syarat &amp; Ketentuan ini dapat dikirimkan ke {mail} atau ke alamat {siteConfig.address}.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

export default Terms;
