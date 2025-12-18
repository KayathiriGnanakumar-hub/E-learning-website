import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Courses from "./Components/Courses";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";

function Home() {
  return (
    <>
      <Hero />
      <Courses />
      <Register />
      <Login />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
