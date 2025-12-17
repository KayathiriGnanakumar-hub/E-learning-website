export default function Login() {
  return (
    <section id="login" className="py-20 bg-white px-4 sm:px-6">
      <div className="max-w-md w-full mx-auto bg-white p-6 sm:p-10 rounded-3xl shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-700 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-8 text-sm sm:text-base">
          Login to continue learning
        </p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <button className="w-full mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition">
          Login
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          New here?{" "}
          <a href="#register" className="text-indigo-600 font-medium">
            Create an account
          </a>
        </p>
      </div>
    </section>
  );
}
