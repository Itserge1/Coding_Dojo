class Ninja {
    constructor(name, health = 5, speed = 3, stength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = stength;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
    }

    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name, wisdom = 10){
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
    }

    speakWisdom(){
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.showStats();



const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();

