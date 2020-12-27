class Division{
    constructor(x , y , width , height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x , y , 10 , 20, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(247,107,14);
        rect(pos.x,pos.y,this.width,this.height);
    }
};