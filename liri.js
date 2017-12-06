
// Load the npm package: "inquirer"
var inquirer = require("inquirer");

// Load the npm package: "node-spotify-api"
var spotify = require("node-spotify-api");

// Load the npm package: "twitter"
var twitter = require("twitter");

// Requiring our "twitterKeys" module exported from key.js
var twitterKeys = require("./key.js");

// Grab or assemble the movie name and store it in a variable called "movieName"
var command = process.argv[2];










// Then run a request to the OMDB API with the movie specified
// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// Then create a request to the queryUrl
// request(queryUrl, function(error, response, body){

//   if (!error && response.statusCode === 200) {

//     // Then log the body from the site!
//     console.log("The movie title is: " + JSON.parse(body).Title);
//     console.log("The release year is: " + JSON.parse(body).Year);    
//     console.log("The rating: " + JSON.parse(body).Rated);
//     console.log("The genre is: " + JSON.parse(body).Genre);
//     console.log("The director is: " + JSON.parse(body).Director);
//     console.log("The actors are: " + JSON.parse(body).Actors);
//     console.log("The plot: " + JSON.parse(body).Plot);
//     console.log("--------------------------------------");
//     console.log("\n");
//   }

// });