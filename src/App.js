import React, { Component } from 'react';
import './App.css';
// add the React Router module
// the main thing we need is BrowserRouter
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import MovieList from './MovieList';
import Movie from './Movie';

class App extends Component {
  render() {
    const superHero = "Batman";

    // The Router goes around EVERYHTHING it needs to control
    return (
      <Router>
        <div className="App">
          <ul>
            {/* In react router, we dont use <a>. That's so 2015.  */}
              {/* That's so Team Fortress 2 */}
              {/* Link component is the new <a> */}
            {/* <li><a href="/">Home</a></li> */}
            {/* <li><a href="/about">About</a></li> */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/movies">Movies</Link>
          </ul>

        {/* Use the Route component to set up a path match  */}
        {/* if the path matches the browser path, it will render */}
        {/* whatever is given as component prop */}
        {/* Route is self closing */}
        {/* If you have path by itself, it will look for that path ANYWHERE */}
        {/* in the URL. To restrict to exact, use exact*/}
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/" exact render={(props)=>{
            return(
              <Home superHero={superHero} />
            )
          }} />
          <Route path="/about" component={About} />
          <Route path="/movies" component={MovieList} />
          <Route path="/movies/:movieId" component={Movie} />
        </div>
      </Router>
    );
  }
}

export default App;
