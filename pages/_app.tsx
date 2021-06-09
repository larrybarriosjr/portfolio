import Header from "components/layout/Header"
import Nav from "components/layout/Nav"
import type { AppProps } from "next/app"
import "styles/globals.css"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="w-full min-h-screen bg-steel-grey">
      <div className="w-full max-w-5xl min-h-screen pt-px mx-auto lg:px-2 bg-seafoam-green">
        <Header />
        <main className="pb-14 lg:pb-px">
          <Component {...pageProps} />
        </main>
        <Nav className="lg:hidden" />
      </div>
    </div>
  )
}
export default MyApp
