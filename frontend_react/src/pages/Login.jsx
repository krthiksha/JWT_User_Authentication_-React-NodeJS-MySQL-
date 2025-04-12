// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// import { Link } from 'react-router-dom';

// import Card from '@mui/joy/Card';

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post("http://localhost:5000/login", { email, password });
//             alert(res.data.message);
//             localStorage.setItem("token", res.data.token); // save JWT token
//             navigate("/dashboard"); // redirect on successful login
//         } catch (err) {
//             alert(err.response?.data?.message || "Login failed");
//         }
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <form onSubmit={handleLogin}>
//                 <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
//                 <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
//                 <button type="submit">Login</button> 

//                 <br/>
//                 <br/>

//                 <Link to='/register'>Sign Up</Link>

                
//             </form>
//         </div>
//     );
// };

// export default Login;




import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        // your login logic
        try {
            const res = await axios.post("http://localhost:5000/login", { email, password });
            alert(res.data.message);
            localStorage.setItem("token", res.data.token); // save JWT token
            // localStorage.setItem("user",JSON.stringify(res.data.user));
            navigate("/dashboard", {
                state: {
                    user: res.data.user
                }
            }); // redirect on successful login
        } catch (err) {
            alert(err.response?.data?.message || "Login failed");
        }
    };

    // Inline styles
    const styles = {
        container: {
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)',
        },
        card: {
            width: '350px',
            padding: '2rem',
            borderRadius: '15px',
            backgroundColor: '#ffffff',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
        },
        title: {
            textAlign: 'center',
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: '#333',
        },
        input: {
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            outline: 'none',
        },
        button: {
            padding: '12px',
            backgroundColor: '#1976d2',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
        buttonHover: {
            backgroundColor: '#125a9c',
        },
        link: {
            textAlign: 'center',
            color: '#1976d2',
            textDecoration: 'none',
            fontSize: '0.95rem',
        }
    };

    return (
        <div style={styles.container}>
            <form style={styles.card} onSubmit={handleLogin}>
                <h2 style={styles.title}>Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Login</button>
                <Link to="/register" style={styles.link}>Don't have an account? Sign Up</Link>
            </form>
        </div>
    );
};

export default Login;



