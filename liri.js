
// Load the npm package: "request"
var request = require("request");

// Load the npm package: "node-spotify-api"
var spotify = require("node-spotify-api");

// Load the npm package: "twitter"
var Twitter = require("twitter");

// Requiring our "twitterKeys" module exported from key.js
var twitterKeys = require("./key.js");

// Create new authenticated twitter user named "client"
var client = new Twitter(twitterKeys);

// Assign argument after liri.js to "command"
var command = process.argv[2];


console.log("\n------------------------------------");
console.log("This is the twitterKey object: ");
console.log(twitterKeys);
console.log("------------------------------------\n");

console.log("This is the instance of Twitter method 'client':  ");
console.log(client);
console.log("------------------------------------\n\n\n\n");

console.log(process.argv[2]);

if (command==="my-tweets"){
console.log("These are the top tweets from (dpkillian):  \n");
var params = {screen_name: 'dpkillian'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {

  	for(i=0; i<tweets.length; i++){
  		console.log("Tweet #" + i + ": " + tweets[i].text);
  	}
  }
});

};










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