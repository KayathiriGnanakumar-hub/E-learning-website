import { getCartItems, setCartItems } from "../utils/cartStorage";

export default function Cart() {
  const cartItems = getCartItems();

  const removeItem = (index) => {
    const updated = cartItems.filter((_, i) => i !== index);
    setCartItems(updated);
    window.location.reload();
  };

  return (
    <section className="pt-28 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-3xl font-extrabold text-center text-purple-700 mb-8">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-10 text-center">
            <p className="text-lg font-semibold mb-2">
              Your cart is empty 🛒
            </p>
            <p className="text-gray-600">
              Add courses to view them here.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow divide-y">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 py-4 px-5
                hover:bg-gray-50 transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-14 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <h4 className="font-semibold text-slate-800">
                    {item.title}
                  </h4>
                  <p className="text-purple-600 font-medium">
                    {item.price}
                  </p>
                </div>

                <button
                  onClick={() => removeItem(index)}
                  className="text-red-500 font-medium hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
