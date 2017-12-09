

// REQUEST INITIALIZATION
// Load the npm package: "request"
var request = require("request");



// SPOTIFY INITIALIZATION
// Load the npm package: "node-spotify-api"
var Spotify = require("node-spotify-api");

// Instantiate spotifyThis instance from Constructor Spotify
var spotify = new Spotify({
  id: "fadeb4504d4b444b8a2dd9b44ae7b7b7",
  secret: "8443abef25cf4edca616bd91e7f8e6f5"
});



// TWITTER INITIALIZATION
// Load the npm package: "twitter"
var Twitter = require("twitter");

// Requiring our "twitterKeys" module exported from key.js
var twitterKeys = require("./key.js");

// Create new authenticated twitter user named "client"
var client = new Twitter(twitterKeys);


// FS PACKAGE INSTALL
var fs = require("fs");


// COMMAND LINE PARSING
// Assign argument after liri.js to "command"
var command 	= process.argv[2];

// Assign argument after "command" to "modifier"
var modifier 	= process.argv[3];

// CONSOLE LOG CHECKS FOR TWITTER
// console.log("\n------------------------------------\n");
// console.log("This is the twitterKey object: ");
// console.log(twitterKeys);
// console.log("\n------------------------------------\n");

// console.log("This is the instance of Twitter method 'client':  ");
// console.log(client);
// console.log("\n------------------------------------\n");

// console.log("\nThe '" + process.argv[2] + "' command was issued.\n");


// MAIN CONDITIONAL
// Compound "if-else if" statement which determines which command is being run

// "My Tweets" condition calls "client.get" method from Twitter node module
// which "gets" the top tweets from user: dpkillian
if (command==="my-tweets"){
    console.log("--------------------------------------");
	console.log("These are the top tweets from (dpkillian):  \n");
	var params = {screen_name: 'dpkillian'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {

	  	// For loop to list out the top tweets, up to a maximum of 20
	  	for(i=0; (i<tweets.length)&&(i<20); i++){
	  		console.log("Tweet #" + i + ": " + tweets[i].text);
	  	}
	  }
	});


// "spotify-this-song" condition calls "client.get" method
} else if (command==="spotify-this-song"){

spotify.search({ type: 'track', query: modifier }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
	console.log("--------------------------------------");
	 
	var songInfo = data.tracks.items[0];

	console.log("Artist: \t" 		+ songInfo.artists[0].name);
	console.log("Song: \t\t" 		+ songInfo.name);
	console.log("Album: \t\t" 		+ songInfo.album.name);
	console.log("Preview URL: \t" 	+ songInfo.preview_url);

});



} else if (command==="movie-this"){

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + modifier + "&y=&plot=short&apikey=trilogy";

// Then create a request to the queryUrl
request(queryUrl, function(error, response, body){

  if (!error && response.statusCode === 200) {

    // Then log the body from the site!
    console.log("--------------------------------------");
    console.log("The movie title is: \t" 	+ JSON.parse(body).Title);
    console.log("The release year is: \t" 	+ JSON.parse(body).Year);    
    console.log("The IMDB rating: \t" 		+ JSON.parse(body).Ratings[0].Value);
    console.log("Rotten Tomato rating: \t"	+ JSON.parse(body).Ratings[1].Value);
    console.log("The produced in: \t"		+ JSON.parse(body).Country);
    console.log("The genre is: \t\t" 		+ JSON.parse(body).Genre);
    console.log("Language: \t\t" 			+ JSON.parse(body).Language);
    console.log("The director is: \t" 		+ JSON.parse(body).Director);
    console.log("The actors are: \t" 		+ JSON.parse(body).Actors);
    console.log("The plot: \n" 				+ JSON.parse(body).Plot);
    console.log("--------------------------------------");
    console.log("\n");
  }

});

} else if (command==="do-what-it-says"){


// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
	fs.readFile("random.txt", "utf8", function(error, data) {

	  // If the code experiences any errors it will log the error to the console.
	  if (error) {
	    return console.log(error);
	  }

	  // We will then print the contents of data
	  console.log(data);

	  // Then split it by commas (to make it more readable)
	  var dataArr = data.split(",");

	  // We will then re-display the content as an array for later use.
	  console.log("--------------------------------------");
	  console.log("This is the random.txt input, as an array, to be evaluated by the if-else:");
	  console.log(dataArr);

	  // I KNOW I NEED TO CREATE A RECURSIVE FUNCTION THAT CALLS ITSELF TO RE-EVALUTE
	  // (THE MAIN CONDITIONAL IN LINE 56)  "dataArr" INPUT FROM THE RANDOM.TXT FILE.
	  // BUT I HAVE RUN INTO SO MANY ISSUES.  SO I AM UNABLE TO COMPLETE...UGH!!!

	});

};














