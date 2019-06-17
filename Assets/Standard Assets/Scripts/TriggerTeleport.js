function OnTriggerEnter(other : Collider) {
    if (other.tag == "Player") {
        other.transform.position.y -= 37;
    }
}