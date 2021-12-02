using System;
using System.Collections.Generic;

namespace deck_of_cards
{
    class Player
    {
        public string Name;

        public Player(string name)
        {
            Name = name;
        }
        List<Card> hand = new List<Card>();

        // Dranw
        public static Random rand = new Random();
        public Card draw(Deck deck)
        {
            Card newcard = deck.deal();
            hand.Add(newcard);
            System.Console.WriteLine();
            System.Console.WriteLine($"{newcard.StringVal} of {newcard.Suits} value: {newcard.Val}");
            return newcard;
        }
        // Discard 
        public Card discards(int num)
        {
            if ( num > hand.Count - 1 || num < 0) {
                return null;
            }
            else{
                System.Console.WriteLine($"{hand[num].StringVal} of {hand[num].Suits} value: {hand[num].Val}");
                Card rmcard =  hand[num];
                hand.Remove(hand[num]);
                return rmcard;
            }
        }
    }
}