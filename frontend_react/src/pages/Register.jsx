// import { useState } from "react";
// import axios from "axios";

// const Register = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const res = await axios.post("http://localhost:5000/register", { name, email, password });
//         alert(res.data.message);
//     };

//     return (
//         <div>
//             <h2>Sign Up</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
//                 <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
//                 <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default Register;



import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // handle signup logic
        const res = await axios.post("http://localhost:5000/register", { name, email, password });
        alert(res.data.message);
        navigate("/");
    };

    const styles = {
        container: {
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)',    // linear-gradient(135deg, #667eea 0%, #764ba2 100%)
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
    };

    return (
        <div style={styles.container}>
            <form style={styles.card} onSubmit={handleSubmit}>
                <h2 style={styles.title}>Sign Up</h2>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={styles.input}
                />
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
                <button type="submit" style={styles.button}>Submit</button>
            </form>
        </div>
    );
};

export default Signup;

