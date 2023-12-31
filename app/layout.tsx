import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/app/component/Header'
import { Providers } from './redux/provider';
import { Footer } from './component/Footer';
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en" >
      <body  >
        <Providers>
          <main >

        <Header/>
        {children}
        <Footer/>
          </main>
        </Providers>
        </body>
    </html>
  )
}
