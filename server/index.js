var express = require('express');
// var bodyParser = require('body-parser');
var request = require('request')
var path = require('path');
var morgan = require('morgan');
const movieController = require('./controllers/movieController.js')
const { API_KEY } = require('../config.js');

const db = require(path.join(__dirname, '../db/sql/index.js'))

// Sign up and get your moviedb API key here:
// https://www.themoviedb.org/account/signup

var app = express();



//Middleware
// app.use(bodyParser.json());
app.use(express.json())
app.use(morgan('dev'))

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + '/../client/dist'));

// **********************
// API Helpers
// **********************
var apiHelpers = require('./helpers/apiHelpers.js');
const getMoviesAPI = (genreID) => {
  return (
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&with_genres=${genreID}`
  )
}

const getGenreIds = () => {
  return (
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  )
}

// **********************
// API Requesters
// **********************
const getSearch = (GenreId) => {
  // get the search genre     
  return new Promise((resolve, reject) => {
    request(getMoviesAPI(GenreId), (err, response) => {
      if (err) { reject(err) } 
      else {resolve(response) }
    })
    
  })
}

  const getGenres = () => {

    return new Promise((resolve, reject) => {
      request(getGenreIds(), (err, response) => {
        if (err) { reject(err) } 
        else {resolve(response) }
      })
      
    })
    // make an axios request to get the list of official genres
    
    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list
    
    // send back
  }

  // *************************************
// DataBase Helpers
// *************************************

const saveFave = (movie) => {
  const { id, title, poster_path, vote_average, release_date } = movie
  const queryString = `INSERT INTO faves (id, title, poster_path, vote_average, release_date) 
  VALUES("${id}", "${title}", "${poster_path}", "${vote_average}", "${release_date}")`
  return new Promise((resolve, reject) => {
    db.query(queryString, (err, result, fields) => {
      if (err) { reject(err) }
      else {resolve(result)}
    })

  })
}


// *************************************
// Routes
// *************************************
app.get('/genres', function(req, res) {
  getGenres()
  .then(genres => {
    return genres.body} )
  .then(genres => {res.send(genres.genres.results)})  
  // make an axios request to get the official list of genres from themoviedb

  // use this endpoint. you will need your API key from signup: https://api.themoviedb.org/3/genre/movie/list

  // send back
});

app.get('/search', function(req, res) {
  getSearch(req.query.id)
  .then(movies => {
    res.send(movies.body)
  })
  .catch(err => console.log(err))
  
  
  // use this endpoint to search for movies by genres (using API key): https://api.themoviedb.org/3/discover/movie
  // and sort them by votes (worst first) using the search parameters in themoviedb API
});


app.post('/save', function(req, res) {
 console.log('req$$$$$$$$$$$$$$$', req.body.json())
  saveFave(req.body)
  .then(dbRes => dbRes.json())
  .then(dbres => {console.log(dbres)
  })
  .catch(err => console.log(err))
  res.send(201)
  //save movie as favorite

});

app.post('/delete', function(req, res) {

  //remove movie from favorites

});


//OPTION 2: Use Express Router

//IF you decide to go with this option, delete OPTION 1 to continue

//Routes

const movieRoutes = require('./routes/movieRoutes.js');

//Use routes
app.use('/movies', movieRoutes);


app.listen(3000, function() {
  console.log('listening on port 3000!');
});
