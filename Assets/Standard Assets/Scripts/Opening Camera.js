#pragma strict
var t:float;
var PE:GameObject;
var PE2:GameObject;

function Start () {
t = 0;
Camera.main.SendMessage("fadeIn");
}

function Update () {
	if (t>=48)
	{Stop();
	}else Move();
}
function Move () {
	transform.position.z += .075;
	t = t + .075;
}
function Stop(){
	PE.GetComponent.<ParticleEmitter>().emit = true;  
	PE2.GetComponent.<ParticleEmitter>().emit = true;
	
	yield WaitForSeconds(20); 
}