import Styled from './button.module.css';

const Button = (props) => {
    const {children, onClick} = props;

  return (
    <button onClick={onClick} className={Styled.btn}>{children}</button>
  );
};

export default Button;