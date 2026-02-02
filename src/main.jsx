import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import Shop from './Components/Shop.jsx'
import ProductDetail from './Components/ProductDetail.jsx'
import Blog from './Components/Blog.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Cart from './Components/Cart.jsx'
import { CartProvider } from './context/CartContext.jsx'
import Checkout from './Components/Checkout.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "shop",
//         element: <Shop />,
//       },
//       {
//         path: "cart",
//         element: <Cart />
//       },
//       {
//         path: "checkout",
//         element: <Checkout />
//       },
//       {
//         path: "product/:id",
//         element: <ProductDetail />,
//       },
//       {
//         path: "blog",
//         element: <Blog />
//       },
//       {
//        path: "about",
//        element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
   path: "/register",
   element: <Register />
  },
  {
    //Protection Start
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "shop",
            element: <Shop />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "checkout",
            element: <Checkout />,
          },
          {
            path: "product/:id",
            element: <ProductDetail />,
          },
          {
            path: "blog",
            element: <Blog />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "contact",
            element: <Contact />
          },
          
        ]
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router}></RouterProvider>
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
)
