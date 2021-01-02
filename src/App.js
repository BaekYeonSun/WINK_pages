import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainPage, TimeLinePage, MyPage } from './pages';

function App() {
  return (
      <div className={"App"}>
          <Router>
              <Route exact path={"/"} component={MainPage}/>
              <Route path={"/timeline"} component={TimeLinePage}/>
              <Switch>
                  <Route path={"/profile/:name"} component={MyPage}/>
                  <Route path={"/profile"} component={MyPage}/>
              </Switch>
          </Router>
      </div>
  );
}

export default App;
