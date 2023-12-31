import './App.css'
import Gallery from "./site/Gallery.tsx";
import WelcomePage from "./site/WelcomePage.tsx";
import {Navigate, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
        <Routes>
            <Route path={"/"} element={<WelcomePage/>}/>
            <Route path={"/characters"} element={<Gallery />}/>
            <Route path={"/*"} element={<Navigate to={"/"}/>}/>
        </Routes>
    </>
  )
}

export default App
