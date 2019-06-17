#pragma strict
var barlength = .2;
	var bar:Camera; 
	var tired = false;


function Update () {
	var go = GameObject.Find("Player");
	var script = go.GetComponent(CharacterMotor);
	if(script.sprinting == true && barlength > .001 && !tired)barlength -= .001;
	if(script.sprinting == false && barlength < .2 && !tired)barlength += .0005;
	if(barlength < .002) exhausted();
	
	
	
	bar.rect = Rect(.1,.1,barlength,.01);
}
function exhausted()
{
	var go = GameObject.Find("Player");
	var script = go.GetComponent(CharacterMotor);
	tired = true;
	script.cansprint = false;
	yield WaitForSeconds(2);
	tired = false;
	yield WaitForSeconds(2);
	script.cansprint = true;	
}
