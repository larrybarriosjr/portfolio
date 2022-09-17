import Header from "components/layout/Header"
import Nav from "components/layout/Nav"
import type { AppProps } from "next/app"
import Head from "next/head"
import "styles/globals.css"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="w-full min-h-screen lg:bg-seafoam-green">
      <div className="w-full max-w-5xl min-h-screen pt-px mx-auto bg-seafoam-green lg:px-2 lg:bg-snow-white">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
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
