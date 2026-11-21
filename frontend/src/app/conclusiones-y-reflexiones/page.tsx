import Header from '@/components/Header';

export default function ConclusionesYReflexionesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <Header lightAtTop />

      <section
        className="relative flex min-h-[250px] items-center justify-center bg-cover bg-center px-5 pb-8 pt-16 sm:min-h-[300px] md:min-h-[338px] sm:px-6"
        style={{ backgroundImage: "url('/images/unnamed%20(8).jpg')" }}
      >
        <div className="absolute inset-0 bg-white/45" />
        <h1 className="relative z-10 max-w-[850px] text-center font-[Impact,'Arial_Narrow',sans-serif] text-[42px] font-black uppercase leading-[1.05] text-black sm:text-[56px] md:text-[88px]">
          CONCLUSIONES Y REFLEXIONES
        </h1>
        <div className="absolute bottom-[34px] left-1/2 h-2 w-24 -translate-x-1/2 bg-[#53A7B8] sm:bottom-[42px] md:bottom-[50px]" />
      </section>

      <section
        className="relative min-h-[420px] bg-[#f3dfd0] bg-cover bg-center px-5 py-7 sm:px-8 sm:py-8 md:px-14"
        style={{ backgroundImage: "url('/images/unnamed%20(9).jpg')" }}
      >
        <div className="absolute inset-0 bg-[#f5e4d7]/75" />
        <div className="relative mx-auto grid max-w-[1040px] items-start gap-8 md:grid-cols-[minmax(0,1fr)_340px]">
          <article className="font-sans text-[16px] leading-[1.5] text-[#111]">
            <h2 className="font-[Impact,'Arial_Narrow',sans-serif] text-[30px] font-bold uppercase text-[#123e50] md:text-[34px]">
              CONCLUSIÓN:
            </h2>
            <p className="mt-5">
              A nivel de grupo hemos llegado a la conclusión de que el curso de TIC fue mucho más que aprender a usar herramientas digitales y tecnológicas; ya que se convirtió en un proceso que nos ayudó a comprender de manera más profunda cómo la tecnología puede transformar la educación y enriquecer nuestra labor como futuras docentes. Durante el ciclo, fuimos descubriendo que las TIC no solo hacen más fácil organizar información o presentar contenidos, sino que permiten crear experiencias de aprendizaje más dinámicas, inclusivas y significativas que permitirán que el aprendizaje de los niños sea más entretenido. Es por ello que nosotras resaltamos la dedicación, paciencia y claridad de nuestra maestra Lourdes, ya que gracias a ello pudimos desenvolvernos con mayor confianza, superar temores y fortalecer habilidades que hoy consideramos esenciales para nuestro futuro profesional. Así cerramos este curso con un fuerte sentimiento de gratitud y con la convicción de que todo lo aprendido nos permitirá acompañar a nuestros futuros estudiantes de una forma más humana, cercana y conectada con las necesidades de un mundo cada vez más digital y competitivo.
            </p>
          </article>
          <img
            src="/images/unnamed.gif"
            alt="Niños usando una computadora para aprender"
            className="mx-auto mt-0 w-full max-w-[240px] object-contain sm:max-w-[300px]"
          />
        </div>
      </section>

      <section
        className="relative min-h-[390px] bg-cover bg-center px-5 py-7 sm:px-8 sm:py-6 md:px-14"
        style={{ backgroundImage: "url('/images/unnamed%20(10).jpg')" }}
      >
        <div className="absolute inset-0 bg-white/55" />
        <div className="relative mx-auto grid max-w-[1040px] items-center gap-7 md:grid-cols-[330px_minmax(0,1fr)] md:gap-8">
          <img
            src="/images/unnamed%20(11).jpg"
            alt="Niños aprendiendo juntos con una computadora"
            className="mx-auto w-full max-w-[230px] object-contain sm:max-w-[280px] md:max-w-[330px]"
          />
          <article className="font-sans text-[15px] leading-[1.45] text-[#111] md:text-[16px]">
            <h2 className="mb-4 text-center font-[Impact,'Arial_Narrow',sans-serif] text-[30px] font-bold uppercase text-[#123e50] md:text-right md:text-[34px]">
              REFLEXIÓN:
            </h2>
            <p>
              Al reflexionar sobre todo lo vivido durante este curso, nosotras reconocemos que aprender sobre tecnología significó mucho más que incorporar nuevas herramientas en nuestra formación docente; implicó abrir nuestra mente a nuevas formas de enseñar, comunicarnos y relacionarnos con nuestros futuros estudiantes. Así descubrimos que las TIC, cuando se utilizan con empatía y propósito, pueden convertirse en un apoyo real para incluir a quienes más lo necesitan, motivar a quienes pierden interés y enriquecer las experiencias de aprendizaje de una manera cercana y significativa. También entendimos que, como futuras docentes, tenemos la responsabilidad de mantenernos actualizadas y de asumir con valentía los cambios que exige el mundo digital. Este curso nos hizo ver que la tecnología no reemplaza a la humanidad, sino que puede potenciarla si la usamos con sensibilidad, creatividad y compromiso. Esta reflexión nos deja con el deseo de seguir aprendiendo y aplicar todo lo que hemos adquirido para construir aulas donde la tecnología se convierta en una aliada que inspire, conecte y transforme, con miras a transformar la educación por y para los niños y niñas.
            </p>
          </article>
        </div>
      </section>

      <footer className="flex min-h-[132px] items-center justify-center bg-[#52777c] px-5 py-7 text-center">
        <p className="portfolio-hero-title text-[32px] leading-tight text-white sm:text-[40px] md:text-[52px]">
          ¡Muchas Gracias por ver!
        </p>
      </footer>
    </main>
  );
}
