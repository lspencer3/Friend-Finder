
var friends = require("../data/friends");
var allScores = [];
var results  = [];
var curBestFriend = [];
var namesndphotos = [];

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
  		res.send(friends);
	});

	app.post("/api/friends", function(req, res) {
		var data = req.body
	    console.log(data)
	    console.log(data.uscores)
	    friends.push(req.body)
	 	var uname = req.body.name
		var uphoto = req.body.photo

	    namesndphotos.push({
	    	name: uname,
	    	photo: uphoto
	    })

	   // console.log(namesndphotos)

    	//console.log(allScores[0])

	    if(allScores[0] === undefined){
	    	console.log("You are the first friend")
	    	var scores = [];

		    scores.push(req.body.uscores[0])
		    scores.push(req.body.uscores[1])
		    scores.push(req.body.uscores[2])
		    scores.push(req.body.uscores[3])
		    scores.push(req.body.uscores[4])
		    scores.push(req.body.uscores[5])
		    scores.push(req.body.uscores[6])
		    scores.push(req.body.uscores[7])
		    scores.push(req.body.uscores[8])
		    scores.push(req.body.uscores[9])

	    	allScores.push(scores)

	    	//console.log(allScores)
	    	//console.log(namesndphotos)
	    	res.json(false)
    	}

    	else if (allScores[0] != undefined){
    	
    		var scores = [];

		    scores.push(req.body.uscores[0])
		    scores.push(req.body.uscores[1])
		    scores.push(req.body.uscores[2])
		    scores.push(req.body.uscores[3])
		    scores.push(req.body.uscores[4])
		    scores.push(req.body.uscores[5])
		    scores.push(req.body.uscores[6])
		    scores.push(req.body.uscores[7])
		    scores.push(req.body.uscores[8])
		    scores.push(req.body.uscores[9])


	    	console.log(namesndphotos)

	    	curBestFriend = []
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
			//console.log(friends[results.indexOf(minimum)].name)
			//console.log(friends[results.indexOf(minimum)].photo)
			//var bfName = friends[results.indexOf(minimum)].name
			//var bfPhoto = friends[results.indexOf(minimum)].photo
			var bfName = namesndphotos[results.indexOf(minimum)].name
			var bfphoto = namesndphotos[results.indexOf(minimum)].photo
			curBestFriend.push(bfName)
			curBestFriend.push(bfphoto)
			console.log(curBestFriend)
			allScores.push(scores)
			res.json(curBestFriend)
		};

	});
};





