using System;
using System.Collections.Generic;

namespace human
{
    class Samurai : Human
    {
        public Samurai(string name) : base(name)
        {
            setHealth(200);
        }
        // Build Attack Method
        public override int Attack(Human target)
        {
            base.Attack(target);
            if (target.getHealth <= 50)
            {
                setHealth(0);
            }
            return target.getHealth;

            // target.Health = target.Health - (5 * Strength);
            // Console.WriteLine(target.getHealth);
            // return target.getHealth;
        }
        // Build Meditate Method
        public int Meditate()
        {
            int newHealth = 200;
            setHealth(newHealth);
            System.Console.WriteLine($"{Name} Meditate and have a new hp of {getHealth}");
            return getHealth;
        }
    }

}
