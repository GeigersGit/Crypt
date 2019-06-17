
function OnTriggerEnter(other : Collider) {
    if (other.tag == "Player") {
    //cameracrap();
    //yield WaitForSeconds(3);
    Application.LoadLevel(2);
    }
}
function cameracrap(){
//var go = GameObject.Find("Camera");
//script = go.GetComponent("FadeInOut");
//script.fadespeed = 2;
//go.SendMessage("fadeOut");

}