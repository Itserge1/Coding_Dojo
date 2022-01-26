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
        // public override int Attack(Human target)
        // {
        //     target.Health = target.Health - (5 * Dexterity);
        //     Console.WriteLine(target.Health);
        //     return target.Health;
        // }
    }

}
