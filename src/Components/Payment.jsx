import { useNavigate } from "react-router-dom";
import { getCartItems, clearCart } from "../utils/cartStorage";
import { auth, db } from "../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";

export default function Payment() {
  const navigate = useNavigate();
  const cartItems = getCartItems();
  const [loading, setLoading] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.price.replace("₹", "")),
    0
  );

  const payNow = async () => {
    const user = auth.currentUser;
    if (!user) {
      alert("Please login");
      navigate("/login");
      return;
    }

    setLoading(true);

    // 🔥 ENROLL AFTER PAYMENT
    for (const course of cartItems) {
      await setDoc(
        doc(db, "users", user.uid, "enrolledCourses", course.id),
        {
          ...course,
          progress: 0,
          enrolledAt: serverTimestamp(),
        }
      );
    }

    clearCart();
    setLoading(false);
    navigate("/payment-success");
  };

  return (
    <section className="pt-28 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h1 className="text-3xl font-bold mb-6 text-indigo-700">Payment</h1>

        {cartItems.map((c) => (
          <div key={c.id} className="flex justify-between border-b py-2">
            <span>{c.title}</span>
            <span>{c.price}</span>
          </div>
        ))}

        <div className="flex justify-between font-semibold mt-6">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        <button
          onClick={payNow}
          disabled={loading}
          className="mt-6 w-full py-3 bg-indigo-600 text-white rounded-lg"
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </section>
  );
}
