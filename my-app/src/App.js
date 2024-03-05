import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import MyNavBar from "./NavBar/NavBar";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignUp/signIn";
import LogIn from "./pages/SignUp/logIn";
import Share3 from "./pages/Rooms/3-share";
import Share4 from "./pages/Rooms/4-share";
import Dining from "./pages/About/Dining";
import Yoga from "./pages/About/Yoga";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavBar></MyNavBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}>
            <Route path="about" element={<Outlet />}></Route>
            <Route path="dining" element={<Dining />}></Route>
            <Route path="yoga" element={<Yoga />}></Route>
          </Route>

          <Route path="/rooms" element={<Rooms />}>
            <Route path="rooms" element={<Outlet />}></Route>
            <Route path="3share" element={<Share3 />}></Route>
            <Route path="4share" element={<Share4 />}></Route>
          </Route>

          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>

          <Route path="/signup" element={<SignUp />}>
            <Route path="signup" element={<Outlet />}></Route>
            <Route path="login" element={<LogIn />}></Route>
            <Route path="signin" element={<SignIn />}></Route>
          </Route>

          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


{/* <Route path="/rooms/3share" element={<Share3 />}></Route>
          <Route path="/rooms/4share" element={<Share4 />}></Route> */}