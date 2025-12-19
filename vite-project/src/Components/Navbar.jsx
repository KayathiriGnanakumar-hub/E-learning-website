import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { getCartCount } from "../utils/cartStorage";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* FONT STYLE + COLOR FOR NAV ITEMS */
  const navItemClass =
    "relative cursor-pointer text-[17px] font-semibold tracking-wide " +
    "text-slate-700 transition-all duration-300 ease-in-out " +
    "hover:text-indigo-700";

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* LOGO — NOT TOUCHED */}
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-11 h-11 text-indigo-600"
          >
            <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2z" />
            <path d="M11 12.98L3 9v6l8 4 8-4V9l-8 3.98z" />
          </svg>
          <h1 className="text-3xl font-bold text-indigo-600">
            Learnix
          </h1>
        </div>

        {/* NAV OPTIONS */}
        <div className="space-x-8 hidden md:flex items-center">

          {/* HOME */}
          <span
            className={`${navItemClass} text-indigo-700`}
            onClick={() => goToSection("home")}
          >
            Home
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-indigo-600"></span>
          </span>

          {/* COURSES */}
          <span
            className={navItemClass}
            onClick={() => goToSection("courses")}
          >
            Courses
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-600
            transition-all duration-300 hover:w-full"></span>
          </span>

          {/* REGISTER */}
          <span
            className={navItemClass}
            onClick={() => goToSection("register")}
          >
            Register
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600
            transition-all duration-300 hover:w-full"></span>
          </span>

          {/* LOGIN */}
          <span
            className={navItemClass}
            onClick={() => goToSection("login")}
          >
            Login
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-600
            transition-all duration-300 hover:w-full"></span>
          </span>

          {/* CONTACT */}
          <span
            className={navItemClass}
            onClick={() => goToSection("contact")}
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600
            transition-all duration-300 hover:w-full"></span>
          </span>

          {/* CART */}
          <Link
            to="/cart"
            className="relative flex items-center justify-center
            text-indigo-700 hover:text-purple-700
            transition-transform duration-300 hover:scale-110"
          >
            <FiShoppingCart className="text-[22px]" />
            {getCartCount() > 0 && (
              <span
                className="absolute -top-2 -right-2 bg-red-500 text-white
                text-xs w-5 h-5 flex items-center justify-center rounded-full"
              >
                {getCartCount()}
              </span>
            )}
          </Link>

        </div>
      </div>
    </nav>
  );
}
