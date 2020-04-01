import React         from 'react';
import Wrapper       from "./components/Wrapper";
import Nav           from "./components/Nav";
import DataContact   from "./components/DataContact";
import DataBody      from "./components/DataBody";
import DataPortfolio from "./components/DataPortfolio";
import Footer        from "./components/footer";
// import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom'


const App = () => {
  return (
    <HashRouter>
      <Wrapper>
        <Nav />
        <Switch>
          {/* <Route exact path="/React-portfolio/" component= {DataBody} />
          <Route exact path="/React-portfolio/portFolio" component={DataPortfolio} />
          <Route exact path="/React-portfolio/contact" component={DataContact} />
          <Route path="/React-portfolio/" render={() => <div>404 Error Page not found</div>} /> */}
        <Route exact path="/" component= {DataBody} />
          <Route exact path="/portFolio" component={DataPortfolio} />
          <Route exact path="/contact" component={DataContact} />
          <Route path="/" render={() => <div>404 Error Page not found</div>} />
      </Switch>
        <Footer />
      </Wrapper>
    </HashRouter>

  );
};

export default App;
