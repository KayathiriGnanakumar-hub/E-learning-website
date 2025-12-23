import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    instructor: ""
  });

  // Fetch all courses from Firestore
  const fetchCourses = async () => {
    const data = await getDocs(collection(db, "courses"));
    setCourses(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // Add new course
  const handleAddCourse = async () => {
    await addDoc(collection(db, "courses"), newCourse);
    alert("Course added!");
    setNewCourse({ title: "", description: "", price: "", image: "", instructor: "" });
    fetchCourses();
  };

  // Delete course
  const handleDeleteCourse = async (id) => {
    await deleteDoc(doc(db, "courses", id));
    fetchCourses();
  };

  return (
    <div>
      <h1>Manage Courses</h1>

      <div>
        <h3>Add New Course</h3>
        <input placeholder="Title" value={newCourse.title} onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })} />
        <input placeholder="Description" value={newCourse.description} onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })} />
        <input placeholder="Price" value={newCourse.price} onChange={(e) => setNewCourse({ ...newCourse, price: e.target.value })} />
        <input placeholder="Image URL" value={newCourse.image} onChange={(e) => setNewCourse({ ...newCourse, image: e.target.value })} />
        <input placeholder="Instructor" value={newCourse.instructor} onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })} />

        <button onClick={handleAddCourse}>Add Course</button>
      </div>

      <hr />

      <h3>All Courses</h3>
      {courses.map((course) => (
        <div key={course.id} style={{ border: "1px solid black", marginBottom: "10px", padding: "10px" }}>
          <h4>{course.title}</h4>
          <p>{course.description}</p>
          <p>₹{course.price}</p>
          <img src={course.image} alt="" width="150" />

          <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ManageCourses;
