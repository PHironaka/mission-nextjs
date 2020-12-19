import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'

export default function Home() {
  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push('/pokemon')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Explorer!
        </h1>
        <button onClick={handleClick}>
          Click me
        </button>
      </main>

    </div>
  )
}
