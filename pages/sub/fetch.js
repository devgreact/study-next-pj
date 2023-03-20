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