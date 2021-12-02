using System;
using System.Collections.Generic;

namespace deck_of_cards
{
    class Deck
    {
        List<Card> card = new List<Card>();
        string[] Suits = {"Heart", "Diamond", "Spade", "Clover"};
        string[] StringVal = {"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"};

        public void createDeck()
        {
            for(int i = 0; i < Suits.Length; i++)
            {
                for(int j = 0; j < StringVal.Length; j++ )
                {
                    Card newCard = new Card( StringVal[j], j + 1, Suits[i] );
                    System.Console.WriteLine($"{newCard.StringVal} of {newCard.Suits} value: {newCard.Val}");
                    card.Add(newCard);
                    // Console.WriteLine($"{StringVal[j]} of {Suits[i]}");
                    // newCard = ($"{StringVal[j]} of {Suits[i]}");
                    // System.Console.WriteLine(makeCard);
                }
            }
        } 
        // deal method
        public  Card deal()
        {
            System.Console.WriteLine(card.Count);
            // System.Console.WriteLine($"Last Card is: {card[card.Count -1]}");
            System.Console.WriteLine($"{card[card.Count - 1].StringVal} of {card[card.Count - 1].Suits} value: {card[card.Count - 1].Val}");
            Card newcard = card[card.Count - 1];
            card.Remove(card[card.Count - 1]);
            return newcard;
        }

        // Reset method
        public void reset()
        {
            // System.Console.WriteLine(card.Count);
            card.Clear();
            // System.Console.WriteLine(card.Count);
            createDeck();
            // System.Console.WriteLine(card.Count);

        }
        //  Shuffle Methode

        public static Random rand = new Random();  
        public void shuffle(){
            for (int i = 0; i < card.Count - 1; i++)
            {
                int j = rand.Next(i, card.Count);
                Card temp = card[i];
                card[i] = card[j];
                card[j] = temp;
                System.Console.WriteLine($"{card[i].StringVal} of {card[i].Suits} value: {card[i].Val}");
            }
        }
    }
}