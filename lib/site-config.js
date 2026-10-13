// Identitas perusahaan & kontak. Rujuk dari sini, jangan hardcode di komponen.
export const siteConfig = {
  name: "Wawancarai",
  url: "https://www.wawancarai.com",
  tagline: "Wawancarai adalah platform latihan wawancara berbasis AI untuk pencari kerja di Indonesia.",
  description:
    "Latihan interview dengan AI cerdas yang menyediakan soal dan memberikan penilaian serta umpan balik untuk setiap jawaban Anda. Tingkatkan kemampuan interview Anda melalui wawancara interaktif dan real-time feedback.",
  email: "info@wawancarai.com",
  phone: "+62 899 6423 135",
  whatsapp: "https://wa.me/628996423135",
  address: "Kampung Makasar, Jakarta Timur, DKI Jakarta, Indonesia",
  founder: "Faqih Nur Fahmi",
  foundedYear: "2026",
  linkedinCompany: "", // isi URL halaman LinkedIn Wawancarai jika sudah dibuat
  linkedinFounder: "https://www.linkedin.com/in/faqih-nur-fahmi-b51bb1ab/",
  github: "https://github.com/faqihfnf",
};

// LinkedIn perusahaan jika sudah ada, jika belum pakai LinkedIn founder
export const linkedinUrl = siteConfig.linkedinCompany || siteConfig.linkedinFounder;
