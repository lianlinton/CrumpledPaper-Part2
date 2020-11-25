class paper
{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.radius=radius
		this.body=Bodies.circle(this.x, this.y, this.radius/2 - 12, options)
		World.add(world, this.body);

		this.image = loadImage("paper.png");


	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			strokeWeight(3);
			//fill(255,0,255)
			//ellipse(0,0,this.radius, this.radius);
			image(this.image, 0 , 0, this.radius, this.radius);
			pop()
			
	}

}