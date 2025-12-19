import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Courses from "./Components/Courses";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import CourseDetails from "./Components/CourseDetails"; // ✅ NEW

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Courses />
              <Register />
              <Login />
              <Contact />
            </>
          }
        />

        {/* COURSE DETAILS PAGE */}
        <Route path="/course/:id" element={<CourseDetails />} />

        {/* CART PAGE */}
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
