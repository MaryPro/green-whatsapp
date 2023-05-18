import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  ErrorMessage,
  Form,
  Input,
  Label,
} from "./login-form.styled";
import { getStateInstance } from "../chat/hooks";

interface LoginFormProps {
  onLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [idInstance, setIdInstance] = useState(() => {
    const storedId = localStorage.getItem("idInstance");
    return storedId !== null ? storedId : "";
  });
  const [apiTokenInstance, setApiTokenInstance] = useState(() => {
    const storedToken = localStorage.getItem("apiTokenInstance");
    return storedToken !== null ? storedToken : "";
  });
  const [idError, setIdError] = useState(false);
  const [apiTokenError, setApiTokenError] = useState(false);

  useEffect(() => {
    localStorage.setItem("idInstance", idInstance);
  }, [idInstance]);

  useEffect(() => {
    localStorage.setItem("apiTokenInstance", apiTokenInstance);
  }, [apiTokenInstance]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (idInstance.trim() === "") {
      setIdError(true);
      return;
    }
    if (apiTokenInstance.trim() === "") {
      setApiTokenError(true);
      return;
    }
    await getStateInstance(idInstance, apiTokenInstance).then((data) => {
      if (data && data.stateInstance === "authorized") {
        onLogin();
      } else {
        setIdError(true);
        setApiTokenError(true);
      }
    });
  };

  const handleIdInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdInstance(event.target.value);
    setIdError(false);
  };

  const handleApiTokenInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setApiTokenInstance(event.target.value);
    setApiTokenError(false);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          ID Instance:
          <Input
            type="text"
            value={idInstance}
            onChange={handleIdInputChange}
          />
        </Label>
        {idError && <ErrorMessage>Please enter a valid ID</ErrorMessage>}
        <Label>
          API Token Instance:
          <Input
            type="text"
            value={apiTokenInstance}
            onChange={handleApiTokenInputChange}
          />
        </Label>
        {apiTokenError && (
          <ErrorMessage>Please enter a valid API Token</ErrorMessage>
        )}
        <Button type="submit">Войти</Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
