import Head from "next/head"
import '../app/style.css'

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
