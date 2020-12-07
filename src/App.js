import './App.css';
import Navigation from './components/nav';
import Header from './components/header';
import Content from './components/content';

const App = () => {

  const profile = {
    display: 'lightMode',
    firstName: 'Luis',
    lastName: 'Abad',
    bio: 'Self-motivated developer with a passion for product design. With a keen eye for details, proven experience, imagination and who sees solutions and challenges where others see problems. I am also an out of the box thinker, a disciplined and devoted worker and an individual that is good at sticking to deadlines.',
    homeTown: 'Queens, New York',
    currentCity: 'Atlanta, Georgia',
    profession: 'Front-End Software Engineer',
    education: 'Digital Craft',
    contact: {
      phone: '(678) 365-6548',
      email: 'luisabad3210@gmail.com',
      linkin: 'https://www.linkedin.com/in/luis-abad-a00180183/'
    }
  }

  return (
    <div className='App'>
      <Navigation profile={profile}/>
      <Header profile={profile}/>
      <Content profile={profile}/>
    </div>
  );
}

export default App;