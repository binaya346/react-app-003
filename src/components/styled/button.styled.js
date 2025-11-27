import styled from 'styled-components';

const Button = styled.button`
  color: ${props => props.type === 'primary' ? 'white' : 'black'};
  font-size: 16px;
  border: ${props => props.type === 'primary' ? 'none' : '1px solid grey'};
  padding: 10px 20px;
  border-radius: 5px;
  background-color: ${props => props.type === 'primary' ? 'blue' : 'lightgrey'};
  margin: 5px;
  cursor: pointer;
`;

export default Button;