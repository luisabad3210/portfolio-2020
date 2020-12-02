import './App.css';
import Navigation from './components/nav';

const App = () => {

  const profile = {
    firstName: 'Luis',
    LastName: 'Abad',
  }

  return (
    <div>
      <Navigation profile={profile}/>
      Hello World
    </div>
  );
}

export default App;