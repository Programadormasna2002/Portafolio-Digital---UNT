import Header from '@/components/Header';

export const instant = false;

type Evidencia = {
  id: number;
  titulo: string;
  descripcion: string | null;
  tipo: string;
  archivoUrl: string | null;
  imagenUrl: string | null;
};

type Unidad = {
  titulo: string;
  slug: string;
  descripcion: string;
  evidencias: Evidencia[];
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000';

async function getUnidad(slug: string): Promise<Unidad | null> {
  try {
    const response = await fetch(`${apiUrl}/unidades/${slug}`, {
      cache: 'no-store',
    });

    if (!response.ok) return null;
    return response.json();
  } catch {
    return null;
  }
}

export default async function UnidadPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const unidad = await getUnidad(slug);
  const isUnidadUno = slug === 'unidad-i';
  const isUnidadDos = slug === 'unidad-ii';
  const isUnidadTres = slug === 'unidad-iii';

  return (
    <main className="unit-page min-h-screen bg-white text-slate-800">
      <Header lightAtTop={isUnidadDos || isUnidadTres} />

      <section
        className="relative flex min-h-[270px] items-center justify-center bg-cover bg-center px-5 pb-8 pt-20 sm:min-h-[313px] sm:px-6"
        style={{
          backgroundImage: `url('${isUnidadTres ? '/images/unnamed%20(4).jpg' : isUnidadDos ? '/images/unnamed%20(3).jpg' : '/images/unnamed.jpg'}')`,
        }}
      >
        <div className={`absolute inset-0 ${isUnidadDos || isUnidadTres ? 'bg-white/45' : 'bg-black/45'}`} />
        <h1 className="relative z-10 text-center font-[Impact,'Arial_Narrow',sans-serif] text-[42px] font-black uppercase leading-[1.05] tracking-wide text-black sm:text-6xl md:text-[88px]">
          {unidad?.titulo ?? 'Unidad no encontrada'}
        </h1>
        {(isUnidadDos || isUnidadTres) && <div className="absolute bottom-[86px] left-1/2 h-2 w-24 -translate-x-1/2 bg-[#53A7B8]" />}
      </section>

      <section className={`${isUnidadDos ? 'min-h-[320px] py-10' : 'min-h-[calc(100vh-313px)] py-10'} bg-[#e1ecef] px-6 md:px-14`}>
        {!unidad ? (
          <p className="mx-auto max-w-5xl text-slate-700">
            No encontramos esa unidad. Verifica que el backend esté activo y que la unidad exista.
          </p>
        ) : (
          <div className="mx-auto max-w-[1180px]">
            <h2 className="text-center font-[Impact,'Arial_Narrow',sans-serif] text-[30px] font-bold uppercase leading-tight tracking-wide text-[#123e50] underline decoration-2 underline-offset-4 md:text-[36px]">
              {isUnidadUno
                ? 'ENFOQUE DEL ÁREA: EXPRESIÓN Y COMPRENSIÓN DE TEXTOS ORALES: ESTRATEGIA'
                : isUnidadDos
                  ? 'COMPRENSIÓN DE TEXTOS ESCRITOS: ESTRATEGIAS'
                  : isUnidadTres
                    ? 'EL USO Y APLICACIÓN DE LA INTELIGENCIA ARTIFICIAL'
                  : unidad.titulo}
            </h2>

            <div className={`${isUnidadDos ? 'mt-7' : 'mt-10'} space-y-4 text-center text-[17px] leading-[1.45] text-[#172b35] md:mt-8 md:text-[19px]`}>
              {isUnidadUno ? (
                <>
                  <p>
                    En esta unidad fortalecimos nuestras habilidades de expresión y comprensión de textos orales, reconociendo la importancia de escuchar, comprender y comunicar nuestras ideas de manera clara, coherente y respetuosa.
                  </p>
                  <p>
                    A través de diferentes actividades y estrategias, desarrollamos nuestra capacidad para identificar información, interpretar mensajes, organizar ideas y expresar opiniones de acuerdo con diversas situaciones comunicativas. Asimismo, practicamos la escucha activa y la participación oral, valorando las ideas de los demás.
                  </p>
                </>
              ) : isUnidadDos ? (
                <p>
                  En esta unidad se desarrolló el tema “Comprensión de textos escritos: estrategias”, mediante el cual aprendimos a reconocer y aplicar diferentes estrategias que facilitan la comprensión de los textos. Asimismo, conocimos la importancia de trabajar los momentos de la lectura (antes, durante y después), utilizando actividades que permitan activar los conocimientos previos, identificar información, realizar inferencias y reflexionar sobre lo leído. Estos aprendizajes fortalecieron nuestra formación como futuras docentes, ya que nos brindan herramientas para fomentar el hábito lector y desarrollar la comprensión lectora en los estudiantes de Educación Primaria.
                </p>
              ) : isUnidadTres ? (
                <>
                  <p>
                    En esta unidad hemos trabajado sobre el uso responsable de la inteligencia artificial y los riesgos de la usurpación de identidad. Hemos elaborado ideas, compartido ejemplos y aprendido cómo la tecnología puede ayudarnos, pero también cómo puede ser utilizada para engañar cuando no se maneja con cuidado.
                  </p>
                  <p>
                    Gracias a estos nuevos conocimientos, ahora comprendemos la importancia de proteger nuestra identidad digital, verificar la información y usar la IA de manera ética y consciente. Los beneficios de estos aprendizajes son enormes, porque nos permiten aprovechar lo bueno de la tecnología sin exponernos a peligros innecesarios.
                  </p>
                  <p>
                    De esta manera, fortalecemos nuestra responsabilidad digital y construimos un entorno más seguro, donde la inteligencia artificial sea una aliada y no una amenaza.
                  </p>
                </>
              ) : (
                <p>{unidad.descripcion}</p>
              )}
            </div>

            {isUnidadDos && (
              <figure className="mx-auto mt-12 w-full max-w-[866px] text-center">
                <img
                  src="/images/unnamed%20(17).png"
                  alt="Estudiantes y docente trabajando juntos alrededor de una lectura"
                  className="h-auto w-full"
                />
                <figcaption className="mt-5 font-serif text-[20px] italic text-[#356c78]">
                  “Leer es comprender, descubrir y construir nuevos aprendizajes”.
                </figcaption>
              </figure>
            )}

            {isUnidadTres && (
              <figure className="mx-auto mt-10 w-full max-w-[1040px]">
                <img
                  src="/images/unnamed%20(5).jpg"
                  alt="Docente y estudiantes aprendiendo sobre inteligencia artificial en el aula"
                  className="h-auto w-full"
                />
                <figcaption className="mt-4 text-center font-[cursive] text-[18px] italic text-[#293b3f] md:text-[20px]">
                  Con el uso de la Inteligencia Artificial, crear es más simple y transformar es más fácil.
                </figcaption>
              </figure>
            )}

            {unidad.evidencias.length > 0 && (
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {unidad.evidencias.map((evidencia) => (
                  <article key={evidencia.id} className="overflow-hidden bg-white/80">
                    {evidencia.imagenUrl && (
                      <img src={evidencia.imagenUrl} alt={evidencia.titulo} className="h-52 w-full object-cover" />
                    )}
                    <div className="p-5">
                      <h3 className="text-xl font-bold">{evidencia.titulo}</h3>
                      {evidencia.descripcion && <p className="mt-3 leading-6 text-slate-700">{evidencia.descripcion}</p>}
                      {evidencia.archivoUrl && (
                        <a href={evidencia.archivoUrl} target="_blank" rel="noreferrer" className="mt-4 inline-block font-semibold text-[#287f91] hover:underline">
                          Abrir evidencia →
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {isUnidadTres && unidad && (
        <section aria-labelledby="semana-11" className="bg-[#e1ecef] pb-8">
          <div className="flex min-h-[126px] items-center justify-center bg-[#52777c] px-4 text-center">
            <h2 id="semana-11" className="font-[Impact,'Arial_Narrow',sans-serif] text-4xl font-bold text-white md:text-[44px]">
              SEMANA 11
            </h2>
          </div>
          <div className="mx-auto grid max-w-[1040px] grid-cols-1 items-center gap-6 px-5 py-5 md:grid-cols-[minmax(0,1.55fr)_140px_minmax(0,0.72fr)] md:gap-7 md:px-0">
            <img
              src="/images/unnamed%20(33).png"
              alt="Estudiantes conversan sobre los riesgos de la suplantación digital"
              className="h-auto w-full"
            />
            <div className="flex items-center justify-center gap-4 md:flex-col md:gap-5">
              <img
                src="/images/unnamed%20(34).png"
                alt="Ilustración de inteligencia artificial"
                className="h-[120px] w-[120px] object-contain"
              />
              <img
                src="/images/unnamed%20(35).png"
                alt="Niños compartiendo sus ideas"
                className="h-[120px] w-[140px] object-contain"
              />
            </div>
            <div className="flex flex-col items-center gap-5 text-center">
              <a
                href="https://docs.google.com/document/d/17C2OuFiZK_a3nIa0tsZvPITekYOR6Nym/edit?usp=sharing&ouid=117327838603435301229&rtpof=true&sd=true"
                target="_blank"
                rel="noreferrer"
                className="font-[cursive] text-[23px] font-bold italic text-[#356c78] underline decoration-2 underline-offset-4"
              >
                Link del trabajo
              </a>
              <a
                href="https://docs.google.com/document/d/17C2OuFiZK_a3nIa0tsZvPITekYOR6Nym/edit?usp=sharing&ouid=117327838603435301229&rtpof=true&sd=true"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir el trabajo de la semana 11"
              >
                <img
                  src="/images/unnamed%20(36).png"
                  alt="Vista previa del trabajo sobre deepfakes y suplantación de identidad"
                  className="max-h-[190px] w-full object-contain"
                />
              </a>
            </div>
          </div>
        </section>
      )}

      {isUnidadTres && unidad && (
        <section aria-labelledby="semana-12" className="bg-[#e1ecef] pb-5">
          <div className="flex min-h-[90px] items-center justify-center bg-[#52777c] px-4 text-center md:min-h-[126px]">
            <h2 id="semana-12" className="font-[Impact,'Arial_Narrow',sans-serif] text-4xl font-bold text-white md:text-[44px]">
              SEMANA 12
            </h2>
          </div>
          <div className="mx-auto grid max-w-[1040px] grid-cols-1 items-center gap-6 px-5 py-5 md:grid-cols-[150px_240px_minmax(0,1fr)] md:gap-5 md:px-0">
            <div className="flex items-center justify-center gap-4 md:flex-col md:gap-5">
              <img
                src="/images/unnamed%20(40).png"
                alt="Ilustración de inteligencia artificial"
                className="h-[140px] w-[140px] object-contain"
              />
              <img
                src="/images/unnamed%20(35).png"
                alt="Niños compartiendo sus ideas"
                className="h-[120px] w-[140px] object-contain"
              />
            </div>
            <div className="flex flex-col items-center gap-5 text-center">
              <a
                href="https://drive.google.com/drive/folders/1Tx4c_wefFRlbfVijr5c4VOQrql5fLDYt?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="font-[cursive] text-[23px] font-bold italic text-[#356c78] underline decoration-2 underline-offset-4"
              >
                Link del trabajo
              </a>
              <a
                href="https://drive.google.com/drive/folders/1Tx4c_wefFRlbfVijr5c4VOQrql5fLDYt?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="-mt-3 max-w-full break-all text-left text-[13px] leading-[1.2] text-[#275d6d] underline"
              >
                https://drive.google.com/drive/folders/1Tx4c_wefFRlbfVijr5c4VOQrql5fLDYt?usp=sharing
              </a>
              <a
                href="https://drive.google.com/drive/folders/1Tx4c_wefFRlbfVijr5c4VOQrql5fLDYt?usp=sharing"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir el trabajo de la semana 12 en Google Drive"
              >
                <img
                  src="/images/unnamed%20(41).png"
                  alt="Vista previa del cuadro comparativo sobre inteligencia artificial"
                  className="max-h-[240px] w-full object-contain"
                />
              </a>
            </div>
            <img
              src="/images/unnamed%20(37).png"
              alt="Estudiantes trabajan en equipo sobre inteligencia artificial"
              className="h-auto w-full"
            />
          </div>
        </section>
      )}

      {isUnidadTres && unidad && (
        <section aria-labelledby="semana-13" className="bg-[#e1ecef] pb-8">
          <div className="flex min-h-[90px] items-center justify-center bg-[#52777c] px-4 text-center md:min-h-[126px]">
            <h2 id="semana-13" className="font-[Impact,'Arial_Narrow',sans-serif] text-4xl font-bold text-white md:text-[44px]">
              SEMANA 13
            </h2>
          </div>
          <div className="mx-auto grid max-w-[1040px] grid-cols-1 items-center gap-6 px-5 py-5 md:grid-cols-[minmax(0,1.55fr)_150px_minmax(0,0.72fr)] md:gap-7 md:px-0">
            <img
              src="/images/unnamed%20(37).png"
              alt="Estudiantes crean una guía para el uso responsable de la inteligencia artificial"
              className="h-auto w-full"
            />
            <div className="flex items-center justify-center gap-4 md:flex-col md:gap-5">
              <img
                src="/images/unnamed%20(38).png"
                alt="Canva e inteligencia artificial"
                className="h-[130px] w-[130px] object-contain"
              />
              <img
                src="/images/unnamed%20(35).png"
                alt="Niños compartiendo sus ideas"
                className="h-[120px] w-[140px] object-contain"
              />
            </div>
            <div className="flex flex-col items-center gap-5 text-center">
              <a
                href="https://www.canva.com/design/DAG6d48tDLI/7KucXIpYk4kZ84FWNUcH-g/edit?utm_content=DAG6d48tDLI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                target="_blank"
                rel="noreferrer"
                className="font-[cursive] text-[23px] font-bold italic text-[#356c78] underline decoration-2 underline-offset-4"
              >
                Link del trabajo
              </a>
              <a
                href="https://www.canva.com/design/DAG6d48tDLI/7KucXIpYk4kZ84FWNUcH-g/edit?utm_content=DAG6d48tDLI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                target="_blank"
                rel="noreferrer"
                className="-mt-3 max-w-full break-all text-left text-[13px] leading-[1.2] text-[#275d6d] underline"
              >
                https://www.canva.com/design/DAG6d48tDLI/7KucXIpYk4kZ84FWNUcH-g/edit?utm_content=DAG6d48tDLI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
              </a>
              <a
                href="https://www.canva.com/design/DAG6d48tDLI/7KucXIpYk4kZ84FWNUcH-g/edit?utm_content=DAG6d48tDLI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir el trabajo de la semana 13 en Canva"
              >
                <img
                  src="/images/unnamed%20(39).png"
                  alt="Vista previa de la guía para el uso adecuado de la inteligencia artificial"
                  className="max-h-[190px] w-full object-contain"
                />
              </a>
            </div>
          </div>
        </section>
      )}

      {isUnidadDos && unidad && (
        <section className="min-h-[570px] bg-white px-5 py-7 md:px-8">
          <div className="mx-auto grid max-w-[770px] grid-cols-1 items-start gap-6 md:grid-cols-[375px_minmax(0,1fr)] md:gap-7">
            <img
              src="/images/unnamed%20(18).png"
              alt="Ilustración en blanco y negro de un perro leyendo"
              className="mx-auto h-[300px] w-full max-w-[260px] object-contain object-top sm:h-[400px] sm:max-w-[320px] md:h-[520px] md:max-w-[375px]"
            />

            <div className="font-serif leading-[1.45] text-[#565656]">
              <h2 className="portfolio-hero-title text-center text-[30px] text-[#123e50] underline decoration-2 underline-offset-2">
                REFLEXIÓN (EL ANTES)
              </h2>

              <h3 className="portfolio-hero-title mt-7 text-[14px] text-black">
                ¿Qué voy a aprender?
              </h3>
              <p className="mt-3">
                Voy a aprender a comprender mejor la competencia de lectura en el área de Comunicación, especialmente en la comprensión de textos escritos. Conoceré diferentes estrategias, técnicas y recursos que me ayudarán a enseñar a los niños a identificar información importante, interpretar mensajes, realizar predicciones y reflexionar sobre lo que leen.
              </p>
              <p className="mt-3">
                Además, aprenderé a reconocer la importancia de los saberes previos, la observación de imágenes, la formulación de preguntas y el propósito de la lectura para despertar el interés de los estudiantes. Todo ello me permitirá fortalecer mis conocimientos y prepararme para ser una docente capaz de fomentar el hábito lector y desarrollar en los niños el gusto por la lectura y la comprensión de diversos textos.
              </p>

              <h3 className="portfolio-hero-title mt-5 text-[14px] text-black">
                ¿Cómo lo voy a aprender?
              </h3>
              <p className="mt-3">
                Lo voy a aprender de manera activa, dinámica y reflexiva, participando en actividades de lectura, análisis de textos, elaboración de preguntas y aplicación de estrategias antes, durante y después de leer. También utilizaré materiales didácticos y recursos creativos que me permitan comprender cómo facilitar el aprendizaje de los niños.
              </p>
              <p className="mt-3">
                Este aprendizaje no solo consistirá en conocer nuevas estrategias, sino también en descubrir cómo aplicarlas en el aula para que los estudiantes comprendan lo que leen, construyan sus propias interpretaciones y expresen sus opiniones. Cada actividad será una oportunidad para aprender que enseñar a leer no significa solamente reconocer palabras, sino ayudar a los niños a descubrir, comprender y dar sentido a lo que leen.
              </p>
            </div>
          </div>
        </section>
      )}

      {isUnidadDos && unidad && (
        <section>
          <div className="flex h-[92px] items-center justify-center bg-[#52777c] px-4">
            <h2 className="font-[Impact,'Arial_Narrow',sans-serif] text-4xl font-bold text-white md:text-[38px]">
              SEMANA 5
            </h2>
          </div>

          <div className="min-h-[276px] bg-[#e1ecef] px-5 py-4 md:px-8">
            <div className="mx-auto grid max-w-[770px] grid-cols-1 items-start gap-6 md:grid-cols-[441px_120px_110px] md:justify-between md:gap-0">
              <img
                src="/images/unnamed%20(19).png"
                alt="Estudiantes reunidos para organizar una actividad de lectura"
                className="w-full object-contain"
              />

              <div className="mx-auto w-[120px] md:mt-1">
                <img
                  src="/images/unnamed%20(20).png"
                  alt="Estudiante con uniforme escolar"
                  className="w-full object-contain"
                />
              </div>

              <div className="mx-auto w-full max-w-[110px] text-center">
                <h3 className="portfolio-hero-title text-[20px] leading-none text-[#356c78] underline decoration-2 underline-offset-2">
                  Link del trabajo:
                </h3>
                <a
                  href="https://drive.google.com/drive/folders/18fXiWFtlLSCVsk6MqWysDm43d_JLzP9b?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block break-all text-left text-[11px] leading-tight text-[#0877bd] underline"
                >
                  https://drive.google.com/drive/folders/18fXiWFtlLSCVsk6MqWysDm43d_JLzP9b?usp=sharing
                </a>
                <a
                  href="https://drive.google.com/drive/folders/18fXiWFtlLSCVsk6MqWysDm43d_JLzP9b?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir el trabajo de la Semana 5 en Google Drive"
                  className="mt-2 block"
                >
                  <img
                    src="/images/unnamed%20(21).png"
                    alt="Vista previa de una tabla de desempeños y estrategias"
                    className="w-full object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {isUnidadDos && unidad && (
        <section>
          <div className="flex h-[92px] items-center justify-center bg-[#52777c] px-4">
            <h2 className="font-[Impact,'Arial_Narrow',sans-serif] text-4xl font-bold text-white md:text-[38px]">
              SEMANA 6
            </h2>
          </div>

          <div className="min-h-[276px] bg-[#e1ecef] px-5 py-4 md:px-8">
            <div className="mx-auto grid max-w-[770px] grid-cols-1 items-start gap-6 md:grid-cols-[120px_180px_441px] md:justify-between md:gap-3">
              <div className="mx-auto w-[120px] md:mt-1">
                <img
                  src="/images/unnamed%20(20).png"
                  alt="Estudiante con uniforme escolar"
                  className="w-full object-contain"
                />
              </div>

              <div className="w-full text-center">
                <h3 className="portfolio-hero-title text-[20px] leading-none text-[#356c78] underline decoration-2 underline-offset-2">
                  Link del trabajo:
                </h3>
                <a
                  href="https://drive.google.com/drive/folders/1M-KrSuXillfvzi46PcgFnNcqXDqAZ0XT?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block break-all text-left text-[11px] leading-tight text-[#0877bd] underline"
                >
                  https://drive.google.com/drive/folders/1M-KrSuXillfvzi46PcgFnNcqXDqAZ0XT?usp=sharing
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1M-KrSuXillfvzi46PcgFnNcqXDqAZ0XT?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir el trabajo de la Semana 6 en Google Drive"
                  className="mt-2 block"
                >
                  <img
                    src="/images/unnamed%20(23).png"
                    alt="Vista previa de una actividad en el aula"
                    className="w-full object-contain"
                  />
                </a>
              </div>

              <img
                src="/images/unnamed%20(22).png"
                alt="Estudiantes participando en una clase virtual"
                className="w-full object-contain"
              />
            </div>
          </div>
        </section>
      )}

      {isUnidadDos && unidad && (
        <section>
          <div className="flex h-[92px] items-center justify-center bg-[#52777c] px-4">
            <h2 className="font-[Impact,'Arial_Narrow',sans-serif] text-4xl font-bold text-white md:text-[38px]">
              SEMANA 7
            </h2>
          </div>

          <div className="min-h-[275px] bg-[#e1ecef] px-5 py-4 md:px-8">
            <div className="mx-auto grid max-w-[770px] grid-cols-1 items-start gap-6 md:grid-cols-[375px_110px_178px] md:justify-between md:gap-0">
              <img
                src="/images/unnamed%20(24).png"
                alt="Estudiantes conversando alrededor de una mesa"
                className="w-full object-contain"
              />

              <div className="mx-auto w-[110px] md:mt-1">
                <img
                  src="/images/unnamed%20(20).png"
                  alt="Estudiante con uniforme escolar"
                  className="w-full object-contain"
                />
              </div>

              <div className="mx-auto w-full max-w-[178px] text-center">
                <h3 className="portfolio-hero-title text-[20px] leading-none text-[#356c78] underline decoration-2 underline-offset-2">
                  Link del trabajo
                </h3>
                <a
                  href="https://drive.google.com/drive/folders/1xQn_VdJMiwr5IzTJ9wGMfftj6mF4CjRq?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block break-all text-left text-[11px] leading-tight text-[#0877bd] underline"
                >
                  https://drive.google.com/drive/folders/1xQn_VdJMiwr5IzTJ9wGMfftj6mF4CjRq?usp=sharing
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1xQn_VdJMiwr5IzTJ9wGMfftj6mF4CjRq?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir el trabajo de la Semana 7 en Google Drive"
                  className="mt-2 block"
                >
                  <img
                    src="/images/unnamed%20(25).png"
                    alt="Vista previa del video de la actividad en el aula"
                    className="w-full object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {isUnidadDos && unidad && (
        <section>
          <div className="flex h-[92px] items-center justify-center bg-[#52777c] px-4">
            <h2 className="font-[Impact,'Arial_Narrow',sans-serif] text-4xl font-bold text-white md:text-[38px]">
              SEMANA 8
            </h2>
          </div>

          <div className="min-h-[276px] bg-[#e1ecef] px-5 py-4 md:px-8">
            <div className="mx-auto grid max-w-[770px] grid-cols-1 items-start gap-6 md:grid-cols-[120px_180px_441px] md:justify-between md:gap-3">
              <div className="mx-auto w-[120px] md:mt-1">
                <img
                  src="/images/unnamed%20(20).png"
                  alt="Estudiante con uniforme escolar"
                  className="w-full object-contain"
                />
              </div>

              <div className="w-full text-center">
                <h3 className="portfolio-hero-title text-[20px] leading-none text-[#356c78] underline decoration-2 underline-offset-2">
                  Link del trabajo
                </h3>
                <a
                  href="https://drive.google.com/drive/folders/18MUmi3OGUSGJysuRjUmDk8wKxaDc9tsI?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block break-all text-left text-[11px] leading-tight text-[#0877bd] underline"
                >
                  https://drive.google.com/drive/folders/18MUmi3OGUSGJysuRjUmDk8wKxaDc9tsI?usp=sharing
                </a>
                <a
                  href="https://drive.google.com/drive/folders/18MUmi3OGUSGJysuRjUmDk8wKxaDc9tsI?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir el trabajo de la Semana 8 en Google Drive"
                  className="mt-2 block"
                >
                  <img
                    src="/images/unnamed%20(27).png"
                    alt="Vista previa del video sobre La hormiga y la cigarra"
                    className="w-full object-contain"
                  />
                </a>
              </div>

              <img
                src="/images/unnamed%20(26).png"
                alt="Docente contando un cuento a sus estudiantes"
                className="w-full object-contain"
              />
            </div>
          </div>
        </section>
      )}

      {isUnidadDos && unidad && (
        <section>
          <div className="flex h-[92px] items-center justify-center bg-[#52777c] px-4">
            <h2 className="font-[Impact,'Arial_Narrow',sans-serif] text-4xl font-bold text-white md:text-[38px]">
              SEMANA 9
            </h2>
          </div>

          <div className="min-h-[298px] bg-[#e1ecef] px-5 py-4 md:px-8">
            <div className="mx-auto grid max-w-[770px] grid-cols-1 items-start gap-6 md:grid-cols-[120px_180px_441px] md:justify-between md:gap-3">
              <div className="mx-auto w-[120px] md:mt-1">
                <img
                  src="/images/unnamed%20(20).png"
                  alt="Estudiante con uniforme escolar"
                  className="w-full object-contain"
                />
              </div>

              <div className="w-full text-center">
                <h3 className="portfolio-hero-title text-[20px] leading-none text-[#356c78] underline decoration-2 underline-offset-2">
                  Link del trabajo
                </h3>
                <a
                  href="https://drive.google.com/drive/folders/1uDaliBP9m2SlybN2jCjHALhyhtKws8Q?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block break-all text-left text-[11px] leading-tight text-[#0877bd] underline"
                >
                  https://drive.google.com/drive/folders/1uDaliBP9m2SlybN2jCjHALhyhtKws8Q?usp=sharing
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1uDaliBP9m2SlybN2jCjHALhyhtKws8Q?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir el trabajo de la Semana 9 en Google Drive"
                  className="mt-2 block"
                >
                  <img
                    src="/images/unnamed%20(29).png"
                    alt="Vista previa del video de la actividad en el aula"
                    className="w-full object-contain"
                  />
                </a>
              </div>

              <img
                src="/images/unnamed%20(28).png"
                alt="Estudiantes conversando y escribiendo durante una clase"
                className="w-full object-contain"
              />
            </div>
          </div>
        </section>
      )}

      {isUnidadDos && unidad && (
        <section className="min-h-[740px] bg-white px-5 py-3 md:px-8">
          <div className="mx-auto grid max-w-[770px] grid-cols-1 items-start gap-5 md:grid-cols-[300px_minmax(0,1fr)] md:gap-5">
            <img
              src="/images/unnamed%20(30).png"
              alt="Snoopy leyendo un libro sobre una pila de libros"
              className="mx-auto h-[460px] w-full max-w-[240px] object-contain object-top sm:h-[580px] sm:max-w-[270px] md:h-[730px] md:max-w-[300px]"
            />

            <div className="font-serif leading-[1.5] text-[#565656]">
              <h2 className="portfolio-hero-title text-center text-[28px] text-[#123e50] underline decoration-2 underline-offset-2">
                REFLEXIÓN (EL DESPUÉS)
              </h2>

              <h3 className="portfolio-hero-title mt-5 text-[14px] text-black">
                ¿Qué aprendí?
              </h3>
              <p className="mt-2">
                Durante esta unidad comprendí que la comprensión de textos escritos es fundamental en la formación de los estudiantes, porque les permite interpretar información, construir significados y desarrollar el pensamiento crítico. Aprendí sobre las competencias, capacidades y desempeños relacionados con la lectura de diversos tipos de textos escritos.
              </p>
              <p className="mt-2">
                También conocí diferentes estrategias de comprensión lectora que se pueden aplicar antes, durante y después de la lectura, como la formulación de predicciones, la identificación de ideas principales, la realización de preguntas y la reflexión sobre el contenido. Asimismo, comprendí que enseñar a leer no consiste únicamente en reconocer palabras, sino en ayudar a los niños a comprender, interpretar y dar sentido a lo que leen.
              </p>

              <h3 className="portfolio-hero-title mt-4 text-[14px] text-black">
                ¿Cómo aplicaré lo aprendido?
              </h3>
              <p className="mt-2">
                Llevaré estos aprendizajes a mi futura práctica docente mediante la planificación de sesiones dinámicas, creativas y significativas, donde los niños puedan acercarse a la lectura de manera participativa. Utilizaré cuentos, fábulas, imágenes, preguntas, organizadores gráficos y materiales didácticos para despertar su interés y facilitar la comprensión de diferentes textos.
              </p>
              <p className="mt-2">
                También aplicaré estrategias antes, durante y después de la lectura, teniendo en cuenta los saberes previos, los propósitos de lectura y las necesidades de cada estudiante. Comprendí que no se trata solamente de hacer que los niños lean, sino de enseñarles a comprender, reflexionar y expresar sus propias opiniones sobre lo que leen.
              </p>

              <h3 className="portfolio-hero-title mt-4 text-[14px] text-black">
                ¿Qué me falta por aprender?
              </h3>
              <p className="mt-2">
                Considero que todavía tengo mucho por descubrir y mejorar. Necesito seguir conociendo estrategias innovadoras y creativas que permitan fortalecer la comprensión lectora y despertar el interés de los niños por la lectura. También quiero aprender a trabajar con diferentes tipos de textos y adaptar las actividades a los distintos ritmos y necesidades de aprendizaje de cada estudiante.
              </p>
              <p className="mt-2">
                Además, debo continuar fortaleciendo mi capacidad para planificar y aplicar adecuadamente los procesos didácticos de la lectura, así como evaluar los avances de los niños. Entiendo que ser docente implica aprender constantemente, porque cada experiencia en el aula representa una oportunidad para mejorar mi enseñanza y contribuir a formar niños capaces de comprender, interpretar y disfrutar de la lectura.
              </p>
            </div>
          </div>
        </section>
      )}

      {isUnidadDos && unidad && (
        <section className="bg-[#e1ecef] px-5 py-6 md:px-8">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-7">
            <article>
              <img
                src="/images/unnamed%20(31).png"
                alt="Snoopy leyendo un libro"
                className="h-[250px] w-full object-cover sm:h-[320px] md:h-[380px]"
              />
              <h2 className="portfolio-hero-title mt-4 text-center text-[32px] text-[#356c78] underline decoration-2 underline-offset-2">
                CONCLUSIÓN
              </h2>
              <div className="mt-6 space-y-4 font-serif text-[15px] leading-[1.4] text-[#48545a]">
                <p>
                  Durante esta unidad, tuve la oportunidad de ampliar y fortalecer mis conocimientos sobre la comprensión de textos escritos y las diferentes estrategias que permiten desarrollar esta competencia en los estudiantes. Comprendí la importancia de las competencias, capacidades y desempeños del área de Comunicación, así como de los procesos didácticos que orientan el desarrollo de la lectura.
                </p>
                <p>
                  También aprendí que comprender un texto no consiste solamente en leer palabras o recordar información, sino en identificar ideas, interpretar mensajes, realizar inferencias y reflexionar sobre lo que se lee. Asimismo, reconocí la importancia de aplicar estrategias antes, durante y después de la lectura, utilizando cuentos, imágenes, preguntas y materiales didácticos que despierten el interés de los niños y favorezcan aprendizajes significativos.
                </p>
                <p>
                  Esta unidad me permitió valorar la lectura como una herramienta fundamental para el aprendizaje y el desarrollo del pensamiento crítico. Comprendí que, como futura docente, debo promover experiencias lectoras dinámicas, creativas y cercanas a la realidad de los estudiantes, ayudándolos a descubrir el gusto por leer y a construir sus propias interpretaciones. Todo lo aprendido representa un paso importante en mi formación profesional y me motiva a seguir preparándome para formar niños que no solo lean, sino que comprendan, reflexionen y disfruten de cada lectura.
                </p>
              </div>
            </article>

            <article>
              <img
                src="/images/unnamed%20(32).png"
                alt="Snoopy llevando libros en su mochila"
                className="h-[250px] w-full object-contain sm:h-[320px] md:h-[380px]"
              />
              <h2 className="portfolio-hero-title mt-4 text-center text-[32px] text-[#356c78] underline decoration-2 underline-offset-2">
                PROYECCIÓN
              </h2>
              <div className="mt-6 space-y-4 font-serif text-[15px] leading-[1.4] text-[#48545a]">
                <p>
                  Considero que gran parte de mis expectativas se cumplieron, ya que durante esta unidad pude conocer y comprender diferentes estrategias y recursos didácticos que permiten desarrollar la comprensión de textos escritos de una manera más dinámica y significativa. También fortalecí mis conocimientos sobre los procesos didácticos de la lectura y la elaboración de sesiones de aprendizaje, comprendiendo que cada actividad debe responder a las características, intereses y necesidades de los estudiantes.
                </p>
                <p>
                  Sin embargo, sé que mi aprendizaje aún continúa. Todavía tengo mucho por descubrir, practicar y mejorar, especialmente en la creación de estrategias innovadoras que despierten en los niños el interés por leer, les permitan comprender diferentes tipos de textos y desarrollen su capacidad para interpretar y reflexionar sobre lo que leen.
                </p>
                <p>
                  Por ello, me propongo seguir preparándome, investigar nuevas estrategias y aprender de cada experiencia. Quiero convertirme en una docente capaz de fomentar el hábito lector, crear espacios de lectura motivadores y acompañar a los niños para que descubran que leer no es solamente una actividad escolar, sino una oportunidad para aprender, imaginar y conocer el mundo.
                </p>
              </div>
            </article>
          </div>
        </section>
      )}

      {isUnidadUno && unidad && (
        <section
          className="relative min-h-[590px] overflow-hidden bg-cover bg-center px-5 py-8 md:min-h-[570px] md:px-8 md:py-7"
          style={{ backgroundImage: "url('/images/unnamed%20(1).jpg')" }}
        >
          <div className="relative z-10 mx-auto grid max-w-[960px] grid-cols-1 gap-5 md:grid-cols-[minmax(0,700px)_220px] md:gap-6">
            <div className="font-serif text-[13px] leading-[1.55] tracking-[0.04em] text-[#263039] md:pt-0">
              <h2 className="portfolio-hero-title text-center text-[32px] text-[#123e50] underline decoration-2 underline-offset-2 md:text-[34px]">
                REFLEXIÓN (EL ANTES)
              </h2>

              <h3 className="portfolio-hero-title mt-8 text-[17px] text-black">
                ¿Qué voy a aprender?
              </h3>
              <p className="mt-5">
                Voy a aprender a comprender mejor el enfoque del área de Comunicación, especialmente la expresión y comprensión de textos orales. Conoceré estrategias, técnicas y recursos que me ayudarán a enseñar a los niños a escuchar con atención, comprender lo que escuchan y expresar sus ideas con claridad y seguridad.
              </p>
              <p className="mt-5">
                Además, aprenderé a reconocer las diferentes necesidades y formas de participación de los estudiantes, comprendiendo que cada niño aprende y se comunica de manera diferente. Todo ello me permitirá fortalecer mis conocimientos y prepararme para ser una docente que escuche, oriente y genere espacios donde los estudiantes puedan expresarse libremente.
              </p>

              <h3 className="portfolio-hero-title mt-5 text-[17px] text-black">
                ¿Cómo lo voy a aprender?
              </h3>
              <p className="mt-5">
                Lo voy a aprender de manera activa, dinámica y reflexiva, participando en actividades prácticas, situaciones comunicativas, ejemplos y análisis de experiencias que pueden presentarse en el aula. También pondré en práctica diferentes estrategias para observar cómo funcionan y reflexionar sobre aquello que puedo mejorar.
              </p>
              <p className="mt-5">
                Este aprendizaje no solo consistirá en adquirir nuevos conocimientos, sino también en descubrir cómo puedo llevarlos a la práctica. Cada actividad será una oportunidad para aprender algo nuevo y comprender que enseñar Comunicación significa ayudar a los niños a encontrar su propia voz, expresar lo que piensan y sentirse seguros al comunicarse.
              </p>
            </div>

            <div className="relative mx-auto h-[420px] w-full max-w-[220px] md:mt-7 md:h-[530px]">
              <img
                src="/images/unnamed%20(4).png"
                alt="Estudiante con cuadernos"
                className="h-full w-full object-contain object-bottom"
              />
            </div>
          </div>
        </section>
      )}

      {isUnidadUno && unidad && (
        <section className="border-t border-slate-200 bg-white pt-2">
          <div className="mx-auto mb-2 h-px max-w-[924px] bg-slate-300" />
          <div className="flex h-[120px] items-center justify-center bg-[#52777c] px-4">
            <h2 className="font-[Impact,'Arial_Narrow',sans-serif] text-4xl font-bold text-white md:text-[38px]">
              SEMANA 1
            </h2>
          </div>

          <div className="min-h-[360px] bg-[#e1ecef] px-5 py-5 md:min-h-[400px] md:px-8">
            <div className="mx-auto grid max-w-[924px] grid-cols-1 items-start gap-7 md:grid-cols-[450px_1fr_207px] md:gap-5">
              <img
                src="/images/unnamed%20(6).png"
                alt="Estudiantes leyendo y escribiendo en el aula"
                className="w-full object-contain"
              />

              <div className="mx-auto w-[120px] md:mt-2">
                <img
                  src="/images/unnamed%20(5).png"
                  alt="Estudiante con un lápiz"
                  className="w-full object-contain"
                />
              </div>

              <div className="mx-auto w-full max-w-[207px] text-center">
                <h3 className="portfolio-hero-title text-[24px] text-[#356c78] underline decoration-2 underline-offset-2">
                  Link del trabajo
                </h3>
                <a
                  href="https://drive.google.com/drive/folders/11Yiot6ZX1jUSy6pzUAdywsNwOb1tC0O-"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block break-all text-left text-[13px] leading-tight text-[#0877bd] underline"
                >
                  https://drive.google.com/drive/folders/11Yiot6ZX1jUSy6pzUAdywsNwOb1tC0O-
                </a>
                <a
                  href="https://drive.google.com/drive/folders/11Yiot6ZX1jUSy6pzUAdywsNwOb1tC0O-"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir el trabajo de la Semana 1 en Google Drive"
                  className="mt-3 block"
                >
                  <img
                    src="/images/unnamed%20(7).png"
                    alt="Vista previa del cartel de alcances y secuencias"
                    className="w-full object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {isUnidadUno && unidad && (
        <section>
          <div className="flex h-[110px] items-center justify-center bg-[#52777c] px-4">
            <h2 className="font-[Impact,'Arial_Narrow',sans-serif] text-4xl font-bold text-white md:text-[38px]">
              SEMANA 2
            </h2>
          </div>

          <div className="min-h-[370px] bg-[#e1ecef] px-5 py-5 md:px-8">
            <div className="mx-auto grid max-w-[924px] grid-cols-1 items-start gap-7 md:grid-cols-[130px_213px_1fr] md:gap-7">
              <div className="mx-auto w-[120px] md:mt-2">
                <img
                  src="/images/unnamed%20(5).png"
                  alt="Estudiante con un lápiz"
                  className="w-full object-contain"
                />
              </div>

              <div className="w-full text-center">
                <h3 className="portfolio-hero-title text-[24px] text-[#356c78] underline decoration-2 underline-offset-2">
                  Link del trabajo
                </h3>
                <a
                  href="https://drive.google.com/drive/folders/1qfwU4Ak1uJ1yGFp2eZt-U-jiW2d4naUj"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block break-all text-left text-[13px] leading-tight text-[#0877bd] underline"
                >
                  https://drive.google.com/drive/folders/1qfwU4Ak1uJ1yGFp2eZt-U-jiW2d4naUj
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1qfwU4Ak1uJ1yGFp2eZt-U-jiW2d4naUj"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir el trabajo de la Semana 2 en Google Drive"
                  className="mt-3 block"
                >
                  <img
                    src="/images/unnamed%20(9).png"
                    alt="Vista previa del video de la exposición oral"
                    className="w-full object-contain"
                  />
                </a>
              </div>

              <img
                src="/images/unnamed%20(8).png"
                alt="Estudiantes preparando un proyecto de expresión oral"
                className="w-full object-contain"
              />
            </div>
          </div>
        </section>
      )}

      {isUnidadUno && unidad && (
        <section>
          <div className="flex h-[110px] items-center justify-center bg-[#52777c] px-4">
            <h2 className="font-[Impact,'Arial_Narrow',sans-serif] text-4xl font-bold text-white md:text-[38px]">
              SEMANA 3
            </h2>
          </div>

          <div className="min-h-[370px] bg-[#e1ecef] px-5 py-5 md:px-8">
            <div className="mx-auto grid max-w-[924px] grid-cols-1 items-start gap-7 md:grid-cols-[450px_1fr_207px] md:gap-5">
              <img
                src="/images/unnamed%20(10).png"
                alt="Estudiantes trabajando en equipo sobre estrategias de aprendizaje"
                className="w-full object-contain"
              />

              <div className="mx-auto w-[120px] md:mt-2">
                <img
                  src="/images/unnamed%20(5).png"
                  alt="Estudiante con un lápiz"
                  className="w-full object-contain"
                />
              </div>

              <div className="mx-auto w-full max-w-[207px] text-center">
                <h3 className="portfolio-hero-title text-[24px] text-[#356c78] underline decoration-2 underline-offset-2">
                  Link del trabajo:
                </h3>
                <a
                  href="https://drive.google.com/drive/folders/1xwuKTzo3qLp9SVKKXGj4dcQmVjL_ADjR"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block break-all text-left text-[13px] leading-tight text-[#0877bd] underline"
                >
                  https://drive.google.com/drive/folders/1xwuKTzo3qLp9SVKKXGj4dcQmVjL_ADjR
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1xwuKTzo3qLp9SVKKXGj4dcQmVjL_ADjR"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir el trabajo de la Semana 3 en Google Drive"
                  className="mt-3 block"
                >
                  <img
                    src="/images/unnamed%20(11).png"
                    alt="Vista previa de la ficha de análisis de relación entre desempeño y estrategias"
                    className="w-full object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {isUnidadUno && unidad && (
        <section>
          <div className="flex h-[140px] items-center justify-center bg-[#52777c] px-4">
            <h2 className="font-[Impact,'Arial_Narrow',sans-serif] text-4xl font-bold text-white md:text-[38px]">
              SEMANA 4
            </h2>
          </div>

          <div className="min-h-[312px] bg-[#e1ecef] px-5 py-5 md:px-8">
            <div className="mx-auto grid max-w-[924px] grid-cols-1 items-start gap-7 md:grid-cols-[450px_292px_120px] md:justify-between md:gap-0">
              <img
                src="/images/unnamed%20(12).png"
                alt="Maestra y estudiantes conversan y leen en el aula"
                className="w-full object-contain"
              />

              <div className="w-full text-center">
                <h3 className="portfolio-hero-title text-[24px] text-[#356c78] underline decoration-2 underline-offset-2">
                  Link del trabajo:
                </h3>
                <a
                  href="https://drive.google.com/drive/folders/16nCINAsJCo22pGObQmHla9RjjXdxZVW4"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block break-all text-left text-[13px] leading-tight text-[#0877bd] underline"
                >
                  https://drive.google.com/drive/folders/16nCINAsJCo22pGObQmHla9RjjXdxZVW4
                </a>
                <a
                  href="https://drive.google.com/drive/folders/16nCINAsJCo22pGObQmHla9RjjXdxZVW4"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir el trabajo de la Semana 4 en Google Drive"
                  className="mt-3 block"
                >
                  <img
                    src="/images/unnamed%20(13).png"
                    alt="Vista previa de la sesión Escuchamos, imaginamos y contamos un cuento"
                    className="h-[172px] w-full object-cover object-top"
                  />
                </a>
              </div>

              <div className="mx-auto w-[120px] md:mt-2">
                <img
                  src="/images/unnamed%20(5).png"
                  alt="Estudiante con un lápiz"
                  className="w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {isUnidadUno && unidad && (
        <section
          className="min-h-[570px] bg-cover bg-center px-5 py-7 md:px-8"
          style={{ backgroundImage: "url('/images/unnamed%20(2).jpg')" }}
        >
          <div className="mx-auto grid max-w-[900px] grid-cols-1 items-start gap-5 md:grid-cols-[190px_minmax(0,1fr)] md:gap-7">
            <div className="mx-auto w-[180px] md:mt-10">
              <img
                src="/images/unnamed%20(14).png"
                alt="Estudiante con mandil rosa"
                className="w-full object-contain"
              />
            </div>

            <div className="font-serif text-[12px] leading-[1.35] tracking-[0.025em] text-[#343038]">
              <h2 className="portfolio-hero-title text-center text-[30px] text-[#b85d00] underline decoration-2 underline-offset-2 md:text-[32px]">
                REFLEXIÓN (EL DESPUÉS)
              </h2>

              <h3 className="portfolio-hero-title mt-7 text-[15px] text-black">
                ¿Qué aprendí?
              </h3>
              <p className="mt-3">
                Durante esta unidad comprendí que el área de Comunicación cumple un papel fundamental en la formación de los estudiantes, porque les permite expresar lo que piensan, sienten y comprenden, además de relacionarse con los demás. Aprendí sobre las competencias, capacidades y desempeños vinculados con la comunicación oral y la lectura de diversos tipos de textos escritos.
              </p>
              <p className="mt-3">
                También conocí el modelo de comprensión oral de Cassany, los contenidos que intervienen en la habilidad de escuchar y diferentes estrategias que pueden ayudar a los niños a comprender y expresarse mejor. Asimismo, aprendí que una sesión de aprendizaje debe organizarse considerando los procesos didácticos, las necesidades de los estudiantes y un sustento teórico que dé sentido a cada actividad.
              </p>

              <h3 className="portfolio-hero-title mt-4 text-[15px] text-black">
                ¿Cómo aplicaré lo aprendido?
              </h3>
              <p className="mt-3">
                Llevaré estos aprendizajes a mi futura práctica docente mediante la elaboración de sesiones dinámicas, participativas y significativas, donde los niños tengan la oportunidad de hablar, escuchar, preguntar, dialogar y compartir sus ideas. Utilizaré juegos, preguntas, diálogos y situaciones comunicativas cercanas a su realidad para despertar su interés y favorecer su aprendizaje.
              </p>
              <p className="mt-3">
                También consideraré las competencias, capacidades y desempeños al momento de planificar, procurando que cada actividad tenga un propósito claro y responda a las características y necesidades de los estudiantes. Comprendí que no se trata solamente de realizar actividades divertidas, sino de saber por qué las utilizamos y qué aprendizaje queremos lograr con ellas.
              </p>

              <h3 className="portfolio-hero-title mt-4 text-[15px] text-black">
                ¿Qué me falta por aprender?
              </h3>
              <p className="mt-3">
                Considero que todavía tengo mucho por descubrir y mejorar. Necesito seguir conociendo estrategias innovadoras y creativas que permitan desarrollar la expresión y comprensión oral de una manera significativa. También quiero fortalecer mi capacidad para adaptar las actividades a los diferentes ritmos, estilos y necesidades de aprendizaje de cada niño.
              </p>
              <p className="mt-3">
                Además, debo continuar mejorando la planificación y aplicación de los procesos didácticos, aprendiendo de cada experiencia. Entiendo que ser docente es un proceso de aprendizaje constante: cada sesión, cada estudiante y cada dificultad pueden convertirse en una oportunidad para crecer y mejorar.
              </p>
            </div>
          </div>
        </section>
      )}

      {isUnidadUno && unidad && (
        <section>
          <div
            className="h-[42px] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/unnamed%20(2).jpg')" }}
          />
          <div className="min-h-[600px] bg-[#e1ecef] px-5 py-6 md:px-8">
            <div className="mx-auto grid max-w-[770px] grid-cols-1 gap-8 md:grid-cols-2 md:gap-5">
              <article>
                <h2 className="portfolio-hero-title text-center text-[30px] text-[#356c78] underline decoration-2 underline-offset-2">
                  CONCLUSIÓN
                </h2>
                <img
                  src="/images/unnamed%20(15).png"
                  alt="Docente acompañando a sus estudiantes"
                  className="mt-3 h-[260px] w-full object-cover"
                />
                <div className="mt-4 space-y-3 font-serif text-[11px] leading-[1.35] text-[#48545a]">
                  <p>
                    Durante esta I unidad, tuve la oportunidad de ampliar y fortalecer mis conocimientos sobre el área de Comunicación, especialmente en la expresión y comprensión de textos orales. Comprendí la importancia de las competencias, capacidades y desempeños, así como de los modelos de comprensión oral y las diferentes estrategias que podemos utilizar para favorecer la comunicación de los estudiantes.
                  </p>
                  <p>
                    También aprendí que una buena sesión de aprendizaje no consiste solamente en organizar actividades, sino en planificar experiencias que tengan un propósito y respondan a las necesidades e intereses de los niños. Por ello, comprendí la importancia de utilizar estrategias dinámicas, participativas y reflexivas, considerando los procesos didácticos para lograr aprendizajes significativos.
                  </p>
                  <p>
                    Esta unidad me permitió mirar la enseñanza de la Comunicación desde una perspectiva más cercana y reflexiva. Comprendí que enseñar a comunicarse también significa enseñar a escuchar, comprender, expresar ideas y valorar la voz de cada estudiante. Todo lo aprendido representa un paso más en mi formación como futura docente y me motiva a seguir aprendiendo, mejorando y buscando nuevas formas de acompañar a mis estudiantes en su aprendizaje.
                  </p>
                </div>
              </article>

              <article>
                <h2 className="portfolio-hero-title text-center text-[30px] text-[#356c78] underline decoration-2 underline-offset-2">
                  PROYECCIÓN
                </h2>
                <img
                  src="/images/unnamed%20(16).png"
                  alt="Docente frente a su clase"
                  className="mt-3 h-[260px] w-full object-cover"
                />
                <div className="mt-4 space-y-3 font-serif text-[11px] leading-[1.35] text-[#48545a]">
                  <p>
                    Considero que gran parte de mis expectativas se cumplieron, ya que durante esta unidad pude conocer y aplicar diferentes estrategias y recursos didácticos que permiten trabajar la expresión y comprensión oral de una manera más dinámica y significativa. También fortalecí mi capacidad para elaborar sesiones de aprendizaje y comprendí que cada actividad debe responder a las características, intereses y necesidades de los estudiantes.
                  </p>
                  <p>
                    Sin embargo, sé que mi aprendizaje aún continúa. Todavía tengo mucho por descubrir, practicar y mejorar, especialmente en la creación de estrategias innovadoras que hagan que los niños participen con entusiasmo, expresen sus ideas con confianza y disfruten aprendiendo.
                  </p>
                  <p>
                    Por ello, me propongo seguir preparándome, observar mi propia práctica y aprender de cada experiencia. Quiero convertirme en una docente capaz de crear espacios donde los niños se sientan escuchados, valorados y motivados a aprender.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      )}

      {isUnidadUno && unidad && (
        <footer className="flex min-h-[127px] items-center justify-center bg-[#52777c] px-5 py-7 text-center">
          <p className="portfolio-hero-title text-[34px] text-white md:text-[44px]">
            Exámen individual y fin de la UNIDAD I :)
          </p>
        </footer>
      )}

      {isUnidadDos && unidad && (
        <footer className="flex min-h-[127px] items-center justify-center bg-[#52777c] px-5 py-7 text-center">
          <p className="portfolio-hero-title text-[34px] text-white md:text-[44px]">
            Exámen individual y fin de la UNIDAD II :)
          </p>
        </footer>
      )}

      {isUnidadTres && unidad && (
        <footer className="flex min-h-[169px] items-center justify-center bg-[#52777c] px-5 py-7 text-center">
          <p className="portfolio-hero-title text-[34px] leading-tight text-white md:text-[44px]">
            ¡Fin de la UNIDAD III y el ciclo 2025-II!
            <br />
            :)
          </p>
        </footer>
      )}
    </main>
  );
}
