import { useParams } from "react-router-dom";
import courseData from "../data/courseData";
import { getCartItems, setCartItems } from "../utils/cartStorage";

export default function CourseDetails() {
  const { id } = useParams();
  const course = courseData.find((c) => c.id === id);

  if (!course) return <p>Course not found</p>;

  const addToCart = () => {
    const cart = getCartItems();
    setCartItems([...cart, course]);
    alert("Course added to cart");
  };

  return (
    <section className="pt-28 pb-20 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">

        {/* COURSE IMAGE */}
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />

        {/* TITLE */}
        <h1 className="text-3xl font-extrabold text-slate-800 mb-3">
          {course.title}
        </h1>

        {/* RATING & DURATION */}
        <p className="text-sm text-gray-600 mb-6">
          ⭐ <span className="font-bold text-indigo-700">{course.rating}</span>
          <span className="mx-2">|</span>
          <span className="font-medium">{course.duration}</span>
        </p>

        {/* INFO CARDS */}
        <div className="grid grid-cols-2 gap-4 text-sm mb-8">
          <div className="bg-indigo-50 p-4 rounded-lg">
            <strong className="text-indigo-700">Start Date</strong><br />
            <span className="text-slate-700">{course.startDate}</span>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <strong className="text-purple-700">Seats Available</strong><br />
            <span className="text-slate-700">{course.seats}</span>
          </div>
        </div>

        {/* HIGHLIGHTS */}
        <h3 className="font-bold text-lg text-indigo-700 mb-3">
          Course Highlights
        </h3>

        <ul className="list-disc list-inside mb-6 text-sm
        text-slate-700 leading-relaxed space-y-1">
          {course.highlights.map((h, i) => (
            <li key={i}>
              <span className="font-medium text-slate-800">{h}</span>
            </li>
          ))}
        </ul>

        {/* DESCRIPTION / EXPLANATION */}
        <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-8">
          This <span className="font-semibold text-indigo-700">{course.title}</span> course
          is carefully structured to help learners gain a
          <span className="font-semibold text-purple-700"> strong conceptual foundation</span>
          along with <span className="font-semibold text-indigo-700">practical, hands-on skills</span>.
          Through real-world examples and guided learning,
          students will develop the confidence required to
          apply these skills in professional environments and
          modern industry projects.
        </p>

        {/* PRICE & ADD TO CART */}
        <div className="text-center">
          <p className="text-2xl font-bold text-purple-700 mb-4">
            {course.price}
          </p>

          <button
            onClick={addToCart}
            className="bg-purple-700 text-white px-10 py-3 rounded-lg
            font-semibold hover:bg-purple-800 transition shadow-md"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </section>
  );
}
