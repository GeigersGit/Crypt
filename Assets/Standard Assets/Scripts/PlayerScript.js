#pragma strict

function Start () {

}	


function DidLockCursor ()
 
{Debug.Log("Locking cursor");        
GetComponent.<GUITexture>().enabled = false;}
Screen.lockCursor = false;

function DidUnlockCursor () 
{Debug.Log("Unlocking cursor");    
GetComponent.<GUITexture>().enabled = true;}

function OnMouseDown () 
{Screen.lockCursor = true;}

private var wasLocked = false;

function Update () 
{if (Input.GetKeyDown ("escape"))        
Screen.lockCursor = false;
 Screen.lockCursor = false;    
 if (!Screen.lockCursor && wasLocked) 
 {        wasLocked = false;        DidUnlockCursor();    }
 else if (Screen.lockCursor && !wasLocked) 
 {        wasLocked = true;        DidLockCursor ();    }}