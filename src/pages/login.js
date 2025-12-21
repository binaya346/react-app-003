import { useState } from 'react';
// import Input from '../components/module/input'
// import Button from '../components/module/button';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from '../components/bootstrap/modal';
import styles from './login.module.css';

import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [state, setState] = useState({ email: '', password: '' });
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        setError("");
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            submitForm();
        }
    }

    const validateForm = () => {
        if (state.email.length >= 3 && state.password.length >= 6) {
            return true;
        }
        setError("email must be at least 3 characters and password at least 6 characters long");
        return false;
    }

    const submitForm = async () => {
        try {
            const url = "http://localhost:8080/auth/login";
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(state)
            })
            if (!response.ok) {
                throw new Error("Check your credentials.");
            }
            const data = await response.json();
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            setShowModal(true)

        } catch (err) {
            setError("An error occurred during login." + err.message);
        }
    }

    const onModalClose = () => {
        navigate('/');
    }

    return (
        <div>
            <div className={styles.login}>
                <h2 className={styles["login-heading"]}>Login to Book Store</h2>
                {/* <Input type="text" name="email" label="email" onChange={handleChange} />
                <br />
                <Input type="password" name="password" label="Password" onChange={handleChange} />
                <br /> */}

                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" name="email" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder='Enter your password' name="password" onChange={handleChange} />
                    </Form.Group>
                </Form>
                {error && <p className={styles.error}>{error}</p>}
                <Button variant="secondary" type="submit" onClick={handleSubmit}>Login</Button>

                {showModal && <Modal title="Success" body="Successfully logged in" close="Ok" onClose={onModalClose} />}

            </div>
        </div>
    );
}

export default Login;