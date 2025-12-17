const courses = [
  {
    title: "Full Stack Development",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Frontend with React",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Backend & APIs",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Data Science",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Artificial Intelligence",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cyber Security",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cloud Computing",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "UI / UX Design",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mobile App Development",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Java Programming",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Web Development",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Machine Learning",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
  }
];

export default function Courses() {
  return (
    <section
      id="courses"
      className="py-20 bg-gradient-to-b from-white to-indigo-50 px-4 sm:px-6"
    >
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-14 text-indigo-700">
        Our Courses
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
        {courses.map((c, i) => (
          <div
            key={i}
            className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
          >
            {/* Image */}
            <div className="relative h-44 sm:h-48">
              <img
                src={c.img}
                alt={c.title}
                className="h-full w-full object-cover"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 flex flex-col gap-3">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                {c.title}
              </h3>

              <a
                href="#register"
                className="mt-4 inline-block text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-xl font-medium hover:opacity-90 transition"
              >
                Apply Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
