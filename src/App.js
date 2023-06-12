import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education'
import Experience from './sections/Experience'
import NavProvider from './context/NavContext';
function App() {
  return (
    <div>
      <NavProvider>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Education/>
      <Experience/>
      </NavProvider>
 
    </div>
  );
}

export default App;
