import React from 'react';
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Main from "./components/Main";
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Nav />
        <Main />
      </Wrapper>
    </div>
  );
};

export default App;
