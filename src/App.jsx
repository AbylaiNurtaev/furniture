import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import FullItem from "./pages/FullItem/FullItem";
import './App.sass'
import CatalogPage from "./pages/Catalog/CatalogPage";
import Fabrics from "./pages/Fabrics/Fabrics";
import CartPage from "./pages/CartPage/CartPage";

import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import Login from "./pages/Login/Login";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";
import Registration from "./pages/Registration/Registration";
import AdminPage from "./pages/AdminPage/AdminPage";
import FavouriteItems from "./pages/FavouriteItems/FavouriteItems";
import MyCabinet from "./pages/MyCabinet/MyCabinet";
import OptionItem from "./pages/OptionItem/OptionItem";
import Payment from "./pages/Payment/Payment";
import DeliveryPage from "./pages/DeliveryPage/DeliveryPage";
import AboutCompany from "./pages/AboutCompany/AboutCompany";
import Partnership from "./pages/Partnership/Partnership";
import Reviews from "./pages/Reviews/Reviews";

function App() {

  // const dispatch = useDispatch()
  // const isAuth = useSelector(selectIsAuth)

  // useEffect(() => {
  //   dispatch(fetchAuthMe())
  // }, [])


  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="/catalog" element={<CatalogPage/>}/>
            <Route path="/fabrics" element={<Fabrics/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/fullItem/:category/:id" element={<FullItem/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="/favouriteItems" element={<FavouriteItems/>}/>
            <Route path="/mycabinet/:id" element={<MyCabinet/>}/>
            <Route path="/optionitem/:category" element={<OptionItem/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/delivery" element={<DeliveryPage/>}/>
            <Route path="/aboutcompany" element={<AboutCompany/>}/>
            <Route path="/partnership" element={<Partnership/>}/>
            <Route path="/reviews" element={<Reviews/>}/>
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
