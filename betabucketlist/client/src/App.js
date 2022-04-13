import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import SignIn from "./Components/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route path="/BBL" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
