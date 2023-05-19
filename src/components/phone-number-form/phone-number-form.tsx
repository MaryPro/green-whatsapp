import React, { useState } from "react";
import { Button, Form, Input } from "./phone-number-form.styled";

interface PhoneNumberFormProps {
  onSubmit: (phoneNumber: string) => void;
}

const PhoneNumberForm: React.FC<PhoneNumberFormProps> = ({ onSubmit }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setPhoneNumber(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(phoneNumber);
    setPhoneNumber("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder={"Телефон"}
        pattern="[0-9]{11,13}"
        autoFocus
        title="Введите номер телефона без пробелов и других символов. Пример 71112233444"
      />
      <Button type="submit">Добавить</Button>
    </Form>
  );
};

export default PhoneNumberForm;
