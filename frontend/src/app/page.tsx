import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <Header />

      <section
        id="inicio"
        className="relative min-h-[540px] bg-cover bg-center md:min-h-[665px]"
        style={{ backgroundImage: "url('/images/hero-biblioteca-hd.png')" }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 z-10 text-center text-white">
          <div className="absolute left-1/2 top-[52%] w-full max-w-[1150px] -translate-x-1/2 -translate-y-1/2 px-5 sm:px-6">
            <h1 className="portfolio-hero-title text-left text-[27px] leading-[1.2] drop-shadow-lg sm:text-[40px] md:text-[52px] md:leading-[1.3]">
              <span>PORTAFOLIO DE EVIDENCIAS DE LA</span>
              <br />
              <span>COMPRENSIÓN Y PRODUCCIÓN DE TEXTOS</span>
            </h1>
            <div className="mx-auto mt-7 h-2 w-24 bg-[#53A7B8]" />
          </div>
          <a href="#presentacion" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80" aria-label="Bajar a la presentación">
            <svg width="28" height="18" viewBox="0 0 28 18" fill="none" aria-hidden="true">
              <path d="m4 4 10 9 10-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      <section id="presentacion" className="grid md:min-h-[375px] md:grid-cols-2">
        <div
          className="min-h-[300px] bg-no-repeat md:min-h-[375px]"
          style={{ backgroundImage: "url('/images/unnamed.png')", backgroundSize: '200% auto', backgroundPosition: 'left center' }}
          role="img"
          aria-label="Niños leyendo un libro"
        />
        <div className="flex flex-col justify-center px-5 py-9 sm:px-8 md:px-16">
          <h2 className="portfolio-hero-title text-center text-3xl leading-tight text-[#171717] md:text-[32px]">
            ¡Te doy una cordial bienvenida a mi portafolio!
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-serif text-[16px] leading-[1.4] text-[#333]">
            Bienvenida querida maestra Meregildo Gómez Magna Ruth a mi Portafolio de Evidencias de la Comprensión y Producción de Textos, un espacio donde se recopilan los principales trabajos, actividades y aprendizajes desarrollados durante el proceso formativo.
          </p>
          <p className="mx-auto mt-5 max-w-xl font-serif text-[16px] leading-[1.4] text-[#333]">
            A través de este portafolio presento las evidencias de mi progreso en la comprensión, análisis y producción de textos, demostrando los conocimientos y habilidades adquiridos a lo largo de la experiencia de aprendizaje.
          </p>
        </div>
      </section>

      <section
        id="indice"
        className="relative overflow-hidden bg-cover bg-center px-0 pt-12 pb-0"
        style={{ backgroundImage: "linear-gradient(to bottom, white 0, rgba(255,255,255,0) 18px), url('/images/unnamed%20(1).png')" }}
      >
        <div className="absolute inset-0 bg-white/55" />
        <div className="relative z-10 mx-auto max-w-xl px-5 sm:px-6">
          <h2 className="portfolio-hero-title text-center text-4xl text-[#155765]">ÍNDICE</h2>
          <ol className="mx-auto mt-6 w-fit max-w-full space-y-1 font-serif text-[16px] sm:text-[17px] text-[#333]">
            <li>1. Presentación</li>
            <li>2. Índice</li>
            <li>3. Introducción</li>
            <li>4. UNIDADES</li>
            <li className="list-disc pl-4">UNIDAD 01</li>
            <li className="list-disc pl-4">UNIDAD 02</li>
            <li className="list-disc pl-4">UNIDAD 03</li>
            <li>5. Conclusiones y reflexión</li>
          </ol>
        </div>
      </section>

      <section id="introduccion" className="grid w-full min-w-0 grid-cols-1 md:min-h-[520px] md:grid-cols-2">
        <div
          className="min-h-[360px] min-w-0 bg-no-repeat md:min-h-[520px]"
          style={{ backgroundImage: "url('/images/unnamed%20(2).png')", backgroundSize: '200% auto', backgroundPosition: 'left center' }}
          role="img"
          aria-label="Estudiante escribiendo en un cuaderno"
        />
        <div className="flex min-w-0 flex-col justify-center px-5 py-9 sm:px-8 md:px-14">
          <h2 className="font-serif text-2xl font-bold italic underline md:text-[28px]">INTRODUCCIÓN:</h2>
          <p className="mt-8 font-serif text-[16px] leading-[1.25] text-[#333]">
            El presente Portafolio de Evidencias de la Comprensión y Producción de Textos reúne los trabajos, actividades y aprendizajes desarrollados durante el proceso formativo. Su propósito es evidenciar el desarrollo de habilidades relacionadas con la comprensión de diversos tipos de textos, así como con la producción escrita de manera clara, coherente y organizada.
          </p>
          <p className="mt-5 font-serif text-[16px] leading-[1.25] text-[#333]">
            A través de las diferentes evidencias recopiladas, se muestran los avances alcanzados en la identificación de ideas principales, interpretación de información, reflexión crítica y elaboración de textos considerando su propósito y destinatario. Asimismo, este portafolio permite reconocer las dificultades encontradas y valorar los aprendizajes adquiridos durante el proceso.
          </p>
          <p className="mt-5 font-serif text-[16px] leading-[1.25] text-[#333]">
            Finalmente, este trabajo constituye una herramienta de reflexión sobre el propio aprendizaje, permitiendo valorar el progreso en las competencias comunicativas y la importancia de fortalecer la comprensión y producción de textos para el desempeño académico y la futura práctica docente.
          </p>
        </div>
      </section>

      <section
        id="datos-academicos"
        className="relative grid min-h-[500px] overflow-hidden bg-white bg-no-repeat px-4 py-0 sm:px-6 md:grid-cols-2"
        style={{
          backgroundImage: "url('/images/unnamed%20(1).png')",
          backgroundSize: '105% auto',
          backgroundPosition: 'center bottom',
        }}
      >
        <div className="absolute inset-0 bg-white/35" />
        <div className="relative z-10 flex translate-x-0 flex-col items-center pt-8 text-center font-serif text-[14px] text-[#171717] md:translate-x-32">
          <p className="font-bold">UNIVERSIDAD NACIONAL DE TRUJILLO</p>
          <p className="font-bold">(UNT)</p>
          <img
            src="/images/unnamed%20(3).png"
            alt="Emblema de la Universidad Nacional de Trujillo"
            className="my-5 w-96 max-w-[70%] object-contain"
          />
          <p className="font-bold">EDUCACIÓN PRIMARIA</p>
        </div>
        <div className="relative z-10 flex translate-x-0 translate-y-0 flex-col justify-center gap-5 px-2 py-6 text-center font-serif text-[14px] text-[#171717] md:-translate-y-5 md:translate-x-12 md:gap-6 md:px-12 md:py-8">
          <div>
            <p className="mb-4">ALUMNA:</p>
            <p>DIAZ CRUZ CORNEJO HARUMY FATIMA</p>
          </div>
          <div>
            <p className="mb-4">DOCENTE:</p>
            <p>MEREGILDO GÓMEZ MAGNA RUTH</p>
          </div>
          <div>
            <p className="mb-4">CURSO:</p>
            <p>DIDÁCTICA DE LA COMPRENSIÓN Y PRODUCCIÓN DE TEXTOS</p>
          </div>
        </div>
      </section>
    </main>
  );
}
