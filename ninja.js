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
const ninja1 = new Ninja("Hyabusa",200);
ninja1.sayName();
ninja1.showStats();