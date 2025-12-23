import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { getCartCount } from "../utils/cartStorage";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);

  // 🔐 LISTEN TO AUTH STATE (BACKEND LOGIC)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // 🔓 LOGOUT (FIREBASE)
  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  // ⭐ SMART SCROLL HANDLER
  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => goToSection("home")}
        >
          <img src="/logo.png" alt="Learnix" className="h-8" />
          <span className="text-xl font-bold text-indigo-600">Learnix</span>
        </div>

        {/* MENU */}
        <div className="flex items-center gap-6 font-medium">
          <button onClick={() => goToSection("home")}>Home</button>
          <button onClick={() => goToSection("courses")}>Courses</button>
          <button onClick={() => goToSection("contact")}>Contact</button>

          {!user ? (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          ) : (
            <>
              <span className="text-sm text-gray-600">{user.email}</span>
              <button
                onClick={logout}
                className="text-red-600 text-sm"
              >
                Logout
              </button>
            </>
          )}

          <Link to="/cart" className="relative">
            <FiShoppingCart size={20} />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white
              text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {getCartCount()}
              </span>
            )}
          </Link>
        </div>

      </div>
    </nav>
  );
}
