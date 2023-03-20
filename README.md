# API Route 실습
- 클라이언트 사이트 기술과 서버사이드 기술이 모두 갖추어짐.

```
npm run dev

http://a.com/api             /pages/api/index.js
클라이언트에서 필요로 한 정보를 서버측에서 전달이 가능함.

http://a.com/api/1       /pages/api/[id].js
http://a.com/api/2       /pages/api/[id].js

```
pages/api/hello.js
http://localhost:3000/api/hello

```js
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
```
pages/api/[id].js
http://localhost:3000/api/1
```js
export default function handler(req, res) {
  res.status(200).json({ id: req.query.id })
}
```