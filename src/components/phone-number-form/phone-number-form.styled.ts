import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  padding: 15px 20px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 15px;
  background-color: #2a3942;
  color: #ffffff;
  font-size: 15px;

  &::placeholder {
    padding-left: 5px;
  }

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #63727b;
  color: #fff;
  cursor: pointer;
`;
