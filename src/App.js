import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import About from'./Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Nav/>
          <div>
            <Route exact path='/' component={About}/>
            <Route exact path='/portfolio' component={Portfolio}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/resume' component={Resume}/>
          </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
