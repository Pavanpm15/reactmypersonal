import React, { Component } from 'react';
import  Main  from './components/Main';
import Products from './components/Products'
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/products' component={Products} />
        {/* both /roster and /roster/:number begin with /roster */}
        {/* <Route path='/roster' component={Roster} />
        <Route path='/schedule' component={Schedule} /> */}
      </Switch>
    );
  }
}

export default App;
