import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../screens/Layout';

class Routes extends Component {
  render() {
    return(
        <Router>
          <Switch>
            <Route exact path="/" component={Layout} />
          </Switch>
        </Router>
    );
  }
}

export default Routes;