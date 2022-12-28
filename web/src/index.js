import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './assets/css/bootstrap/bootstrap.min.css'
import './assets/css/styles.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DefinedRoutes from './utils/DefinedRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(Object.keys(DefinedRoutes).map(key => DefinedRoutes[key]))

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
