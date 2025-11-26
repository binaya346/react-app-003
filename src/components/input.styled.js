import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  border: 2px solid ${props => props.variant === 'outlined' ? 'grey' : 'blue'};
  border-radius: 4px;
  font-size: 14px;
  width: 50%;

  &:focus {
    border-color: red;
    outline: none;
  }
`;

export default Input;