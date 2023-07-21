import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store/store';
// import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './page/Home';
import List from './page/List';
import { Provider } from 'react-redux';
import React from 'react';
import Layout from './component/Layout';
import Details from './page/Details';
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { apiSlice } from './slice/peopleSlice';


export const routeConfig = [
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      }, {
        element: <Layout />,
        children: [
          {
            path: "/star-war",
            element: <List />,
            index: true,
          },
          {
            path: "/star-war/details/:type/:id",
            element: <Details />
          },
        ],
      }
    ],
  },

]

const router = createBrowserRouter(routeConfig, {
  future: {
    v7_normalizeFormMethod: true,
  }
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
