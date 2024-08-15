import Header from '@/components/navbar/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'XiaoxiliWorld',
  description: 'A World of Xiaoxilima',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <div className='mt-32'>
          {children}
        </div>
        
        <Footer/>
        </body>
    </html>
  )
}
