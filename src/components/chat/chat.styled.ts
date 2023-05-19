import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  width: 600px;
  border: 0.5px solid #63727b;
  background-color: #121d25;

  &:before {
    content: "";
    min-height: 60px;
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
  width: inherit;
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
  position: relative;

  &:after {
    content: "";
    position: absolute;
    ${({ sender }) => (sender === "user" ? "right: 13px;" : "left: 13px;")}
    top: 26%;
    width: 0;
    height: 0;
    border: ${({ sender }) =>
      sender === "user"
        ? "15px solid transparent;"
        : "15px solid transparent;"} ${({ sender }) =>
  sender === "user"
    ? "border-left-color: #015c4b;"
    : "border-right-color: #1f2c33;"} ${({ sender }) =>
  sender === "user" ? "border-right: 0;" : "border-left: 0;"}
    border-top-width: 0;
    margin-top: -10px;
    ${({ sender }) =>
      sender === "user" ? "margin-right: -20px;" : "margin-left: -20px;"}
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  padding: 5px 20px;
  position: fixed;
  bottom: 0;
  width: inherit;
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
