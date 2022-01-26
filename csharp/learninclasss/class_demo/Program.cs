using System;


//Make sure to include the Vehicle class separate from the Program class
public class Vehicle
{
    //Accessibility of class members is defaulted to private
    //so we must add the public keyword to anything we
    //want to allow outside access to.
    // this unassigned integer will default to 0
    public int NumPassengers;
    // Creating a constructor function
    public Vehicle()
    // public Vehicle(int val)
    {
        NumPassengers = 5;
        // NumPassengers = val;
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        // Notice the type for the new object reference
        // is the same as the class name
        // This creates a new instance of the class Vehicle define above
        Vehicle myVehicle = new Vehicle();
        Console.WriteLine($"My vehicle is holding {myVehicle.NumPassengers} people");

        //Adding a value to the object; then passes it to the constructor
        // Vehicle myVehicle = new Vehicle(7);
        // Console.WriteLine($"My vehicle is holding {myVehicle.NumPassengers} people");

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
    public string getHealth{
        get{
            return health;
        }
    }

    // Add a constructor that takes a value to set Name, and set the remaining fields to default values
    public void human(string name)
    {
        string Name = name;
        string Strength = 3;
        string Intelligence = 3;
        string Dexterity = 3;
        string Health = 100;
    }

    // Add a constructor to assign custom values to all fields
    public void human(string name, int strengh, int intelligence, int dexterity, int health)
    {
        string Name = name;
        string Strength = Strength;
        string Intelligence = intelligence;
        string Dexterity = dexterity;
        string Health = health;
    }

    // Build Attack method
    public int Attack(Human target, Human attacker)
    {
        target.Health = target.Health - (5 * attacker.Strength);
        return target.Health;
    }
}