function OnTriggerEnter(other : Collider) {
    if (other.tag == "Player") {
       // go = GameObject.Find("OpenText");
        //script = go.GetComponent("opentextscript");
       // script.on = true;
        //if(Input.GetKeyDown(KeyCode.E)){
        //	Open();
        //}
        var go = GameObject.Find("triggerpallet");
		go.GetComponent.<Rigidbody>().useGravity = true;
    }
}
function OnTriggerExit(other:Collider) {
if (other.tag == "Player") {
        go = GameObject.Find("OpenText");
        script = go.GetComponent("opentextscript");
        script.on = false;
    }
}
function Open(){




}