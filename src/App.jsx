import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Header from "./routes/Header";
import Test from "./routes/Test";
import CoinInfo from "./Components/CoinInfo";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}> {/* Header */}

          <Route index element={<CoinInfo image={"https://www.baidu.com/favicon.ico"} />} />
        </Route>
        {/*<Route index element={<App />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
