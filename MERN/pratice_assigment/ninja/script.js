class Ninja {
    constructor(name, health = 5){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3
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

const ninja1 = new Ninja("Hyabusa", 40);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
