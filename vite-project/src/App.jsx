import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./Components/courses";
import Register from "./components/Register";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <Register />
      <Login />
      <Contact />
      <Footer />
    </>
  );
}
