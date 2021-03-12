class Hero{

constructor(x, y, width, height){

    var options = {

        density:2, 
        frictionAir:0.005

}

this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
this.image = loadImage("Superhero-01.png");
World.add(myWorld, this.body);

}

display(){

    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
}

}

