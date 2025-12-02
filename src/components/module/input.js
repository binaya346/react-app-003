import Styled from "./input.module.css";

const Input = (props) => {
    const { type, placeholder, onChange, label, name } = props;

    return (
        <>
            <label className={Styled.label}>{label}</label>
            
            <input
                className={Styled['input-field']}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                name={name}
            />
        </>
    );
};

export default Input;