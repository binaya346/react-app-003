import { useState } from "react";
import Input from "./module/input";
import Styled from "./form.module.css";

const Form = () => {
    const [state, setState] = useState({ fullName: "", phone: "", password: "", email: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value })
    }

    console.log(state)

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
        </form>
    );
};

export default Form;    