import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Car from './components/Car';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/car" component={ Car } />
        {/* <Route exact path="/car/:produtos"
        render={ (props) => <Car { ...props } /> } /> */}
      </Switch>
    );
  }
}

export default Routes;
