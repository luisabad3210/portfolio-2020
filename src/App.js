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

import About from './components/pages/about';
import Friend from './components/pages/friend';
import Photos from './components/pages/photos';
import Videos from './components/pages/videos';

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

          <Route path='/about' component={About}/>
          <Route path='/friend' component={Friend}/>
          <Route path='/photos' component={Photos}/>
          <Route path='/videos' component={Videos}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;