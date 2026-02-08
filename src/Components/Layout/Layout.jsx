import React from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
     <>
    <div>
      <Header />
      <Hero />
      <main>
        <Outlet />
      </main>
       <Footer />
    </div>
  </>
  )
}

export default Layout