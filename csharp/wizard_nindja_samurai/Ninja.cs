using System;
using System.Collections.Generic;

namespace human
{
    class Ninja : Human
    {
        public Ninja(string name) : base(name)
        {
            Dexterity = 175;
        }
        // Build Attack Method
        public override int Attack(Human target)
        {
            Random rand = new Random();
            int victimHealth = target.getHealth;
            if (rand.Next(5) == 0){
                victimHealth = victimHealth - ((5 * Dexterity) + 10);
                target.setHealth(victimHealth);
                Console.WriteLine(target.getHealth);
                return target.getHealth;
            }
            else{
                victimHealth = victimHealth - (5 * Dexterity);
                target.setHealth(victimHealth);
                Console.WriteLine(target.getHealth);
                return target.getHealth;
            }
        }
        // Build Steal Method
        public int Steal(Human target)
        {
            int victimHealth = target.getHealth;
            victimHealth = victimHealth - 5;
            target.setHealth(victimHealth);
            int attkerHealth = getHealth;
            attkerHealth = attkerHealth + 5;
            setHealth(attkerHealth);
            System.Console.WriteLine($"{Name} steal from {target.Name} and heal, new hp {getHealth}");
            return getHealth;
        }
    }

}
