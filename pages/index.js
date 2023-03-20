import Head from 'next/head'
import Layout from '../components/Layout'
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>홍길동 포트폴리오</title>
        <meta name="description" content="홍길동 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>      
      <h1>Home</h1>
    </Layout>
  )
}
