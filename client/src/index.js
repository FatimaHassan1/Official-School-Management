import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./singlepdf.css";
import "./requestForms/alluser.css";
import "./students/students.css";
import "./Stationary/stationary.css";
import "./purchase/purchase.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
