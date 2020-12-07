import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navigation from './components/nav'
import Profile from './components/pages/profile';
import Home from './components/pages/home';
import Friends from './components/pages/friends';
import Watch from './components/pages/watch';
import Marketplace from './components/pages/marketplace';
import Group from './components/pages/groups';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Profile}/>
          <Route path='/home' component={Home}/>
          <Route path='/friends' component={Friends}/>
          <Route path='/watch' component={Watch}/>
          <Route path='/marketplace' component={Marketplace}/>
          <Route path='/groups' component={Group}/>
        </Switch>

      </div>
    </Router>

  );
}

export default App;