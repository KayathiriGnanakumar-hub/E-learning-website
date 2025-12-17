export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-indigo-600 px-4 sm:px-6"
    >
      <div className="max-w-lg w-full mx-auto bg-white p-6 sm:p-10 rounded-3xl shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-indigo-700">
          Get in Touch
        </h2>

        <input
          placeholder="Your Name"
          className="w-full mb-4 p-4 border rounded-xl"
        />
        <input
          placeholder="Your Email"
          className="w-full mb-4 p-4 border rounded-xl"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full mb-6 p-4 border rounded-xl"
        />

        <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:opacity-90">
          Send Message
        </button>
      </div>
    </section>
  );
}
