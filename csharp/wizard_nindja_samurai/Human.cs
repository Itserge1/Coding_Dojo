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
            Ninja grey = new Ninja("grey");
            Wizard jhon = new Wizard("jhon");
            System.Console.WriteLine($"{jhon.Name} health is {jhon.getHealth} , int {jhon.Intelligence}");
            Samurai shuan = new Samurai("shuan");
            System.Console.WriteLine($"samurai hp is {shuan.getHealth}");
            jhon.Attack(shuan);
            System.Console.WriteLine($"ninja with dex {grey.Dexterity}");
            grey.Attack(shuan);
            System.Console.WriteLine($"ninja with dex {grey.Dexterity} attak {shuan.Name}. {shuan.Name}'s hp is {shuan.getHealth}");
            shuan.Attack(jhon);
            System.Console.WriteLine($"shuan  Attak {jhon.Name}. {jhon.Name}'s hp is {jhon.getHealth}");
            shuan.Attack(grey);
            System.Console.WriteLine($"shuan  Attak {grey.Name}. {grey.Name}'s hp is {grey.getHealth}");
            jhon.Heal(jhon);
            jhon.Heal(shuan);
            shuan.Meditate();
            grey.Steal(shuan);
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
        public virtual int Attack(Human target)
        {
            target.Health = target.Health - (5 * Strength);
            Console.WriteLine(target.getHealth);
            return target.getHealth;
        }
        public void setHealth(int health)
        {
            Health = health;
        }
    }
}
