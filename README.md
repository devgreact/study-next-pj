# 기본사용법
## 작업의 시작은 index.js 로 부터 출발

```js
// index.js
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      Hello Next.js
    </div>
  )
}
```
```css
/* global.css 내용전체 삭제 */
```
```css
/* home.module.css 내용 전체 삭제 */
```
## 배포하기
```
npm run build
```
: .next 폴더가 생성이 됨.

## 실제 웹서비스로 진입시
```
npm run start
```
: 실 서버가 실행됨.