class Slingshot{
    constructor(bodyAObject, pointB){
        var options = {
            bodyA: bodyAObject,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.shooter = Constraint.create(options);
        World.add(world,this.shooter);
    }

    display(){
        if(this.shooter.bodyA){
            var pointA = this.shooter.bodyA.position;
            var pointB = this.pointB;
            stroke("skyblue");
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    attach(body){
        this.shooter.bodyA = body;
    }
    fly(){
        this.shooter.bodyA = null;
    }
}