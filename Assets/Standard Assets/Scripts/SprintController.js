	var go;
	var script;
	
	var controller : CharacterController;
	controller = GetComponent(CharacterController);
	var crouched = false;
	var canstand = true;
	var totalhight:float = 0;
	var pressed;
	var pressed2;
	
	
	
function Start (){
	go2 = GameObject.Find("Lantern");
	go = GameObject.Find("Player");
	script = go.GetComponent(CharacterMotor);
	go.SendMessage("audiofadein");
	go2.SendMessage("audiofadein");
	var canstand = true;

}
	
function Update (){
	
	if(Input.GetKeyUp(KeyCode.C)&& pressed) pressed2 = true;
	if(Input.GetKeyDown(KeyCode.C)&& crouched && canstand)pressed = true;
	if(pressed2 && crouched && canstand){
		
		if(totalhight == 4){
			controller.height = 7.0;
			crouched = false;
			totalhight = 0;
			pressed = false;
			pressed2 = false;
		}
		else Standup();
		
	
	}

	if (Input.GetKeyDown(KeyCode.C)&& !crouched){
		controller.height = 2.0;
		crouched = true;
		}
}



function Standup(){

transform.position.y = transform.position.y + .5;
totalhight = totalhight + .5;
yield WaitForSeconds(.2);
}