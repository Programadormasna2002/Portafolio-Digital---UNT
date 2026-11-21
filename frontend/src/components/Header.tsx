'use client';

import { useCallback, useEffect, useState } from 'react';

export default function Header({ lightAtTop = false }: { lightAtTop?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<Array<{ title: string; href: string; snippet: string }>>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const searchPortfolio = useCallback(async (queryValue: string) => {
    const query = queryValue.trim();
    if (!query) return;

    const normalize = (value: string) =>
      value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();
    const terms = normalize(query).split(/\s+/).filter(Boolean);
    const pages = [
      { title: 'Presentación', href: '/#presentacion' },
      { title: 'Índice', href: '/#indice' },
      { title: 'Introducción', href: '/#introduccion' },
      { title: 'Unidades', href: '/unidades' },
      { title: 'Unidad I', href: '/unidades/unidad-i' },
      { title: 'Unidad II', href: '/unidades/unidad-ii' },
      { title: 'Unidad III', href: '/unidades/unidad-iii' },
      { title: 'Conclusiones y reflexiones', href: '/conclusiones-y-reflexiones' },
    ];

    setSearching(true);
    setHasSearched(true);
    try {
      const results = await Promise.all(
        pages.map(async (page) => {
          try {
            const response = await fetch(page.href, { cache: 'no-store' });
            if (!response.ok) return null;
            const html = await response.text();
            const parsed = new DOMParser().parseFromString(html, 'text/html');
            parsed.querySelectorAll('header, nav, footer, script, style').forEach((element) => element.remove());
            const content = (parsed.querySelector('main')?.textContent ?? parsed.body.textContent ?? '').replace(/\s+/g, ' ').trim();
            const normalizedContent = normalize(content);
            if (!terms.every((term) => normalizedContent.includes(term))) return null;
            const matchAt = normalizedContent.indexOf(terms[0]);
            const start = Math.max(0, matchAt - 75);
            const end = Math.min(content.length, matchAt + 180);
            const snippet = `${start > 0 ? '…' : ''}${content.slice(start, end)}${end < content.length ? '…' : ''}`;
            return { ...page, snippet };
          } catch {
            return null;
          }
        }),
      );
      setSearchResults(results.filter((result): result is NonNullable<typeof result> => result !== null));
    } finally {
      setSearching(false);
    }
  }, []);

  useEffect(() => {
    if (!searchOpen) return;
    const query = searchQuery.trim();
    if (!query) {
      setHasSearched(false);
      setSearchResults([]);
      return;
    }
    const timer = window.setTimeout(() => {
      setHasSearched(true);
      void searchPortfolio(query);
    }, 350);
    return () => window.clearTimeout(timer);
  }, [searchOpen, searchQuery, searchPortfolio]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-14 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="relative mx-auto flex h-full max-w-[1400px] items-center justify-between px-4 md:px-7">
        <a
          href="/"
          className={`text-xl font-extrabold tracking-wide transition-colors ${
            isScrolled ? 'text-[#53A7B8]' : lightAtTop ? 'text-[#263238]' : 'text-white'
          }`}
        >
          PORTAFOLIO DIGITAL
        </a>

        <div
          className={`hidden items-center gap-5 text-sm font-semibold transition-colors lg:flex ${
            isScrolled ? 'text-slate-600' : lightAtTop ? 'text-slate-700' : 'text-white'
          }`}
        >
          <a href="/#inicio">PRESENTACIÓN</a>
          <span className={isScrolled ? 'text-slate-400' : 'text-white/60'}>
            ·
          </span>

          <div className="group relative flex h-14 items-center">
            <a
              href="/unidades"
              className="flex items-center gap-1"
              aria-haspopup="true"
            >
              UNIDADES
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </a>
            <div className="invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 translate-y-1 bg-white py-3 text-left text-slate-600 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {[
                ['UNIDAD I', 'unidad-i'],
                ['UNIDAD II', 'unidad-ii'],
                ['UNIDAD III', 'unidad-iii'],
              ].map(([label, slug]) => (
                <a
                  key={slug}
                  href={`/unidades/${slug}`}
                  className="block px-10 py-2 text-[15px] font-medium hover:bg-slate-50 hover:text-[#53A7B8]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <span className={isScrolled ? 'text-slate-400' : 'text-white/60'}>
            ·
          </span>

          <a href="/conclusiones-y-reflexiones" className="max-w-60 truncate">
            CONCLUSIONES Y REFLEXIONES
          </a>

          <button
            type="button"
            aria-label="Buscar en el portafolio"
            className="ml-2"
            onClick={() => {
              setSearchOpen(true);
              setHasSearched(false);
              setSearchResults([]);
            }}
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4 4" />
            </svg>
          </button>
        </div>

        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
          className={`flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
            isScrolled ? 'text-slate-700' : lightAtTop ? 'text-slate-700' : 'text-white'
          }`}
        >
          {mobileMenuOpen ? (
            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>

        {mobileMenuOpen && (
          <div className="absolute inset-x-0 top-14 z-50 max-h-[calc(100svh-56px)] overflow-y-auto bg-white px-5 py-4 text-[15px] font-semibold text-slate-700 shadow-lg lg:hidden">
            <a href="/#inicio" onClick={() => setMobileMenuOpen(false)} className="block py-3">PRESENTACIÓN</a>
            <a href="/unidades" onClick={() => setMobileMenuOpen(false)} className="block border-t border-slate-100 py-3">UNIDADES</a>
            <div className="grid grid-cols-3 gap-2 pb-3 pl-2 text-[13px] font-medium">
              {[
                ['UNIDAD I', 'unidad-i'],
                ['UNIDAD II', 'unidad-ii'],
                ['UNIDAD III', 'unidad-iii'],
              ].map(([label, slug]) => (
                <a key={slug} href={`/unidades/${slug}`} onClick={() => setMobileMenuOpen(false)} className="rounded-lg bg-[#e1ecef] px-2 py-3 text-center text-[#315d66]">
                  {label}
                </a>
              ))}
            </div>
            <a href="/conclusiones-y-reflexiones" onClick={() => setMobileMenuOpen(false)} className="block border-t border-slate-100 py-3">CONCLUSIONES Y REFLEXIONES</a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setSearchOpen(true);
                setHasSearched(false);
                setSearchResults([]);
              }}
              className="flex w-full items-center gap-3 border-t border-slate-100 py-3 text-left"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <circle cx="10.8" cy="10.8" r="7" />
                <path d="m16 16 4.5 4.5" />
              </svg>
              BUSCAR
            </button>
          </div>
        )}
      </nav>

      {searchOpen && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-x-0 top-0 h-[68px] bg-[#eeeeee] shadow-sm" />
          <button
            type="button"
            aria-label="Cerrar búsqueda"
            onClick={() => setSearchOpen(false)}
            className="absolute left-6 top-[25px] z-10 text-[#666] transition-colors hover:text-black"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
          </button>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              void searchPortfolio(searchQuery);
            }}
            className="absolute left-1/2 top-4 z-10 flex h-[46px] w-[min(650px,calc(100%-100px))] -translate-x-1/2 items-center bg-transparent px-0"
          >
            <button
              type="button"
              aria-label="Cerrar búsqueda"
              onClick={() => setSearchOpen(false)}
              className="hidden"
            >
              ←
            </button>
            <div className="flex h-[46px] w-full items-center gap-3 rounded-md bg-white px-4 shadow-sm">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" className="shrink-0 text-[#666]" aria-hidden="true">
                <circle cx="10.8" cy="10.8" r="7" />
                <path d="m16 16 4.5 4.5" />
              </svg>
              <input
                autoFocus
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Buscar en este sitio"
                className="w-full bg-transparent text-[16px] text-[#333] outline-none placeholder:text-[#777]"
              />
              {searchQuery && (
                <button
                  type="button"
                  aria-label="Borrar búsqueda"
                  onClick={() => setSearchQuery('')}
                  className="shrink-0 text-2xl leading-none text-[#666] hover:text-black"
                >
                  ×
                </button>
              )}
              <button type="submit" aria-label="Buscar" className="sr-only">
                {searching ? 'Buscando…' : 'Buscar'}
              </button>
            </div>
          </form>
          {hasSearched && (
            <div className="absolute left-1/2 top-[82px] z-10 w-[min(650px,calc(100%-40px))] -translate-x-1/2">
              <div className="border-b border-[#e1e1e1] bg-white px-5 py-4 text-[13px] text-[#666]">
                Resultados de este sitio
              </div>
              <div className="max-h-[65vh] overflow-y-auto bg-white px-5 py-5">
              {searchResults.length ? (
                <ul className="space-y-5">
                  {searchResults.map((result) => (
                    <li key={result.href}>
                      <a href={result.href} onClick={() => setSearchOpen(false)} className="font-semibold text-[#3549b5] hover:underline">
                        {result.title}
                      </a>
                      <p className="mt-1 text-[13px] leading-[1.4] text-[#333]">{result.snippet}</p>
                      <p className="mt-2 text-[12px] text-[#777]">Modificado por última vez el 21 nov 2026</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-[#555]">
                  {searching ? 'Buscando en el portafolio…' : 'No se encontraron coincidencias.'}
                </p>
              )}
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
