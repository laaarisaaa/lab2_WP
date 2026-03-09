import Header from './components/Header';
import Contacts from './components/Contacts';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import './App.css';

function App() {
  return (
    <div className="container"> 
      <Header />
      <Contacts />
      <Experience />
      <Education />
      <Skills />
    </div>
  );
}

export default App;