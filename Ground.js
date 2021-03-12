class Ground{
  constructor(x,y,width,height){
    var options ={ isStatic: true}
    
    this.body =  Bodies.rectangle(x,y,width,height,options);
    World.add(myWorld,this.body);
    this.width = width;
    this.height = height;
    
  }
  show()
  {
      var pos = this.body.position;
      noStroke();
      fill("white");
      rectMode(CENTER);
      rect(pos.x, pos.y,this.width, this.height);
  }


}