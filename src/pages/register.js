import { useState } from 'react';
import Input from '../components/module/input'
import Button from '../components/module/button';
import styles from './login.module.css';

const Register = () => {

    const [state, setState] = useState({ email: '', password: '', username: '', firstname: '', lastname: '', phone: '', gender: '', image: null, retypePassword: '' });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setError("");
        if (e.target.name === 'image') {
            setState({ ...state, [e.target.name]: e.target.files[0] });
        } else {
            setState({ ...state, [e.target.name]: e.target.value });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            submitForm();
        }
    }

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10,15}$/;

        if (!state.phone.trim()) {
            setError("Phone number is required");
            return false;
        }

        if (!phoneRegex.test(state.phone.trim())) {
            setError("Phone number must contain 10 to 15 digits");
            return false;
        }

        if (!emailRegex.test(state.email)) {
            setError("Invalid email format");
            return false;
        }

        if (state.firstname.length < 3) {
            setError("First name must be at least 3 characters");
            return false;
        }

        if (state.lastname.length < 3) {
            setError("Last name must be at least 3 characters");
            return false;
        }

        if (state.username.length < 3) {
            setError("Username must be at least 3 characters");
            return false;
        }

        if (state.password.length < 8) {
            setError("Password must be at least 8 characters");
            return false;
        }

        if (state.password !== state.retypePassword) {
            setError("Passwords do not match");
            return false;
        }

        return true;
    }

    const submitForm = async () => {
        try {
            const formData = new FormData();
            formData.append('email', state.email);
            formData.append('username', state.username);
            formData.append('firstname', state.firstname);
            formData.append('lastname', state.lastname);
            formData.append('phone', state.phone);
            formData.append('gender', state.gender);
            formData.append('password', state.password);
            if (state.image) {
                formData.append('image', state.image);
            }

            const url = "http://localhost:8080/auth/register";
            const response = await fetch(url, {
                method: 'POST',
                body: formData
            })
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Registration failed.");
            }

        } catch (err) {
            setError("Error: " + err.message);
        }
    }

    return (
        <div>
            <form className={styles.login}>
                <h2 className={styles["login-heading"]}>Register to Book Store</h2>
                <Input type="text" name="email" label="Email" placeholder="Enter your Email" onChange={handleChange} />
                <Input type="text" name="username" label="Username" placeholder="Enter your Username" onChange={handleChange} />
                <Input type="text" name="firstname" label="First Name" placeholder="Enter your First name" onChange={handleChange} />
                <Input type="text" name="lastname" label="Last Name" placeholder="Enter your Last name" onChange={handleChange} />
                <Input type="text" name="phone" label="Phone" placeholder="Enter your Phone" onChange={handleChange} />
                <Input type="password" name="password" label="Password" placeholder="Enter your Password" onChange={handleChange} />
                <Input type="password" name="retypePassword" label="Confirm Password" placeholder="Re Enter your password" onChange={handleChange} />
                <div className={styles['radio-group']}>
                    <Input type="radio" name="gender" label="Male" value="male" checked={state.gender === 'male'} onChange={handleChange} />
                    <Input type="radio" name="gender" label="Female" value="female" checked={state.gender === 'female'} onChange={handleChange} />
                </div>
                <Input type="file" name="image" label="Profile Picture" onChange={handleChange} />
                {state.image && <img src={URL.createObjectURL(state.image)} alt="Profile Preview" className={styles['profile-preview']} />}
                {error && <p className={styles.error}>{error}</p>}
                <Button type="submit" onClick={handleSubmit}>Register</Button>
            </form>
        </div>
    );
}

export default Register;