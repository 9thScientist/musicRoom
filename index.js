
var queue = [];
var queueSP = 0;
const vazio = "";

queue[0] = vazio;
queue[1] = vazio;
queue[2] = vazio;

function updateQueue () {

	document.getElementById("queue1").innerHTML = queue[0];
	document.getElementById("queue2").innerHTML = queue[1];
	document.getElementById("queue3").innerHTML = queue[2];
}

function addToQueue( music ) {

	if (queueSP < 3) {
		queue[queueSP]=music;	
		queueSP++;
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

function deQueue (id) {
	
	queue.splice( id, 1);
	queueSP--;
	queue[2] = vazio;
	updateQueue ();
}
