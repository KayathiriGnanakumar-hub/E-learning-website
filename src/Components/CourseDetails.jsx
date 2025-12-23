import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { getCartItems, setCartItems } from "../utils/cartStorage";

export default function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      const ref = doc(db, "courses", id);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setCourse({ id: snap.id, ...snap.data() });
      }

      setLoading(false);
    };

    fetchCourse();
  }, [id]);

  const addToCart = () => {
    const cart = getCartItems();

    // avoid duplicates
    if (!cart.some(c => c.id === course.id)) {
      cart.push(course);
      setCartItems(cart);
    }

    navigate("/cart");
  };

  if (loading) {
    return (
      <div className="pt-28 text-center text-gray-600">
        Loading course details...
      </div>
    );
  }

  if (!course) {
    return (
      <div className="pt-28 text-center text-red-500">
        Course not found
      </div>
    );
  }

  return (
    <section className="pt-28 pb-20 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8">

        <img
          src={course.image}
          alt={course.title}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />

        <h1 className="text-3xl font-bold text-indigo-700 mb-2">
          {course.title}
        </h1>

        <p className="text-gray-600 mb-4">
          Duration: <strong>{course.duration}</strong>
        </p>

        <p className="text-xl font-semibold text-purple-700 mb-6">
          ₹{course.price}
        </p>

        <button
          onClick={addToCart}
          className="px-8 py-3 bg-indigo-600 text-white rounded-lg
          hover:bg-indigo-700 transition"
        >
          Add to Cart
        </button>

      </div>
    </section>
  );
}
