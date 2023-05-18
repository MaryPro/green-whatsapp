import React, { useState } from "react";
import Chat from "./components/chat/chat";
import LoginForm from "./components/login-form/login-form";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    // perform login logic
    setIsLoggedIn(true);
  };

  return <>{isLoggedIn ? <Chat /> : <LoginForm onLogin={handleLogin} />}</>;
}

export default App;
