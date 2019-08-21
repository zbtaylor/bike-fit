import React from 'react';
import Routes from './components/Routes';
import MainNav from './components/nav/MainNav';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <MainNav />
      <Routes />
    </div>
  );
}

export default App;
