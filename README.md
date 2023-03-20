# 포트폴리오 만들기 1
pages/index.js
```js
import Head from 'next/head'
export default function Home() {
  return (
    <div>
      <Head>
        <title>홍길동 포트폴리오</title>
        <meta name="description" content="홍길동 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>      
      <h1>홍길동 포트폴리오 입니다.</h1>
    </div>
  )
}

```
pages/404.js
```js
import React from 'react'

const PageNotFound = () => {
  return (
    <>페이지를 찾을 수 없습니다.</>
  )
}

export default PageNotFound
```

pages/about/index.js
```js
import React from 'react'

const index = () => {
  return (
    <div>
        <h1>자기소개</h1>
    </div>
  )
}

export default index
```

pages/portfolio/index.js
```js
import React from 'react'

const Portfolio = () => {
  return (
    <div>
        <h1>포트폴리오</h1>
    </div>
  )
}

export default Portfolio
```
/components/Layout.js
```js
import React from 'react'

const Layout = ({children}) => {
  return (
    <>
        <h1>레이아웃</h1>
        <div>{children}</div>
    </>
  )
}

export default Layout
```
/pages/index.js
```js
import Head from 'next/head'
import Layout from '../components/layout'
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
```
/components/Header.js
```js
import React from 'react'

const Header = () => {
  return (
    <div>Header</div>
  )
}

export default Header
```
/components/Footer.js
```js
import React from 'react'

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default Footer
```
/components/Layout.js
```js
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
    <Header/>
        <h1>레이아웃</h1>
        <div>{children}</div>
    <Footer/>
    </>
  )
}

export default Layout
```

/pages/about/index.js
```js
import React from 'react'
import Layout from '../../components/Layout'

const index = () => {
  return (
    <Layout>
        <h1>자기소개</h1>
    </Layout>
  )
}

export default index
```
/pages/portfolio/index.js
```js
import React from 'react'
import Layout from '../../components/Layout'

const Portfolio = () => {
  return (
    <Layout>
        <h1>포트폴리오</h1>
    </Layout>
  )
}

export default Portfolio
```