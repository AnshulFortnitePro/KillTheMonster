class Monster{

    constructor(x, y, width, height){
    
        var options = {
    
            isStatic: false,
            'density':1, 
            'friction':0.3,
            'restitution': 0.5
    
    }
    
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
    this.image = loadImage("Monster-01.png");
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