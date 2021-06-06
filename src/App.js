import './App.css';
import Nav from './Components/Nav';
import About from'./Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Nav/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Resume/>
      <Footer/>
    </div>
  );
}

export default App;
