import Styled from './button.module.css';

const Button = (props) => {
  const { type, children, onClick } = props;

  return (
    <button type={type} onClick={onClick} className={Styled.btn}>{children}</button>
  );
};

export default Button;