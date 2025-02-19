import { Inter } from 'next/font/google'
import Footer from './Footer'
import Navbar from './Navbar'
const inter = Inter({ subsets: ['latin'] })
export default function Layout({ children }) {  
  
  return (
    <>
       <Navbar  ce_name={"en-in"}/>
       <main className={''}>{children}</main>
       <Footer />
   </>
  )
}
