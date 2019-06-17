var on = false;

function Update () {
	if(on)
	{GetComponent.<GUIText>().text = "Press E to open Crypt";}
	else
	{GetComponent.<GUIText>().text = " ";}
}