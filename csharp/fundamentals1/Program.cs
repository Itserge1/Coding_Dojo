using System;

namespace fundamentals1
{
    class Program
    {
        static void Main(string[] args)
        {
            // num 1 to 225
            Console.WriteLine("++++++++++++++++++++++++++++++++++");
            for(int i=1; i < 256; i++){
                Console.WriteLine(i);
            }

            int k = 1;
            while( k < 226){
                Console.WriteLine(k);
                k++;
            }

            // Fizz buzz and FizzBuzz
            Console.WriteLine("++++++++++++++++++++++++++++++++++");
            int j = 1;
            while( j < 101){
                if(j % 3 == 0 && j % 5 == 0){
                    Console.WriteLine("FizzBuzz");
                }
                else if(j % 3 ==0 ){
                    Console.WriteLine("fizz");
                }
                else if(j % 5 ==0){
                    Console.WriteLine("Buzz");
                }
                j++;
            }

            // Fizz buzz and FizzBuzz
            Console.WriteLine("++++++++++++++++++++++++++++++++++");
            for(int i=1; i<101; i++){
                if(i % 3 == 0 && i % 5 == 0){
                    Console.WriteLine("FizzBuzz");
                }
                else if(i % 3 ==0 ){
                    Console.WriteLine("fizz");
                }
                else if(i % 5 ==0){
                    Console.WriteLine("Buzz");
                }
            }
        }
    }
}
