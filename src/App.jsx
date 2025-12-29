import React from 'react'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
import WhatIDo from './pages/WhatIDo'
import AboutUs from './pages/AboutUs'
import PageNotFoud from './pages/PageNotFoud'
import ScrolltoTop from './components/ScrolltoTop'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet /> 
      <Footer />
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
    <ScrolltoTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/ourwork' element={<OurWork />} />
          <Route path='/whatido' element={<WhatIDo />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Route>
        <Route path='*' element={<PageNotFoud />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App