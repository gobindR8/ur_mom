class BaseClass{
   constructor(x,y,r){
var options={
'isStatic':false,
'restitution':0.3,
'friction':0,
'density':1.2
}
this.x=x
this.y=y
this.width=width
this.height=height
this.body=Bodies.circle(this.x,this.y,this.r/2,options)

this.image=loadImage("sprites/base.png")

World.add(world,this.body)
   }
    display(){
var pos=this.body.position

push()
translate(pos.x,pos.y)
imageMode(RADIANS)
image(this.image,0,0,this.r,this.r)


    }



  }