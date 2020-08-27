class Paper{

    constructor(x,y){

        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
            
        }

        this.body = Bodies.circle(x,y,40,options);
        this.radius = 70;
        this.image = loadImage('paper2.png');

        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        strokeWeight(2);
        stroke("blue");
        fill(255);
        image(this.image,0,0,this.radius, this.radius);
        pop();

    }

}