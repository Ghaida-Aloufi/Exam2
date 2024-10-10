import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import Book from './Pages/Book.jsx'
import Search from './Pages/Search.jsx'
import Details from './Pages/Details.jsx'
import Favorites from './Pages/Favorites.jsx'
import Status from './Pages/Status.jsx'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Home",
    element: <Home/>,
  },
  {
    path: "/Book",
    element: <Book/>,
  },
  {
    path: "/Search",
    element: <Search/>,
  },  
  {
    path: "/Details",
    element: <Details/>,
  },
  {
    path: "/Favorites",
    element: <Favorites/>,
  },
  {
    path: "/Status",
    element: <Status/>,
  },


]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
