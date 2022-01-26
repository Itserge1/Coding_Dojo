using System;
using System.Collections.Generic;

namespace human
{
    class Wizard : Human
    {
        public Wizard(string name) : base(name)
        {
            setHealth(50);
            Intelligence = 25; 
        }
        // Build Attack Method
        public override int Attack(Human target)
        {
            int newHealth = target.getHealth;
            newHealth = newHealth - (5 * Intelligence);
            target.setHealth(newHealth);
            int newHealth2 = getHealth;
            newHealth2 = newHealth2 + (5 * Intelligence);
            setHealth(newHealth2);
            System.Console.WriteLine($"{Name} attak {target.Name} and did {Intelligence * 5} damage. {Name} recieved {Intelligence * 5} off hp,{Name} current hp is {getHealth} and {target.Name} current hp is {target.getHealth} ");
            return target.getHealth;
        }
    }

}
