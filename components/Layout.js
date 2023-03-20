import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
    <Header/>
        <h1>레이아웃</h1>
        <div>{children}</div>
    <Footer/>
    </>
  )
}

export default Layout