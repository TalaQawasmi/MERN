class Ninja{
    constructor(name, health, speed= 3, strength= 3){
    this.name= name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
    }
    sayName() {
        console.log(this.name);
    }
    drinkSake(){
        this.health += 10;
    }
    showStats(){
        console.log(this.name,this.health,this.speed,this.strength);
    }
    
}
// const ninja1 = new Ninja("Hyabusa",200);
// ninja1.sayName();
// ninja1.showStats();

class Sensei extends Ninja{
    constructor(name, wisdome){
        super(name, 200, 10, 10)
            this.wisdome = 10;
        
    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
    showStats(){

        console.log(this.name, this.health, this.speed, this.strength)
    }
}


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();