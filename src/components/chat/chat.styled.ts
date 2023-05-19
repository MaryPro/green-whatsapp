import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  &:before {
    content: "";
    min-height: 50px;
  }

  &:after {
    content: "";
    min-height: 60px;
  }
`;

export const PhoneNumber = styled.div`
  display: flex;
  align-items: center;
  background-color: #1f2c33;
  color: #ffff;
  position: fixed;
  width: 100%;
`;

export const MessagesContainer = styled.div`
  overflow-y: auto;
  padding: 10px 20px;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:before {
    content: "";
    display: block;
    margin-top: auto;
  }
`;

export const MessageBubbleContainer = styled.div<{
  sender: "user" | "recipient";
}>`
  display: flex;
  justify-content: ${({ sender }) =>
    sender === "user" ? "flex-end" : "flex-start"};
  margin-bottom: 10px;
`;

export const MessageBubble = styled.div<{ sender: "user" | "recipient" }>`
  background-color: ${({ sender }) =>
    sender === "user" ? "#015c4b" : "#1f2c33"};
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  max-width: 70%;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  padding: 5px 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: 62px;
  background-color: #1f2c33;
  box-sizing: border-box;
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

  &:disabled {
    color: #8c8c8c;
    cursor: default;
  }
`;
