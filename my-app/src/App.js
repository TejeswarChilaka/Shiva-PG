import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import MyNavBar from "./NavBar/NavBar";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/SignUp/logIn";
import SignIn from "./pages/SignUp/signIn";
import Share3 from "./pages/Rooms/3-share";
import Share4 from "./pages/Rooms/4-share";
import Dining from "./pages/About/Dining";
import Yoga from "./pages/About/Yoga";
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavBar></MyNavBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/about/dining" element={<Dining />}></Route>
          <Route path="/about/yoga" element={<Yoga />}></Route>
          <Route path="/rooms" element={<Rooms />}></Route>
          <Route path="/rooms/3share" element={<Share3 />}></Route>
          <Route path="/rooms/4share" element={<Share4 />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signup/login" element={<LogIn />}></Route>
          <Route path="/signup/signin" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
