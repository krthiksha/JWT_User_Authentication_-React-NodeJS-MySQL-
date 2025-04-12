import { useEffect } from "react";
import { useNavigate , Link, useLocation  } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Please login first");
            navigate("/login");
        }
    }, [navigate]);

    // data prop from login data's
    // const user = JSON.parse(localStorage.getItem("user"));
    const location = useLocation();
    const { user } = location.state || {};

    const styles = {
        container: {
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
            fontFamily: 'Arial, sans-serif',
        },
        card: {
            backgroundColor: '#fff',
            padding: '2rem 3rem',
            borderRadius: '15px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
            textAlign: 'center',
            maxWidth: '400px',
        },
        heading: {
            fontSize: '2rem',
            marginBottom: '0.5rem',
            color: '#333',
        },
        text: {
            fontSize: '1.1rem',
            marginBottom: '1.5rem',
            color: '#555',
        },
        logoutLink: {
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#e53935',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
        },
        logoutLinkHover: {
            backgroundColor: '#c62828',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.heading}>Dashboard</h2>
                <h4> Welcome, {user?.name || "User"} !</h4>
                <p style={styles.text}>Only visible to logged-in users</p>
                <Link to="/" style={styles.logoutLink}>Log Out</Link>
            </div>
        </div>
    );
};

export default Dashboard;


