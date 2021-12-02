using System;
using System.Collections.Generic;

namespace deck_of_cards
{
    class Card
    {
        public string StringVal;
        public int  Val;
        public string Suits;

        public Card(string stringVal, int val, string suits)
        {
            StringVal = stringVal;
            Val = val;
            Suits = suits;
            // Console.WriteLine("hello from Card.cs");
        }
        public void Print()
        {
            Console.WriteLine($"{StringVal} of {Suits}: {Val}");
        }

    }
}