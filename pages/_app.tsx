import Header from "components/Header"
import type { AppProps } from "next/app"
import "styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-screen min-h-screen pt-px bg-seafoam-green">
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
