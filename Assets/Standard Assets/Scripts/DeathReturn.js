#pragma strict

function Start () {
	returntomenu();
}

function Update () {

}
function returntomenu(){
yield WaitForSeconds(7);
Application.LoadLevel(0);
}

