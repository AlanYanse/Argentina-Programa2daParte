

function sombreroLog(target : Function){
  console.log(target);
}

@sombreroLog
class Tester{

  constructor(){
    
    console.log("Cual es el coyete de esto?");
  }
}
