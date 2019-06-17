#pragma strict
var on = true;
function Start () {

}

function Update () {
	if (Input.GetMouseButtonUp(0))
	{
		if (on == true)on = false;
		else on = true;
	}
	
	if (on == false)GetComponent.<Light>().intensity = 0;
	else GetComponent.<Light>().intensity = 1;
}