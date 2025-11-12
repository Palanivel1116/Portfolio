import './App.css';
import Project from './component/Project';
import Header from './component/Header'; 
import Hero from './component/Hero';
import About from './component/About';
import Contact from './component/Contact';
function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <About/>
     <Project/>
     <Contact/>
    </div>
  );
}

export default App;
