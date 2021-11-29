using System;
using System.Collections.Generic;

namespace collections_practice
{
    class Program
    {
        static void Main(string[] args)
        {
            // Three Basic Arrays
            int[] numArray = new int[] {0,1,2,3,4,5,6,7,8,9};
            string[] worldArray = new string[] {"Tim", "Martin", "Nikki", "Sara"};
            bool[] boolArray = new bool[] {true, false, true, false, true, false, true, false, true, false};
            Console.WriteLine($"The first num of the array is {numArray[0]}");

            // List of Flavors
            List<String> flavorsList = new List<String>();
            flavorsList.Add("Vanila");
            flavorsList.Add("Chocolate");
            flavorsList.Add("Butter Pecan");
            flavorsList.Add("Eskimo");
            flavorsList.Add("Strawberry");
            Console.WriteLine(flavorsList.Count);
            Console.WriteLine(flavorsList[2]);
            flavorsList.Remove("Butter Pecan");
            Console.WriteLine(flavorsList.Count);
            // Console.WriteLine(flavorsList[1]);
            // Console.WriteLine($"There are a total of {flavorsList.Count} flavors and my favorite flavor is {flavorsList[3]}");

            // User info Dictionary
            Random rand = new Random();
            Dictionary<string,string> dictionary = new Dictionary<string, string>();
            for (int i =0; i < worldArray.Length; i++ )
            {
                dictionary.Add(worldArray[i], flavorsList[rand.Next(flavorsList.Count)]);
            }
            foreach (KeyValuePair<string,string> entry in dictionary)
            {
                Console.WriteLine(entry.Key + " - " + entry.Value);
            }
        }
    }
}
