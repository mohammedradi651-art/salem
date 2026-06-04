
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'سالم العوبثاني - المنصة الرقمية',
  description: 'صانع محتوى رقمي ومنشئ محتوى ريلز يمني يقدم محتوى إبداعي وهادف.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800&family=Tajawal:wght@300;400;500;700;800&family=Inter:wght@400;700&family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-[#06080B] text-white">
        {children}
      </body>
    </html>
  );
}
