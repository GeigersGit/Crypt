#pragma strict
 
@script RequireComponent(AudioSource)
private var timer = 0.0; 
 var bobbingSpeed = 20.0; 
 var bobbingAmount = 0.2; 
 var midpoint = 2.0;
 private var bPos = true;
 
 function Start(){
 
 Camera.main.SendMessage("fadeIn");
 
 
 }
 
 function Update () { 
    var waveslice = 0.0; 
    var horizontal = Input.GetAxis("Horizontal"); 
    var vertical = Input.GetAxis("Vertical"); 
    var bobbingFactor = Mathf.Sqrt(horizontal * horizontal + vertical * vertical);
    
 
    if (Mathf.Abs(horizontal) == 0 && Mathf.Abs(vertical) == 0) { 
       timer = 0.0; 
    } 
    else { 
       waveslice = Mathf.Sin(timer);
 
       var footfall = Mathf.Cos(timer);
       if (footfall < 0 && bPos)
          GetComponent.<AudioSource>().Play();
 
       bPos = footfall >= 0;
 
       timer = timer + bobbingSpeed * bobbingFactor * Time.deltaTime; 
       if (timer > Mathf.PI * 2) { 
          timer = timer - (Mathf.PI * 2); 
       } 
    } 
    if (waveslice != 0) { 
       var  translateChange = waveslice * bobbingAmount; 
       var totalAxes = Mathf.Abs(horizontal) + Mathf.Abs(vertical); 
       totalAxes = Mathf.Clamp (totalAxes, 0.0, 1.0); 
       translateChange = totalAxes * translateChange; 
       transform.localPosition.y = midpoint + translateChange; 
        } 
    else { 
       transform.localPosition.y = midpoint; 
    } 
    //if(Input.GetKeyDown(KeyCode.LeftShift)&&){
    //	bobbingSpeed = 14;
   // }
   // if(Input.GetKeyUp(KeyCode.LeftShift)){
    //	bobbingSpeed = 10;
   // }
 }