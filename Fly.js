class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 400
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(myWorld, this.rope);
    }
    attach(body){
        this.rope.bodyA = bodyA;
    }
    
    fly(){
        this.rope.bodyA = null;
    }

    display(){
      
        if(this.rope.bodyA){

        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
        noStroke();
        line(pointB.x, pointB.y, pointA.x, pointA.y);
        pop();

        }
        

        }
    }
    
