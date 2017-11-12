
var friends = require("../data/friends");
var allScores = [];
var results  = [];

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
  		res.send(friends);
	});


      // This line is the magic. It"s very similar to the standard ajax function we used.
      // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
      // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
      // depending on if a tables is available or not.

	app.post("/api/friends", function(req, res) {

    console.log(req.body)

    var scores = [];

    scores.push(req.body.a1)
    scores.push(req.body.a2)
    scores.push(req.body.a3)
    scores.push(req.body.a4)
    scores.push(req.body.a5)
    scores.push(req.body.a6)
    scores.push(req.body.a7)
    scores.push(req.body.a8)
    scores.push(req.body.a9)
    scores.push(req.body.a10)

    if (allScores[0] != undefined){
    	results =[];
    	console.log("comparing other friends...")
	    for (var i = 0; i < allScores.length; i++){
	    	var totnum = 0 
	    	for (var j = 0; j< allScores[i].length; j ++){
	    		var diff = Math.abs(parseInt(allScores[i][j]) - parseInt(scores[j]))
	    		totnum += diff
	    	}
	    	results.push(totnum)
	    }

	    console.log(results)

	    Array.min = function( arr ){
    		return Math.min.apply(Math, arr );
		};
		var minimum = Array.min(results);
		console.log(minimum)
		console.log(friends[results.indexOf(minimum)].name)
		console.log(friends[results.indexOf(minimum)].photo)
	}
	else {
		console.log("You are the first friend")
	}

    friends.push(req.body);


    res.send(friends)

    allScores.push(scores)
    //console.log(allScores)
	});
};





