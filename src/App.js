import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Components/Header/Header'
import Home from './routes/Home/Components/Home/Home'
import About from './routes/About/Components/About/About'
import Ourfood from './routes/Ourfood/Components/Ourfood/Ourfood'
import Contact from './routes/Contact/Components/Contact/Contact'
import Catering from './routes/Catering/Components/Catering/Catering'
import './App.css';

class App extends Component {
  static propTypes = {

  }
  render() {
    return (
      <div className="App p-0">
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/ourfood" component={Ourfood} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/catering" component={Catering} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
