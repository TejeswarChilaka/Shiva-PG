import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import Dining from "./pages/Dining";
import Gym from "./pages/Gym";
import Maintenance from "./pages/Maintenance";
import NavBar from "./NavBar";
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/rooms" element={<Rooms />}></Route>
          <Route path="/dining" element={<Dining />}></Route>
          <Route path="/gym" element={<Gym />}></Route>
          <Route path="/maintenance" element={<Maintenance />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
