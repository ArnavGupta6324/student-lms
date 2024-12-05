import Link from 'next/link';
import './student.css';

const StudentNavbar = () => {
    return (
        <nav className="navbar">
            <h1>Student Portal</h1>
            <ul>
                <li><Link href="/student">dashboard</Link></li>
                <li><Link href="/student/courses">Courses</Link></li>
                <li><Link href="/student/history">Purchase History</Link></li>
                <li><Link href="/student/review">Reviews</Link></li>
                <li><Link href="/student/profile">Profile</Link></li>
            </ul>
        </nav>
    );
};

export default StudentNavbar;
