import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import BoredingPass from "./Components/BoredingPass";
import LandingPage from "./Components/LandingPage";
import SignIn from "./Components/SignIn";

function App() {
  return (
    <>
      <BoredingPass />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/BBL" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
