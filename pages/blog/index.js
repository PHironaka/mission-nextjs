import Head from 'next/head'
import Link from 'next/link'

export default function BlogIndex() {
  return (
    <div >
      <Head>
        <title>BLOG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1>
          Welcome Blog Reader!
        </h1>
        <Link href="/">
            <a>Go Bakc Home</a>
        </Link>
      </main>

    </div>
  )
}
