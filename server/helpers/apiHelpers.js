const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');

// write out logic/functions required to query TheMovieDB.org

//this api will return a list of movies in the specified genre sorted by rate in acesnding order
const getMoviesAPI = (genreID) => {
    return (
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1with_genres=${genreID}`
    )
}

const getGenreIds = () => {
    return (
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    )
}

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file


module.export = { 
    getMoviesAPI: getMoviesAPI, 
    getGenreIds: getGenreIds }