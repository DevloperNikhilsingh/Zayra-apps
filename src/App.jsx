import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Shop from './Components/Shop'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App({ children }) {
  const [count, setCount] = useState(0)
useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animate only once
    });
  }, []);

  return <>{children}</>;
}

export default App
