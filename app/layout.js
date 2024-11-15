import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Wawancarai - AI Mock Interview ",
  description:
    "Latihan interview dengan AI cerdas yang menyediakan soal dan memberikan penilaian serta umpan balik untuk setiap jawaban Anda. Tingkatkan kemampuan interview Anda melalui wawancara interaktif dan real-time feedback.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
