import type { Metadata } from 'next';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import '../../styles/global-reset.css';
import '../../styles/globals.css';

export const metadata: Metadata = {
  title: 'Kels Illustrates',
  description:
    'Kelsey Simon | Freelance illustrator, and junior story producer based in Lisbon.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-tertiary">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
