import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ========== AUTH GUARD ========== */
import ProtectedRoute from "./Components/auth/ProtectedRoute";

/* ========== LAYOUTS ========== */
import PublicLayout from "./Components/public/PublicLayout";
import StudentLayout from "./Components/student/StudentLayout";
import AdminLayout from "./Components/admin/AdminLayout";

/* ========== PUBLIC SECTIONS ========== */
import Hero from "./Components/Hero";
import Courses from "./Components/Courses";
import Contact from "./Components/Contact";

/* ========== PUBLIC PAGES ========== */
import Login from "./Components/Login";
import Register from "./Components/Register";
import CourseDetails from "./Components/CourseDetails";
import Cart from "./Components/Cart";

/* ========== STUDENT PAGES ========== */
import Dashboard from "./Components/student/Dashboard";
import MyCourses from "./Components/student/MyCourses";
import Progress from "./Components/student/Progress";
import Certificates from "./Components/student/Certificates";
import Internships from "./Components/student/Internships";

/* ========== ADMIN PAGES ========== */
import AdminDashboard from "./Components/admin/AdminDashboard";
import ManageCourses from "./Components/admin/ManageCourses";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ========= PUBLIC ROUTES ========= */}
        <Route path="/" element={<PublicLayout />}>
          <Route
            index
            element={
              <>
                <Hero />
                <Courses />
                <Contact />
              </>
            }
          />
          <Route path="course/:id" element={<CourseDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
        </Route>

        {/* ========= STUDENT ROUTES ========= */}
        <Route
          path="/students"
          element={
            <ProtectedRoute allowedRole="student">
              <StudentLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<MyCourses />} />
          <Route path="progress" element={<Progress />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="internships" element={<Internships />} />
        </Route>

        {/* ========= ADMIN ROUTES ========= */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="courses" element={<ManageCourses />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
