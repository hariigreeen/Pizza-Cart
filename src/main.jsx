import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './components/Home.jsx';
import Pizzas from './features/piazzas/Pizzas.jsx';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import Disserts from './features/disserts/Disserts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/pizzas",
        element: <Pizzas></Pizzas>
      },
      {
        path: "/desserts",
        element: <Disserts></Disserts>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
