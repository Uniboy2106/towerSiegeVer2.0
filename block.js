class Block{
  constructor(x, y, width, height) {
    var options = {
                     
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.Visibility = 255;
    this.image = loadImage("block.png");
  }
    display(){
    var angle = this.body.angle;
     var pos= this.body.position;
     console.log(this.body.speed);

     if(this.body.speed < 3){
       imageMode(CENTER);
       image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
     }
     else{
      tint(255,this.Visibility);
      this.Visibility = this.Visibility - 5;
      World.remove(world, this.body);
     }

     push();
     translate(pos.x, pos.y);
     rotate(angle);
     rectMode(CENTER);
     rect(0,0,this.width, this.height);
     pop();
    }
}
