import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {login, table, user, main, analysis, simul} from 'pages';
import LoginCheckContainer from "./containers/Common/LoginCheckContainer";
import HeaderContainer from "containers/Common/HeaderContainer";
import 'static/css/common.css'
import 'static/css/import.css'

class App extends Component {
  render() {
    return (
        <div id="wrap">
          <Switch>
            <Route exact path="/login" component={login}/>
            <>
              <HeaderContainer/>
              <LoginCheckContainer/>
              <Route exact path="/user" component={user}/>
              <Route exact path="/" component={main}/>
              <Route exact path="/analysis" component={analysis}/>
              <Route exact path="/simul" component={simul}/>
              <Route exact path="/table" component={table}/>
            </>
          </Switch>
        </div>
    );
  }
}

export default App;