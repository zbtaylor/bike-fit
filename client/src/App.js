import React from "react";
import "./interceptor";
import { Container } from "semantic-ui-react";
import Routes from "./Routes";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

const App = () => {
  return (
    <Container className="App">
      <Routes />
    </Container>
  );
};

export default App;
