var score = 0
class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
    this.visiblity = 0
  }
  Score(){
    if(this.visiblity<0&&this.visiblity>-105){
      score = score+1
      console.log(score)
    }
  }
  display(){
    //text("Score:"+score,50,65) 
    
    if(this.body.speed <3){
      super.display()
    }else{
      World.remove(world,this.body)
      
      push()
      this.visiblity = this.visiblity - 100
      tint(255,this.visiblity)
      image(this.image,this.body.position.x,this.body.position.y,30,40)
      
      pop()
  

    }
  }
};
