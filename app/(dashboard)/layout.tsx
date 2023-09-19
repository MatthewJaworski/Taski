import Sidebar from '@/components/Sidebar/Sidebar';
import '@/styles/globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} flex w-screen h-screen bg-background text-white`}
        >
          <aside>
            <Sidebar />
          </aside>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}