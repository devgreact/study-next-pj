# Route 실습
- 작업의 시작은 index.js 로 부터 출발

```
npm run dev

http://a.com/                /pages/index.js
http://a.com/sub/            /pages/sub/index.js
http://a.com/sub/about       /pages/sub/about.js

// 동적 주소
http://a.com/sub/1           /pages/sub/[id].js
http://a.com/sub/2           /pages/sub/[id].js

```
http://a.com/ 
```js
//  /pages/index.js
export default function Home() {
  return (
    <div>
      <h1> 현재 페이지 : /pages/index.js</h1>
      <ul>
        <li>링크 (/sub) : <a href="/sub">/pages/sub/index.js</a></li>
      </ul>
    </div>
  )
}

```
http://a.com/sub/ 
```js
//  /pages/sub/index.js
import React from 'react'

const SubIndex = () => {
  return (
    <>
        <h1>현재 페이지 : /pages/sub/index.js</h1>
        링크(/) : <a href="/">/pages/index.js</a>
    </>
  )
}

export default SubIndex
```
http://a.com/sub/about
```js
//  /pages/index.js
export default function Home() {
  return (
    <div>
      <h1> 현재 페이지 : /pages/index.js</h1>
      <ul>
        <li>링크 (/sub) : <a href="/sub">/pages/sub/index.js</a></li>
        <li>링크 (/sub/about) : <a href="/sub/about">/pages/sub/about.js</a></li>
      </ul>
    </div>
  )
}

```

```js
//  /pages/sub/about.js
const About = () => {
  return (
    <>
        <h1>현재 페이지 : /pages/sub/about.js</h1>
        링크(/) : <a href="/">/pages/index.js</a>
    </>
  )
}

export default About
```
http://a.com/sub/1 
http://a.com/sub/2
```js
//  /pages/index.js
export default function Home() {
  return (
    <div>
      <h1> 현재 페이지 : /pages/index.js</h1>
      <ul>
        <li>링크 (/sub) : <a href="/sub">/pages/sub/index.js</a></li>
        <li>링크 (/sub/about) : <a href="/sub/about">/pages/sub/about.js</a></li>
        <li>링크 (/sub/1) : <a href="/sub/1">/pages/sub/[id].js</a></li>
        <li>링크 (/sub/2) : <a href="/sub/2">/pages/sub/[id].js</a></li>
      </ul>
    </div>
  )
}
```
```js
//  /pages/sub/[id].js
import { useRouter } from "next/router"

const About = () => {
  const router = useRouter();
  const id = Number(router.query.id);

  return (
    <>
        <h1>현재 페이지 : /pages/sub/[id].js</h1>
        <p>Parameter id : {id} </p>
        링크(/) : <a href="/">/pages/index.js</a>
    </>
  )
}

export default About
```