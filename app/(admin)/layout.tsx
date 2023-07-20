import '../../styles/globals.css';

export const metadata = {
  title: 'Kels Illustrates Studio',
  description: 'Kelsey Simon Studio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
