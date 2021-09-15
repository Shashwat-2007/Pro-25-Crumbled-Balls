class Paper {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:0.3,
          density:1.2,
          friction:0
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r= r;
     // this.height = height;
      this.img=loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push ()
      translate (pos.x,pos.y)
    imageMode(CENTER);
      fill("brown");
      image(this.img,0, 0, this.r, this.r);
      pop ()
    }
  };
