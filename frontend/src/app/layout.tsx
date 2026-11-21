import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portafolio digital',
  description: 'Portafolio de evidencias de comprensión y producción de textos.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="es" className="h-full">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
