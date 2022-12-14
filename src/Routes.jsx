import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Car from './components/Car';
import Details from './components/Details';
import Checkout from './components/Checkout';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/car" component={ Car } />
        <Route
          exact
          path="/details/:name/:idP"
          render={ (props) => <Details { ...props } /> }
        />
        <Route exact path="/checkout" component={ Checkout } />
      </Switch>
    );
  }
}

export default Routes;
