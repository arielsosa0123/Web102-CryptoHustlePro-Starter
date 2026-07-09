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
        
        Can you port forward http://localhost:5173 ?
        Uou mean reset? 
        Umm no there should be a port forward tab like "terminal" tab. Or maybe you can add my discord to stay connected
        
        and make this as a git repo
        so i can debug locally to see what's wrong

        yeah lets add each other on discord Username: arielsosa0123#0481
        username is incorrect?
        Sent
        {/*<Route index element={<App />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
