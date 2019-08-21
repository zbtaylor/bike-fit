import React from 'react';
import Routes from './components/Routes';
import Navigation from './components/nav/Navigation';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
