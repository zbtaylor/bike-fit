import React from 'react';
import Routes from './components/Routes';
import Navigation from './components/nav/MainNav';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
