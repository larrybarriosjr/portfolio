import Header from "components/layout/Header"
import Nav from "components/layout/Nav"
import type { AppProps } from "next/app"
import "styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full min-h-screen pt-px bg-seafoam-green">
      <Header />
      <main className="pb-14">
        <Component {...pageProps} />
      </main>
      <Nav />
    </div>
  )
}
export default MyApp
