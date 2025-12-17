import { useState } from "react";
import logo2 from "../assets/logo2.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full h-[96px] z-50">
      <div className="max-w-7xl mx-auto px-2 h-full flex items-center justify-between">

        {/* LOGO - LEFT CORNER */}
        <div className="flex items-center h-full">
          <div className="h-[64px] w-[64px] overflow-hidden rounded-xl hover:scale-105 transition">
            <img
              src={logo2}
              alt="Learnix Logo"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex space-x-6 font-medium text-black">
          <a href="#home" className="hover:text-indigo-600">Home</a>
          <a href="#courses" className="hover:text-indigo-600">Courses</a>
          <a href="#register" className="hover:text-indigo-600">Register</a>
          <a href="#login" className="hover:text-indigo-600">Login</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl text-indigo-600"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 py-4 space-y-3 font-medium bg-white shadow">
          <a href="#home" className="block hover:text-indigo-600">Home</a>
          <a href="#courses" className="block hover:text-indigo-600">Courses</a>
          <a href="#register" className="block hover:text-indigo-600">Register</a>
          <a href="#login" className="block hover:text-indigo-600">Login</a>
          <a href="#contact" className="block hover:text-indigo-600">Contact</a>
        </div>
      )}
    </nav>
  );
}
