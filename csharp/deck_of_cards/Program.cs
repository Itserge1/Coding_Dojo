using System;
using System.Collections.Generic;


namespace deck_of_cards
{
    class Program
    {
        static void Main(string[] args)
        {
            Deck fistDeck = new Deck();
            fistDeck.createDeck();
            // fistDeck.deal();
            // // fistDeck.reset();
            // System.Console.WriteLine("****************************");
            // fistDeck.shuffle();
            Player joma = new Player("joma");
            joma.draw(fistDeck);
            joma.discards(0);
            // Card text = new Card("Ace", 1,"Spades");
            // text.Print();
            // System.Console.WriteLine(createDeck());
        }
    }
}
