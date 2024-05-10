import { Link, Outlet } from "react-router-dom";

import React from 'react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Layout