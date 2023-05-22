import { Roboto } from 'next/font/google';
import { Providers } from './providers';
import Fonts from '@/utils/fonts';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Teen Bible | Re9 Teen',
  description: 'Site para acompanhar seu plano de leitura',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={roboto.className} lang="en">
      <body>
        <Providers>
          <Fonts />
          {children}
        </Providers>
      </body>
    </html>
  )
}
