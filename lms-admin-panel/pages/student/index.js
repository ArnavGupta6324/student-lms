import StudentNavbar from '../../student-page/components/StudentNavbar';

const Dashboard = () => {
    return (
        <>
            <StudentNavbar />
            <div className="dashboard">
                <h1>Welcome to the Student Dashboard</h1>
                <p>Manage your courses, view history, and leave reviews.</p>
            </div>
        </>
    );
};

export default dashboard;
