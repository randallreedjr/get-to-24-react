require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import Instructions from './Instructions'
import Problem from './Problem'
import Solution from './Solution'

class App extends React.Component {
  render() {
    console.log('test');
    return (
      <Router history={hashHistory} >
        <Route path='/' component={Container} >
          <IndexRoute component={Instructions} />
          <Route path='/problem' component={Problem} />
          <Route path='/solution' component={Solution} />
        </Route>
      </Router>
    );
  }
}

const Nav = () => (
  <div>
    <Link to='/'>Home</Link>&nbsp;
    <Link to='/problem'>Play</Link>
    <Link to='/solution'>Solutions</Link>
  </div>
)

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>

export default App;
