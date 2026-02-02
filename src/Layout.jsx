import React from 'react'
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function Layout() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout
