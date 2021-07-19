import React from'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import {Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
       <Nav></Nav>
      <Route exact path="/Portfolio-2021" component={Home}/>
      <Route exact path="/portfolio" component={Portfolio}/>
      <Route exact path="/contact" component={ContactForm}/>
      <Route exact path="/resume" component={Resume}/>
      <Footer></Footer>
    </div>
  );
}

export default App;
