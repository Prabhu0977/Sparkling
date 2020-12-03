class obst{
    constructor(x,y,w,h,a){
      var op={
          isStatic:true,
          friction:0,
          restitution:0.5,
          angle:a
      }  
      
      this.body = Bodies.rectangle(x,y,w,h,op);
      this.w=w;
      this.h=h;
      World.add(world,this.body);

      this.show = function() {
        var pos = this.body.position;
        var al = this.body.angle;
        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(al);
        rectMode(CENTER); 
        rect(0,0,this.w,this.h);
        pop();
      }
    }
}