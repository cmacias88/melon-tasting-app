import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./components/Homepage";
import UserLogin from "./components/UserLogin";
import NavBar from "./components/NavBar";

function App() {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/login" element = {<UserLogin/>}>
                </Route>
                <Route path="/" element = {<Homepage/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;