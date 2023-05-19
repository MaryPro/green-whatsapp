import React, { useState } from "react";
import Chat from "./components/chat/chat";
import LoginForm from "./components/login-form/login-form";

function App() {
  const idInstance = localStorage.getItem("idInstance");
  const apiTokenInstance = localStorage.getItem("apiTokenInstance");

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    !!idInstance && !!apiTokenInstance
  );

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return <>{isLoggedIn ? <Chat /> : <LoginForm onLogin={handleLogin} />}</>;
}

export default App;
