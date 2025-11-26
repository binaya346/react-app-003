import StyledInput from "./input.styled";

const Input = (props) => {
    const { placeholder, type, variant } = props;
    return (
        <StyledInput
            type={type}
            placeholder={placeholder}
            variant={variant}
        />
    );
}

export default Input;