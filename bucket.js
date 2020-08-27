class Bucket{

    constructor(x,y,width,height){

        var options={
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        push();
        rectMode(CENTER);
        rotate(this.body.angle)
        fill(255);
        rect(pos.x,pos.y,this.width,this.height);
        pop();

    }

}