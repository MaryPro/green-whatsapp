import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Input,
  MessageBubble,
  MessagesContainer,
  Form,
  MessageBubbleContainer,
  PhoneNumber,
} from "./chat.styled";
import { deleteMessage, getMessage, sendMessage } from "./message-requests";
import { useChatScroll } from "../../hooks/use-chat-scroll.hook";
import PhoneNumberForm from "../phone-number-form/phone-number-form";

interface Message {
  id: string;
  text: string;
  sender: "user" | "recipient";
}

const MESSAGE_UPDATE_INTERVAL = 5000;

const Chat: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [activePhoneNumber, setActivePhoneNumber] = useState("");

  const messagesRef = useChatScroll(messages);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const createMessage = (
    id: string,
    text: string,
    sender: "user" | "recipient"
  ): Message => ({
    id,
    text,
    sender,
  });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim() === "" || !activePhoneNumber) return;

    sendMessage(activePhoneNumber, inputValue)
      .then((res) => {
        const newMessage = createMessage(res.idMessage, inputValue, "user");
        setMessages((prevState) => [...prevState, newMessage]);
      })
      .catch(() => {});
    setInputValue("");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      getMessage()
        .then((res) => {
          if (res?.body?.messageData?.textMessageData?.textMessage) {
            const newMessage = createMessage(
              res.body.idMessage,
              res.body.messageData.textMessageData.textMessage,
              "recipient"
            );

            if (!messages.some((msg) => msg.id === newMessage.id)) {
              setMessages((prevState) => [...prevState, newMessage]);
            }
          }

          return res.receiptId;
        })
        .then((receiptId) => deleteMessage(receiptId))
        .catch(() => {});
    }, MESSAGE_UPDATE_INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handlePhoneNumberSubmit = (phoneNumber: string) => {
    setActivePhoneNumber(phoneNumber);
  };

  return (
    <Container>
      <PhoneNumber>
        <PhoneNumberForm onSubmit={handlePhoneNumberSubmit} />
        {activePhoneNumber || "Добавьте номер телефона, чтобы начать переписку"}
      </PhoneNumber>

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
        <Button type="submit" disabled={!activePhoneNumber}>
          Отправить
        </Button>
      </Form>
    </Container>
  );
};

export default Chat;
