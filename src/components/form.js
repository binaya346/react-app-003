import { useState } from "react";
import Input from "./module/input";
import Styled from "./form.module.css";
import Button from "./module/button";

const Form = () => {
    const [state, setState] = useState({ fullName: "", phone: "", password: "", email: "" });
    const [error, setError] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value })
        setError("");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const isFormValid = handleFormValidation();
        if (isFormValid) {
            uploadToServer()
        }
    }

    const handleFormValidation = () => {
        if (state.fullName === "" || state.email === "" || state.phone === "" || state.password === "") {
            setError("All fields are required!");
            return false;
        }
        else {
            if (state.password.length < 6) {
                setError("Password must be at least 6 characters long.");
                return false;
            }

            if (state.phone.length < 10) {
                setError("Phone number must be at least 10 digits long.");
                return false;
            }

            if (!state.email.includes("@")) {
                setError("Please enter a valid email address.");
                return false;
            }

            if (state.fullName.length < 3) {
                setError("Full name must be at least 3 characters long.");
                return false;
            }
        }
        return true;
    }

    const uploadToServer = async () => {
        try {
            const url = "https://jsonplaceholder.typicode.com/posts"
            const response = await fetch(url, {
                method: 'POST', // Specify the HTTP method as POST
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':"secretkey or token" // Indicate that the request body is JSON
                },
                body: JSON.stringify(state), // Convert the JavaScript object to a JSON string for the body
            });

            if (!response.ok) {
                // Handle HTTP error responses (e.g., 404, 500)
                const errorData = await response.json();
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message}`);
            }

            const responseData = await response.json(); // Parse the JSON response body
            return responseData;

        } catch (error) {
            console.error('Error during POST request:', error);
            throw error; // Re-throw the error for further handling
        }
    }


    return (
        <form className={Styled.form}>
            <Input
                type="text"
                placeholder="Enter your name"
                label="Name:"
                name="fullName"
                onChange={handleChange}
            />

            <Input
                type="email"
                placeholder="Enter your Email"
                label="Email:"
                name="email"
                onChange={handleChange}
            />

            <Input type="number"
                placeholder="Enter your Phone"
                label="Phone Number:"
                name="phone"
                onChange={handleChange}
            />

            <Input
                type="password"
                placeholder="Enter your Password"
                label="Password:"
                name="password"
                onChange={handleChange}
            />

            <div>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>

            <div className={Styled["btn-wrapper"]}>
                <Button type="submit" onClick={handleSubmit}>Submit</Button>
            </div>
        </form>
    );
};

export default Form;    