import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import AnyComponent from './components/filename.jsx'
import MockData from '../mockData';
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: MockData.data,
      favorites: [],
      showFaves: false,
      genres: MockData.genres
    };
    this.swapFavorites = this.swapFavorites.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleGenreSelect = this.handleGenreSelect.bind(this);
    // you might have to do something important here!
  }

  handleClick(e) {
   console.log(Number(e.target.id));
    let favMovie = {};
    for(let m = 0; m < this.state.movies.length; m++ ){
      if (this.state.movies[m].id === Number(e.target.id))
      this.setState({favorites: this.state.favorites.concat(this.state.movies[m])})
   }
  }

  getMovies() {
    // make an axios request to your server on the GET SEARCH endpoint
  }

  saveMovie() {
    // same as above but do something diff
  }

  deleteMovie() {
    // same as above but do something diff
  }

  handleGenreSelect(e) {
    console.log(this.state.genres)
    fetch(`http://localhost:3000/search?id=${e.target.value}`)
    .then(moviesData =>  moviesData.json()
    )
    .then(movies => {
      console.log('movies', movies.results)
     this.setState({movies: movies.results})
    
    })
      
    // make a get request to themoviedb with genre
  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header> 
        
        <div className="main">
          <Search handleGenreSelect={this.handleGenreSelect} genres={this.state.genres} swapFavorites={this.swapFavorites} showFaves={this.state.showFaves}/>
          <Movies handleClick={this.handleClick} movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));