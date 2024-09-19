import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./Layout.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import {HomePage} from "./pages/index.js"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<HomePage/>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>
   
);
