import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Input,
  MessageBubble,
  MessagesContainer,
  Form,
  MessageBubbleContainer,
} from "./chat.styled";
import { deleteMessage, getMessage, sendMessage } from "./hooks";
import { useChatScroll } from "../../hooks/use-chat-scroll.hook";

interface Message {
  id: string;
  text: string;
  sender: "user" | "recipient";
}

const Chat: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesRef = useChatScroll(messages);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim() === "") return;

    // await sendMessage(phoneNumber, inputValue).then((res) => {
    const newMessage: Message = {
      id: `${messages.length + 1}`,
      text: inputValue,
      sender: "user",
    };

    setMessages([...messages, newMessage]);
    // console.log(res);
    // });

    setInputValue("");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      getMessage()
        .then((res) => {
          console.log("res", res);
          const newMessage: Message = {
            id: res.body.idMessage,
            text: res.body.messageData?.textMessageData?.textMessage || "",
            sender: "recipient",
          };

          setMessages([...messages, newMessage]);
          return res.receiptId;
        })
        .then((receiptId) => deleteMessage(receiptId))
        .catch(() => {});
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Container>
      <MessagesContainer ref={messagesRef}>
        {messages.map((message) => (
          <MessageBubbleContainer key={message.id} sender={message.sender}>
            <MessageBubble sender={message.sender}>
              {message.text}
            </MessageBubble>
          </MessageBubbleContainer>
        ))}
      </MessagesContainer>
      <Form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          placeholder="Введите сообщение"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button type="submit">Send</Button>
      </Form>
    </Container>
  );
};

export default Chat;
