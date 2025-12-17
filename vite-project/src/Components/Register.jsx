export default function Register() {
  return (
    <section
      id="register"
      className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50 px-4 sm:px-6"
    >
      <div className="max-w-lg w-full mx-auto bg-white p-6 sm:p-10 rounded-3xl shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-indigo-700">
          Create Your Account
        </h2>

        <input
          placeholder="Full Name"
          className="w-full mb-4 p-4 border rounded-xl focus:ring-2 focus:ring-indigo-400"
        />
        <input
          placeholder="Email Address"
          className="w-full mb-4 p-4 border rounded-xl focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-4 border rounded-xl focus:ring-2 focus:ring-indigo-400"
        />
        <select className="w-full mb-6 p-4 border rounded-xl">
          <option>Select Course</option>
          <option>Full Stack</option>
          <option>AI</option>
          <option>Cyber Security</option>
        </select>

        <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:opacity-90">
          Register Now
        </button>

        <p className="text-sm text-center mt-4">
          Already registered?{" "}
          <a href="#login" className="text-indigo-600 font-medium">
            Login here
          </a>
        </p>
      </div>
    </section>
  );
}
