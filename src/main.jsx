import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Exchange, Footer, Navbar } from "./components";
import Orders from "./components/Orders";
import Rules from "./components/Rules";
import "./index.css";
import styles from "./style";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter} pt-8`}>
          <div className={`w-full fixed z-50 backdrop-blur`}>
            <Navbar />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/payment" element={<Exchange />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
