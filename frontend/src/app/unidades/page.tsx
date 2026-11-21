import Header from '@/components/Header';

export default function UnidadesPage() {
  return (
    <main className="min-h-screen bg-[#52777c]">
      <Header lightAtTop />

      <section
        className="relative flex min-h-[230px] items-center justify-center bg-cover bg-center px-5 pb-7 pt-16 sm:min-h-[280px] sm:px-6"
        style={{ backgroundImage: "url('/images/unnamed%20(6).jpg')" }}
      >
        <div className="absolute inset-0 bg-white/45" />
        <h1 className="relative z-10 text-center font-[Impact,'Arial_Narrow',sans-serif] text-[42px] font-black uppercase leading-[1.05] tracking-wide text-[#0c3942] sm:text-[54px] md:text-[88px]">
          CICLO IV - TRABAJOS
        </h1>
        <div className="absolute bottom-[54px] left-1/2 h-2 w-24 -translate-x-1/2 bg-[#53A7B8] sm:bottom-[76px]" />
      </section>

      <section className="min-h-[calc(100vh-280px)] bg-[#52777c] px-5 py-5 md:px-8">
        <div className="mx-auto grid max-w-[1040px] grid-cols-1 items-start gap-7 sm:gap-6 md:grid-cols-2 md:gap-6">
          <div className="text-center">
            <img
              src="/images/unnamed%20(42).png"
              alt="Docente y estudiantes compartiendo un momento de aprendizaje"
              className="h-[260px] w-full rounded-sm object-cover sm:h-[330px]"
            />
            <a
              href="/unidades/unidad-i"
              className="mt-3 inline-block font-[Impact,'Arial_Narrow',sans-serif] text-[23px] font-bold uppercase text-[#e1ecef] underline decoration-2 underline-offset-4 hover:text-white sm:mt-4 sm:text-[26px]"
            >
              UNIDAD I
            </a>
          </div>
          <div className="text-center">
            <img
              src="/images/unnamed%20(43).png"
              alt="Estudiante preparada para aprender y crear"
              className="h-[260px] w-full rounded-sm object-cover sm:h-[330px]"
            />
            <a
              href="/unidades/unidad-ii"
              className="mt-3 inline-block font-[Impact,'Arial_Narrow',sans-serif] text-[23px] font-bold uppercase text-[#e1ecef] underline decoration-2 underline-offset-4 hover:text-white sm:mt-4 sm:text-[26px]"
            >
              UNIDAD II
            </a>
          </div>
          <div className="text-center">
            <img
              src="/images/unnamed%20(44).png"
              alt="Materiales escolares para aprender y crear"
              className="h-[260px] w-full rounded-sm object-cover sm:h-[330px]"
            />
            <a
              href="/unidades/unidad-iii"
              className="mt-3 inline-block font-[Impact,'Arial_Narrow',sans-serif] text-[23px] font-bold uppercase text-[#e1ecef] underline decoration-2 underline-offset-4 hover:text-white sm:mt-4 sm:text-[26px]"
            >
              UNIDAD III
            </a>
          </div>
          <div className="text-center">
            <img
              src="/images/unnamed%20(7).jpg"
              alt="Carpeta digital de evidencias en Google Drive"
              className="h-[260px] w-full rounded-sm object-cover sm:h-[330px]"
            />
            <a
              href="https://drive.google.com/drive/folders/1q6XE9CQhyMHzKWBG3pyzdehiT1c4IDD1"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block font-[Impact,'Arial_Narrow',sans-serif] text-[23px] font-bold uppercase text-[#e1ecef] underline decoration-2 underline-offset-4 hover:text-white sm:mt-4 sm:text-[26px]"
            >
              PORTAFOLIO - DRIVE
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#e1ecef] px-5 py-7 text-center">
        <p className="portfolio-hero-title text-[24px] leading-tight text-[#174b56] sm:text-[30px] md:text-[38px]">
          ¡Juntos fortalecemos la comprensión y producción de textos para expresar ideas, comprender el mundo y aprender con creatividad!
        </p>
      </section>
    </main>
  );
}
