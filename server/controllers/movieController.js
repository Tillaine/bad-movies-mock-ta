const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');
var request = require('request')

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    console.log('request#######', req.body)
    // get the search genre     
    return new Promise((resolve, reject) => {
      console.log('######helper', apiHelpers)
      request(apiHelpers.getMoviesAPI(req.body), (err, response) => {
        if (err) { reject(err) } 
        else {resolve(response) }
      })
      
    })
    // https://www.themoviedb.org/account/signup
    // get your API KEY

    // use this endpoint to search for movies by genres, you will need an API key

    // https://api.themoviedb.org/3/discover/movie

    // and sort them by horrible votes using the search parameters in the API
  },
  getGenres: (req, res) => {
    // make an axios request to get the list of official genres
    
    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list
    
    // send back
  },
  saveMovie: (req, res) => {

  },
  deleteMovie: (req, res) => {

  }
}