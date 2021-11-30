using System;
using System.Collections.Generic;

namespace puzzles
{
    class Program
    {
        static void Main(string[] args)
        {
            // arrayWithrandomnum();
            // Console.WriteLine(flipCoin());
            // TossMultipleCoins(3);
            Names();
        }
        public static void arrayWithrandomnum(){
            // Random Array
            Random rand = new Random();
            int[] numArray = new int[10];
            for(int i = 0 ; i < 10; i++)
            {
                numArray[i] = rand.Next(5,25);
            }
            // To see value in Array
            foreach (int num in numArray)
            {
                Console.WriteLine(num);
            }
            // Min and Max
            int max = 0;
            int min = numArray[0];
            int sum = 0;
            for (int j=0 ; j < numArray.Length; j++)
            {
                // find Max
                if(numArray[j] > max)
                {
                    max = numArray[j];
                }
                // find Min
                if(numArray[j] < min)
                {
                    min = numArray[j];
                }
                // Get Sum
                sum += numArray[j];
            }
            Console.WriteLine(numArray);
            Console.WriteLine($"The maximum number is {max}");
            Console.WriteLine($"The minimum number is {min}");
            Console.WriteLine($"The sum of all value in the array is {sum}");
        }
        public static string flipCoin(){
            Random rand = new Random();
            int num = rand.Next(0,2);
            Console.WriteLine("Tossing a Coin");
            // Get num
            // Console.WriteLine(num);
            if(num == 1){
                string result = "Heads";
                Console.WriteLine(result);
                return result;
            }
            else{
                string result = "Tails";
                Console.WriteLine(result);
                return result;
            }
        }
        public static void TossMultipleCoins(int num){
            int count = 0;
            for (int i = 0; i < num; i++){
                if ( flipCoin() == "Heads"){
                    count++;
                }
            }
            Console.WriteLine(count);
            double myDouble = ((float)count / (float)num);
            Console.WriteLine(myDouble);
        }
        public static void Names(){
            Random rand = new Random();
            List<string> listname = new List<string>();
            listname.Add("Todd");
            listname.Add("Tiffany");
            listname.Add("Charlie");
            listname.Add("Geneva");
            listname.Add("Sydney");

            // List Names Display
            Console.WriteLine("List Names:");
            foreach(string name in listname){
                Console.WriteLine(name);
            }

            // Shuffle Names
            for (int i = listname.Count - 1; i > 0; i--)
            {
                int swapIndex = rand.Next(i + 1);
                string temp = listname[i];
                listname[i] = listname[swapIndex];
                listname[swapIndex] = temp;
            }

            // Shuffle Names Display
            Console.WriteLine("Shuffle Names:");
            foreach(string name in listname){
                Console.WriteLine(name);
            }

            // Name longer than 5
            for (int i = listname.Count - 1; i > 0; i--)
            {
                if(listname[i].Length < 5){
                    listname.Remove(listname[i]);
                }
            }

            // Name longer than 5 Display
            Console.WriteLine("Names longer than 5 Display:");
            foreach(string name in listname){
                Console.WriteLine(name);
            }

            Console.WriteLine(listname);
        }
    }
}
