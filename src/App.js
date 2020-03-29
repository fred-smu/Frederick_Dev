import React         from 'react';
import Wrapper       from "./components/Wrapper";
import Nav           from "./components/Nav";
import DataContact   from "./components/DataContact";
import DataBody      from "./components/DataBody";
import DataPortfolio from "./components/DataPortfolio";
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Nav />
        <Switch>
          <Route exact path="/" component= {DataBody} />
          <Route exact path="/portFolio" component={DataPortfolio} />
          <Route exact path="/contact" component={DataContact} />
          <Route path="/" render={() => <div>404 Error Page not found</div>} />

        </Switch>
      </Wrapper>
    </BrowserRouter>

  );
};

export default App;
