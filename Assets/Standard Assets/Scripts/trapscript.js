function OnTriggerEnter(other : Collider) {
    if (other.tag == "Player") {
    var go = GameObject.Find("Trap");
    go.transform.position.y += .5;
    go.transform.position.y += .5;
    go.transform.position.y += .5;
    go.transform.position.y += .5;
    go.transform.position.y += .5;
    go.transform.position.y += .5;
    go.transform.position.y += .5;
    go.transform.position.y += .5;
    go.transform.position.y += .5;
    go.transform.position.y += .5;
    }
}
