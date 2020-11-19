class Ball
{
    constructor(x,y,radius)
    {
        var options = {
            "restitution":0.1,
            "friction":0.5,
            'density':1.7,
            
        }
       this.body = Bodies.circle(x,y,radius/2,options);
       this.radius = radius;
       World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        push();
        strokeWeight(2);
        stroke("black")
        fill("red");
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop();
    
    }

    
 
}


 