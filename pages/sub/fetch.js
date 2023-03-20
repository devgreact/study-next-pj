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