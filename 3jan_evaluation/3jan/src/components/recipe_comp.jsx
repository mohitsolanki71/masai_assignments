import styled from "styled-components";

export const Input = styled.input`
display:flex;
padding: 0.5em;
margin: 0.5em;
color: ${props => props.inputColor || "#1A374D"};
background: #B1D0E0;
border: none;
border-radius: 3px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  border: 2px solid Red;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


