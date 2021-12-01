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
            int victimHealth = target.getHealth;
            victimHealth= victimHealth- (5 * Intelligence);
            target.setHealth(victimHealth);

            int attkerHealth = getHealth;
            attkerHealth = attkerHealth + (5 * Intelligence);
            System.Console.WriteLine($"{Name} attak {target.Name} and did {Intelligence * 5} damage. {Name} recieved {Intelligence * 5} off hp,{Name} current hp is {attkerHealth} and {target.Name} current hp is {victimHealth} ");
            return target.getHealth;
        }
        // Build Heal Method
        public int Heal(Human target)
        {
            int victimHealth = target.getHealth;
            victimHealth= victimHealth + (10 * Intelligence);
            target.setHealth(victimHealth);
            System.Console.WriteLine($"{Name} heal {target.Name} and did {Intelligence * 10} heal. {target.Name} recieved {Intelligence * 10} off hp,{target.Name} current hp is {victimHealth} ");
            return target.getHealth;
        }
    }

}
