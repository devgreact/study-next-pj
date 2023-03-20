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