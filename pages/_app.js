import '@/styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import { FrProvider } from '@/context/context'

export default function App({ Component, pageProps }) {
  return( 
  <FrProvider>
    <Component {...pageProps} />
  </FrProvider>
  )
}
