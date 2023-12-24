import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contect from "./Pages/Contect";

import Hero from "./Pages/Hero";
import Project from "./Pages/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contect" element={<Contect />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
