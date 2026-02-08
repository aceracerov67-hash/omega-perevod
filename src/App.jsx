import React from 'react'
import Layout from "./Components/Layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import "./i18n";


const App = () => {
AOS.init({
  duration: 900,
  easing: "ease-out-cubic",
  once: true,
});
  return (
    <>
      <Layout />
    </>
  )
}

export default App