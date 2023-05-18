import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #1f2c33;
  padding: 15px;
  border-radius: 10px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #63727b;
`;

export const Input = styled.input`
  padding: 8px;
  margin-left: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 4px;

  ${Input} {
    border: 1px solid red;
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
