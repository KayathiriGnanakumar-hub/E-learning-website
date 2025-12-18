import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <section className="pt-28 pb-20 min-h-screen bg-gray-50 text-center">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">
        Your Cart
      </h1>

      <p className="text-gray-600 mb-6">
        Your cart is empty 🛒
      </p>

      <Link
        to="/"
        className="inline-block px-8 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
      >
        Browse Courses
      </Link>
    </section>
  );
}
