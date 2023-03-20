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
