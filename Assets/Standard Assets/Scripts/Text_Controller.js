var isQuitButton = false;
var isPlayButton = false;


var on = false;
var on2 = false;
function Start()
{
	
}

function OnMouseEnter()
{
	//renderer.material.color = Color.red;
}

function OnMouseExit()
{
	//renderer.material.color = Color.black;
}

function OnMouseUp()
{
	var go = GameObject.Find("Camera");
	if ( isQuitButton )
	{
		go.SendMessage("fadeOut");
		go.SendMessage("audiofadeout");
		Application.Quit();
	}
	else
	
	if ( isPlayButton )
	{	
		go.SendMessage("fadeOut");
		go.SendMessage("audiofadeout");
		yield WaitForSeconds(3);
		PlayGame();
	}

}
function PlayGame()
{
	
	Application.LoadLevel(1);
	
}
