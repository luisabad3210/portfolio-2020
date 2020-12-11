import React, { Component } from 'react';
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

class App extends Component {

  state = {
    user: {
      display: "lightMode",
      firstName: "Luis",
      lastName: "Abad",
      bio: "Self-motivated developer with a passion for product design. With a keen eye for details, proven experience, imagination and who sees solutions and challenges where others see problems. I am also an out of the box thinker, a disciplined and devoted worker and an individual that is good at sticking to deadlines.",
      homeTown: "Queens, New York",
      currentCity: "Atlanta, Georgia",
      profession: "Front-End Software Engineer",
      education: "Digital Craft",
      contact: {
          phone: "(678) 365-6548",
          email: "luisabad3210@gmail.com",
          linkedin: "https://www.linkedin.com/in/luis-abad-a00180183/"
      }
    }
  }

  render() {

    const profile = () => {return <Profile />}
    const home = () => {return <Home />}
    const friends = () => {return <Friends />}
    const watch = () => {return <Watch />}
    const marketplace = () => {return <Marketplace />}
    const group = () => {return <Group />}
    const about = () => {return <About />}
    const friend = () => {return <Friend />}
    const photos = () => {return <Photos />}
    const videos = () => {return <Videos />}

  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Switch>
          <Route path='/' exact component={profile} />
          <Route path='/home' component={home}/>
          <Route path='/friends' component={friends}/>
          <Route path='/watch' component={watch}/>
          <Route path='/marketplace' component={marketplace}/>
          <Route path='/groups' component={group}/>
          <Route path='/about' component={about}/>
          <Route path='/friend' component={friend}/>
          <Route path='/photos' component={photos}/>
          <Route path='/videos' component={videos}/>
        </Switch>
      </div>
    </Router>
  );
}
}

export default App;