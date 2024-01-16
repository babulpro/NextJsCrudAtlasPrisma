'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/menu/navbar';
import Footer from '@/components/footer/footer';

const inter = Inter({ subsets: ['latin'] })


  

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#1D232A] min-h-svh'>
         
        <div className="px-5 bg-[#1D232A] h-svh">
          <NavBar/>
        {children}
        <Footer/>
         
        <ProgressBar
          height="4px"
          color="#fffd00"
          options={{ showSpinner: true}}
          shallowRouting
        />
        </div>
         

        </body>
    </html>
  )
}
