import Login from "./Login";
import "./App.css";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NoteState } from "./Login";
import Home from "./components/Home";
import React from "react";

function App() {
  return (
    <div>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <div></div>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;
