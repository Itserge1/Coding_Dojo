using System;
using System.Collections.Generic;

namespace human
{
    class Program
    {
        static void Main(string[] args)
        {
            Human george = new Human("george");
            Human Rene = new Human("Rene");
            george.Attack(Rene);
        }
    }
    class Human
    {
        // Fields for Human
        public string Name;
        public int Strength;
        public int Intelligence;
        public int Dexterity;
        private int Health;

        // add a public "getter" property to access health
        public int getHealth{
            get{
                return Health;
            }
        }

        // Add a constructor that takes a value to set Name, and set the remaining fields to default values
        public Human(string name)
        {
            Name = name;
            Strength = 3;
            Intelligence = 3;
            Dexterity = 3;
            Health = 100;
        }

        // Add a constructor to assign custom values to all fields
        public Human(string name, int strength, int intelligence, int dexterity, int health)
        {
            Name = name;
            Strength = strength;
            Intelligence = intelligence;
            Dexterity = dexterity;
            Health = health;
        }

        // Build Attack method
        public int Attack(Human target)
        {
            target.Health = target.Health - (5 * Strength);
            Console.WriteLine(target.getHealth);
            return target.getHealth;
        }
    }
}



