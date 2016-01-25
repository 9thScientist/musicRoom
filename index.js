
var queue = [];

function updateQueue () {

	document.getElementById("queue1").innerHTML = queue[0];
	document.getElementById("queue2").innerHTML = queue[1];
	document.getElementById("queue3").innerHTML = queue[2];
}

function addToQueue( music ) {

	if (queue.length < 3) {
		queue.push(music);	
		updateQueue();
	}	
}

function queueSwapUp ( oid ) {

	var tmp = queue[oid];
	
	if (oid > 0) {
		queue[oid] = queue[oid-1];
		queue[oid-1] = tmp;
	}

	updateQueue();
}
