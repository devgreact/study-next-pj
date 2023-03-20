# Next.js
- https://blog.logrocket.com/create-react-app-vs-next-js-performance-differences/
## 이해
- SSR 을 쉽게 구현할 수 있게 도와 주는 간단한 프레임 웍
- CSR 은 검색 크롤링이 되지 않는다. 이를 보완하는 방안.
- 클라이언트 대신 서버에서 페이지를 준비하는 원리.
## 설치
```js
npx create-next-app@12 ./

npm run dev (개발 환경 실행)
npm run build (배포 파일 생성)
npm run start (서비스 시작)

```

## 파일 구조
- pages : 페이지들을 생성
- index.js :  처음 / 페이지로 제공
- _app.tsx 
 : 공통되는 레이아웃을 작성
 : 모든 페이지에 공통으로 들어가는 걸 넣어주려면 여기에 넣어주면 됨.
 : url 을 통해 특정 페이지에 진입하기 전 통과하는 인터셉터 페이지
 : 만약, about 라는 페이지를 만들려면 반드시 pages 폴더 안에 about.js 를 생성해 주면 됨.
 - public
 : 이미지 같은 정적(static) 에셋들을 보관함.

- styles
: 말 그대로 스타일링을 처리해 주는 폴더
- 모듈(module) css 는 컴포넌트 종속적으로 스타일링하기 위한 것이며, 확장자 앞에 module 를 붙여줘야 한다.
- next.config.js
: Next.js 는 웹팩을 기본 번들러로 사용함.
: 그래서 웹팩에 관한 설정들을 할 수 있다.

## Pre-rendering
- Next.js 는 모든 페이지를 pre-render 한다.
: 모든 페이지를 위한 HTML 을 client 사이드에서 자바스크립트로 처리하기 전, "사전에" 생성함. 이렇기 하기 때문에 SEO 검색엔진최적화가 좋아짐.

- Pre Render 테스트
: 자바스크립트 Disable
 -- http://developer.chrome.com/docs/devtools/javascript/disable/
 -- https://create-react-app.examples.vercel.com/
 -- https://next-learn-starter.vercel.app/
