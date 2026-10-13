import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { siteConfig } from "@/lib/site-config";

// Metadata halaman legal; openGraph halaman menggantikan milik root layout, jadi siteName dkk ditulis ulang
export function legalMetadata({ title, description, path }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: "id_ID",
      type: "website",
    },
  };
}

export function LegalSection({ title, children }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold text-indigo-700">{title}</h2>
      <div className="mt-3 space-y-3 text-slate-700 leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_a]:font-semibold [&_a]:text-purple-600 [&_a:hover]:text-indigo-800">{children}</div>
    </section>
  );
}

function LegalPage({ title, lastUpdated, children }) {
  return (
    <div>
      <Navbar />
      <article className="mx-auto max-w-screen-md px-4 pb-16 pt-32 sm:px-6 lg:px-8 text-black">
        <h1 className="text-3xl font-extrabold text-transparent bg-gradient-to-l from-sky-600 via-purple-600 to-pink-600 bg-clip-text sm:text-5xl pb-2">{title}</h1>
        <p className="mt-2 text-sm text-slate-500">Terakhir diperbarui: {lastUpdated}</p>
        {children}
      </article>
      <Footer />
    </div>
  );
}

export default LegalPage;
