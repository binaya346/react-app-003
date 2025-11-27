import StyledButton from "./button.styled";

const Button = (props) => {
    const { type, children } = props;
    return (
        <StyledButton type={type}>{children}</StyledButton>
    );
};

export default Button;