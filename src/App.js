import './App.css';
import Navigation from './components/nav';
import Header from './components/header';
import Content from './components/content';
import Contact from './components/contact/contact';

const App = () => {

  const profile = {
    firstName: 'Luis',
    lastName: 'Abad',
    bio: 'bio'
  }

  return (
    <div>
      <Navigation profile={profile}/>
      <Header profile={profile}/>
      <Content />
      <Contact />
    </div>
  );
}

export default App;