
var queue = [];
var queueSP = 0;
const vazio = "";
const maxQueue = 3;

queue[0] = vazio;
queue[1] = vazio;
queue[2] = vazio;

function updateQueue () {

	document.getElementById("queue1").innerHTML = queue[0];
	document.getElementById("queue2").innerHTML = queue[1];
	document.getElementById("queue3").innerHTML = queue[2];
	hide();
}

function addToQueue( music ) {

	if (queueSP < maxQueue) {
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

function hide(){
	if(document.getElementById("queue1").innerHTML == ""){
		document.getElementById("close1").style.visibility = "hidden";
	}
	else{
		document.getElementById("close1").style.visibility = "visible";
	}

	if(document.getElementById("queue2").innerHTML == ""){
		document.getElementById("moveUp2").style.visibility = "hidden";
		document.getElementById("close2").style.visibility = "hidden";
	}
	else{
		document.getElementById("moveUp2").style.visibility = "visible";
		document.getElementById("close2").style.visibility = "visible";
	}
	if(document.getElementById("queue3").innerHTML == ""){
		document.getElementById("moveUp3").style.visibility = "hidden";
		document.getElementById("close3").style.visibility = "hidden";
	}
	else{
		document.getElementById("moveUp3").style.visibility = "visible";
		document.getElementById("close3").style.visibility = "visible";
	}
}

function introName(){
	var nome = prompt("Username:");
	if(nome!=undefined){ 
		document.getElementById("welcomeMsg").innerHTML = "Welcome "+ nome + "!";
	}

}