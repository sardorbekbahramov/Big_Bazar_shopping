import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import { Outlet, RouterProvider, ScrollRestoration, createBrowserRouter } from 'react-router-dom'
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import { productsData } from "./api/Api";
import ProductDetail from "./components/ProductDetail";
import Login from "./pages/Login";

const Layout = ()=> {
  return(
    <>
      <Header/>
      <ScrollRestoration/> 
      <Outlet/>
      <Footer/>
    </>
  )
}

const makeRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: productsData
      },
      {
        path: '/product/:id',
        element: <ProductDetail/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      
    ]
  }
])

function App() {
  return (
    < >
      <RouterProvider router={makeRouter}/>
    </>
  );
}

export default App;
