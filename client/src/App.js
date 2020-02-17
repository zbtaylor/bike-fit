import React, { useEffect, useState } from "react";
import "./interceptor";
import { AccountContext } from "./contexts/AccountContext";
import Routes from "./Routes";
import "./App.css";

const App = props => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <AccountContext.Provider value={{ loggedIn, setLoggedIn }}>
      <Routes />
    </AccountContext.Provider>
  );
};

export default App;
