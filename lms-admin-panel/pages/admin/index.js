// pages/admin/index.js
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    // Fetch data for dashboard
    const fetchData = async () => {
      const courseData = await axios.get('/api/courses');
      const studentData = await axios.get('/api/students');
      const instructorData = await axios.get('/api/instructors');

      setCourses(courseData.data);
      setStudents(studentData.data);
      setInstructors(instructorData.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <h2>Key Metrics</h2>
        <p>Number of Courses: {courses.length}</p>
        <p>Number of Students: {students.length}</p>
        <p>Number of Instructors: {instructors.length}</p>
      </div>
      <div>
        <h2>Manage Courses</h2>
        {/* CRUD Operations for Courses */}
      </div>
      <div>
        <h2>Manage Students</h2>
        {/* CRUD Operations for Students */}
      </div>
      <div>
        <h2>Manage Instructors</h2>
        {/* CRUD Operations for Instructors */}
      </div>
    </div>
  );
}
