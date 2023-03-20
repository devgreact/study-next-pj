# 포트폴리오 만들기 2
https://tailwindcss.com/docs/installation
```
npm install -D tailwindcss
```
tailwind.config.js 생성
```
npx tailwindcss init
```
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 다크모드
  theme: {
    extend: {},
  },  
  plugins: [],
}
```

구글 검색 ` tailwind css nextjs `
https://tailwindcss.com/docs/guides/nextjs

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
  darkMode: 'class',
  theme: {
    extend: {},
  },  
  plugins: [],
}
```


```
npm install -D autoprefixer
```

/styles/globals.css

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

/postcss.config.js 생성 및 작성
```js
module.exports = {
    plugins: {
        tailwindcss: {config: './tailwind.config.js'},
        autoprefixer: {},
    },
}
```

tailwind 적용 확인

/pages/index.js
```js
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
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </Layout>
  )
}
```
