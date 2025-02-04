import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './utils/store'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/Error";
import Root from "./pages/Root";
import Login from "./pages/Login";
import Profil from "./pages/Profil";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/profile",
        element: <Profil />,
        errorElement: <ErrorPage />
      }
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);