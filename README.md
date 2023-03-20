# 환경변수(Envronment Variables)
- 클라이언트 사이트 기술과 서버사이드 기술이 모두 갖추어짐.

```
http://localhost:3000/api/hello
http://a.com/api/hello
```
https://nextjs.org/docs/basic-features/environment-variables

```
.env

NEXT_PUBLIC_API_URL=http://localhost:3000/
```

/pages/index.js

```js
export default function Home() {
  return (
    <div>
      <h1> 현재 페이지 : /pages/index.js</h1>
      <ul>
        <li>링크 (/sub) : <a href="/sub">/pages/sub/index.js</a></li>
        <li>링크 (/sub/about) : <a href="/sub/about">/pages/sub/about.js</a></li>
        <li>링크 (/sub/1) : <a href="/sub/1">/pages/sub/[id].js</a></li>
        <li>링크 (/sub/2) : <a href="/sub/2">/pages/sub/[id].js</a></li>
        <li>링크 (/sub/2) : <a href="/sub/fetch">/pages/sub/fetch.js</a></li>
      </ul>
    </div>
  )
}
```
/pages/sub/fetch.js
```js
import { useEffect } from "react"

const Fetch = () => {
    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL+'api/hello')
        .then(res => res.json())
        .then(result=> {
            console.log(result)
        })
    }, [])
    return (
      <>
          <h1>현재 페이지 : /pages/sub/fetch.js</h1>
          링크(/) : <a href="/">/pages/index.js</a>
      </>
    )
  }
  
  export default Fetch
  ```

  ```js
  import { useEffect, useState } from "react"

const Fetch = () => {
    const [user, setUser] = useState({name:null})
    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL+'api/hello')
        .then(res => res.json())
        .then(result=> {
            console.log(result)
            setUser(result);
        })
    }, [])
    return (
      <>
          <h1>현재 페이지 : /pages/sub/fetch.js</h1>
          <p>{user.name}</p>
          링크(/) : <a href="/">/pages/index.js</a>
      </>
    )
  }
  
  export default Fetch
  ```