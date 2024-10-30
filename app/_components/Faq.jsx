import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Faq() {
  return (
    <section id="faq" className=" px-2 py-2 md:px-6 md:py-6">
      <div className=" px-4 py-8 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold md:text-3xl lg:text-5xl  text-indigo-700">
            Frequently Asked Questions
          </h2>
        </div>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem
          value="item-1"
          className="bg-slate-50/20 rounded-lg mb-2 px-4">
          <AccordionTrigger className="text-lg md:text-xl text-left lg:text-2xl">
            Apakah platform ini gratis?
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-lg text-indigo-800 font-semibold">
            Ya! Platform ini gratis untuk membantu kalian mempersiapkan diri
            menghadapi wawancara kerja.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="bg-slate-50/20 rounded-lg mb-2 px-4">
          <AccordionTrigger className="text-lg md:text-xl text-left lg:text-2xl">
            Bagaimana cara kerja platform ini?
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-lg text-indigo-800 font-semibold">
            Platform ini menggunakan AI untuk menghasilkan pertanyaan wawancara,
            mengevaluasi jawaban anda, dan memberikan umpan balik serta rating
            untuk membantu Anda mempersiapkan diri sebelum menghadapi wawancara
            kerja sesungguhnya.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="bg-slate-50/20 rounded-lg mb-2 px-4">
          <AccordionTrigger className="text-lg md:text-xl text-left lg:text-2xl">
            Apakah platform ini cocok untuk semua tingkat pengalaman?
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-lg text-indigo-800 font-semibold">
            Ya, platform ini dirancang untuk semua pencari kerja, dari fresh
            graduate hingga profesional berpengalaman. Pertanyaan dan umpan
            balik akan disesuaikan dengan level dan pengalaman kerja pengguna.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="bg-slate-50/20 rounded-lg mb-2 px-4">
          <AccordionTrigger className="text-lg md:text-xl text-left lg:text-2xl">
            Apakah bisa memilih posisi pekerjaan tertentu untuk latihan?
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-lg text-indigo-800 font-semibold">
            Tentu! Anda bisa memilih jenis pekerjaan atau industri yang ingin
            Anda latih, dan AI akan menyesuaikan pertanyaan yang relevan dengan
            bidang tersebut.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className="bg-slate-50/20 rounded-lg mb-2 px-4">
          <AccordionTrigger className="text-lg md:text-xl text-left lg:text-2xl">
            Apakah hasil dan umpan balik akan disimpan?
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-lg text-indigo-800 font-semibold">
            Ya! Semua hasil dan umpan balik akan disimpan dan dapat diakses
            kapan saja dengan mudah agar anda bisa melihat kembali hasil
            interview anda.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-6"
          className="bg-slate-50/20 rounded-lg mb-2 px-4">
          <AccordionTrigger className="text-lg md:text-xl text-left lg:text-2xl">
            Apakah video wawancara akan disimpan?
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-lg text-indigo-800 font-semibold">
            Tidak perlu khawatir! Platform tidak merekam video anda sama sekali.
            Fitur opencam hanya digunakan untuk simulasi agar wawancara menjadi
            lebih nyata. Anda bisa berlatih manjawab wawancara dengan
            menggunakan fitur opencam
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="">
        {/* Purple gradient */}
        <div className="absolute -z-50 -mt-64  left-0 w-full blur-[120px] h-1/3 bg-gradient-to-tl from-violet-300 via-transparent to-pink-300 "></div>
        {/* Blue gradient */}
        <div className="absolute -z-50 -mt-64 right-0 w-[60%] blur-[110px] h-1/6 bg-gradient-to-tr from-cyan-200 via-sky-200 to-green-200"></div>
      </div>
    </section>
  );
}

export default Faq;
