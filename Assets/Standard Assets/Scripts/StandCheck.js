
	var go; 
	var script; 
function Start(){
	go = GameObject.Find("Player");
	script = go.GetComponent(SprintController);
}


function OnTriggerEnter(col : Collider) {
	if(col.tag == "Player"){
        script.canstand = false; 
    }
}
function OnTriggerExit(col : Collider){
	if(col.tag == "Player"){
        script.canstand = true;
	}
}