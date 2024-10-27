import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

function Faq() {
  return (
    <section className="px-24 py-12">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-5xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="bg-slate-50/20 rounded-lg mb-2 px-4">
          <AccordionTrigger className="text-2xl">Apakah platform ini gratis?</AccordionTrigger>
          <AccordionContent className="text-lg">Ya! Platform ini gratis untuk membantu kalian mempersiapkan diri menghadapi wawancara kerja.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="bg-slate-50/20 rounded-lg mb-2 px-4">
          <AccordionTrigger className="text-2xl">Bagaimana cara kerja platform ini?</AccordionTrigger>
          <AccordionContent className="text-lg">
            Platform ini menggunakan AI untuk menghasilkan pertanyaan wawancara, mengevaluasi jawaban anda, dan memberikan umpan balik serta rating untuk membantu Anda mempersiapkan diri sebelum menghadapi wawancara kerja sesungguhnya.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="bg-slate-50/20 rounded-lg mb-2 px-4">
          <AccordionTrigger className="text-2xl">Apakah platform ini cocok untuk semua tingkat pengalaman?</AccordionTrigger>
          <AccordionContent className="text-lg">
            Ya, platform ini dirancang untuk semua pencari kerja, dari fresh graduate hingga profesional berpengalaman. Pertanyaan dan umpan balik akan disesuaikan dengan level dan pengalaman kerja pengguna.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="bg-slate-50/20 rounded-lg mb-2 px-4">
          <AccordionTrigger className="text-2xl">Apakah bisa memilih posisi pekerjaan tertentu untuk latihan?</AccordionTrigger>
          <AccordionContent className="text-lg">Tentu! Anda bisa memilih jenis pekerjaan atau industri yang ingin Anda latih, dan AI akan menyesuaikan pertanyaan yang relevan dengan bidang tersebut.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="bg-slate-50/20 rounded-lg mb-2 px-4">
          <AccordionTrigger className="text-2xl">Apakah hasil dan umpan balik akan disimpan?</AccordionTrigger>
          <AccordionContent className="text-lg">Ya! Semua hasil dan umpan balik akan disimpan dan dapat diakses kapan saja dengan mudah agar anda bisa melihat kembali hasil interview anda.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default Faq;
