function audiofadeout()
{
    var t = 1.0;
    for (var i = 9; i > 0; i--)
    {
          GetComponent.<AudioSource>().volume = i * .1;
          yield new WaitForSeconds (.25);
    }GetComponent.<AudioSource>().volume = 0;
}
//function audiofadein(){
	//for (var i = 0; i > 9; i++)
	//{
	//	audio.volume = i * .1;
		
	//	yield new WaitForSeconds (.5);
	//}audio.volume = 1;


//}
function audiofadein()
{
    var t = 0.0;
    while (t < 1.0) {
        t += Time.deltaTime * .3 ;
        GetComponent.<AudioSource>().volume = t;
        yield;
    }
}