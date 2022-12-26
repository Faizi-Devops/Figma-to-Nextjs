import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react'
// own css files here

export default function App({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
  
  
  return( 
    <div>
      
      <Navbar />
    
  <Component {...pageProps} />
  <Footer />
  </div>
  )
  
  
}
