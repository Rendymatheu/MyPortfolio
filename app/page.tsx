"use client";

/*
  🔹 Versi Revisi Lengkap
  - Spacing antar elemen diperluas (gap & padding ditambah)
  - Efek hover lembut di card, tombol, dan container
  - Warna putih semi-transparan (glass effect)
  - Shadow lembut + border radius besar untuk kesan modern
  - Layout lebih proporsional di semua ukuran layar
*/

import React from "react";

const IconGithub = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.109-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const IconLinkedIn = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.783 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const IconEmail = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
  </svg>
);

// =======================================================================
//  KOMPONEN PROYEK (CARD)
// =======================================================================

const ProjectCard = ({
  title,
  description,
  tech,
}: {
  title: string;
  description: string;
  tech: string[];
}) => (
  <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 overflow-hidden transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
    <img
      src={`https://placehold.co/600x400/E0F2FE/1E40AF?text=${title.replace(
        " ",
        "+"
      )}`}
      alt={`Placeholder untuk ${title}`}
      className="w-full h-48 object-cover"
    />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 mb-4 text-sm flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((item) => (
          <span
            key={item}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// =======================================================================
//  ITEM PENDIDIKAN
// =======================================================================

const EducationItem = ({
  school,
  degree,
  date,
}: {
  school: string;
  degree: string;
  date: string;
}) => (
  <div className="mb-6 relative pl-6 border-l-4 border-emerald-500">
    <span className="absolute -left-2 top-0 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white"></span>
    <p className="text-xs text-gray-500 uppercase font-medium">{date}</p>
    <h3 className="text-lg font-bold text-gray-900 mt-1">{school}</h3>
    <p className="text-md font-semibold text-gray-700">{degree}</p>
  </div>
);

// =======================================================================
//  HALAMAN UTAMA
// =======================================================================

export default function Home() {
  const profileImage = "/Rendy.png";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 font-sans text-gray-800">
      {/* NAVBAR */}
      <nav className="bg-gray-800 shadow-sm p-4 sticky top-0 z-10">
        <div className="container mx-auto max-w-6xl flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">PORTFOLIO</h1>
          <div>
            <a
              href="#"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* KONTEN UTAMA */}
      <main className="container mx-auto max-w-6xl px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* PROFIL */}
          <aside className="md:col-span-1">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <img
                  src={profileImage}
                  alt="Foto Profil Rendy Matheu"
                  width="150"
                  height="150"
                  className="rounded-full mb-5 border-4 border-blue-400 shadow-md object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://placehold.co/150x150/60A5FA/FFFFFF?text=Foto+Anda";
                  }}
                />
                <h1 className="text-3xl font-bold text-gray-900">
                  Rendy Matheu
                </h1>
                <p className="text-lg text-blue-600 font-medium mt-1">
                  Mahasiswa / Web Developer
                </p>
                <p className="text-gray-700 mt-4 text-sm max-w-xs">
                  Saya adalah seorang web developer yang tertarik pada teknologi
                  modern dan selalu antusias untuk mempelajari hal-hal baru.
                </p>

                <a
                  href="mailto:rendy.matheu@example.com"
                  className="mt-6 w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md"
                >
                  Hubungi Saya
                </a>

                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                    aria-label="Link ke GitHub"
                  >
                    <IconGithub />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                    aria-label="Link ke LinkedIn"
                  >
                    <IconLinkedIn />
                  </a>
                  <a
                    href="mailto:rendy.matheu@example.com"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                    aria-label="Email"
                  >
                    <IconEmail />
                  </a>
                </div>
              </div>

              {/* TEKNOLOGI */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider text-center mb-4">
                  Teknologi yang saya kuasai
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                    Next.js
                  </span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                    React
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                    TypeScript
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                    Tailwind CSS
                  </span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                    Node.js
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                    Prisma
                  </span>
                </div>
              </div>
            </div>
          </aside>

          {/* KANAN */}
          <section className="md:col-span-2 flex flex-col gap-10">
            {/* SKILLS */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-200 p-8 hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-500 pb-2">
                Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <ProjectCard
                  title="Website E-Commerce Modern"
                  description="Platform e-commerce lengkap dengan fitur keranjang, checkout, dan manajemen produk..."
                  tech={["Next.js", "Stripe", "Prisma"]}
                />
                <ProjectCard
                  title="Dashboard Admin Interaktif"
                  description="Aplikasi dashboard untuk memantau data bisnis secara real-time dengan grafik..."
                  tech={["React", "Chart.js", "REST API"]}
                />
                <ProjectCard
                  title="Landing Page Perusahaan"
                  description="Desain landing page yang responsif, cepat, dan dioptimalkan untuk konversi..."
                  tech={["Next.js", "Framer Motion", "SEO"]}
                />
                <ProjectCard
                  title="Aplikasi Chat Realtime"
                  description="Aplikasi chat yang memungkinkan komunikasi instan antar pengguna..."
                  tech={["Node.js", "Socket.IO", "MongoDB"]}
                />
              </div>
            </div>

            {/* PENDIDIKAN */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-200 p-8 hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-emerald-500 pb-2">
                Pendidikan
              </h2>
              <EducationItem
                school="Universitas Tarumanagara"
                degree="S1 - Teknik Informatika"
                date="2021 - 2025"
              />
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-800 shadow-inner mt-10 p-5 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Rendy Matheu. All rights reserved.</p>
        <p>Built with Next.js and Tailwind CSS.</p>
      </footer>
    </div>
  );
}
