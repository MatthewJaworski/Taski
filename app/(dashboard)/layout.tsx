import Container from '@/components/Container/Container';
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
          className={`${inter.className} flex h-screen w-screen gap-2 bg-background text-white`}
        >
          <aside>
            <Sidebar />
          </aside>
          <main className="scrollbar flex h-screen w-screen flex-wrap overflow-auto">
            <Container className="my-4 flex ">{children}</Container>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
