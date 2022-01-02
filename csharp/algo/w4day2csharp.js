// Tries

// Trie Node
class TrieNode {
    constructor(val) {
        // This value is a single letter
        this.val = val;
        this.isWord = false;
        // children
        this.children = new Array(26).fill(null);
        // [null, null, null, null, null, null, null, null,...]
        //   0    1      2     3     4     5     6     7 
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode("");
    }
    // Add a word to our trie
    add(word) {
        // Start at our root
        let runner = this.root;
        // safety check, make sure all my letters are lowercase
        word = word.toLowerCase();
        // I need to go through my letters and find or add each of them in individually
        // Step one: loop through my word
        for (let letter = 0; letter < word.length; letter++) {
            // My children are built on an array that is structured to keep all my letters in alphabetical order
            // So, for example, "c" would be located at index 2
            // So if I look at children[2] I would expect to see either TrieNode(c) OR null
            // First: identify where the letter SHOULD be
            let index = word[letter].charCodeAt(0) - 97;
            // console.log(index);
            // Second: find out if anything is at that location
            if (runner.children[index] == null) {
                // If it is equal to null, nothing is there, which means I need to add the value in
                console.log(`The letter ${word[letter]} was not present. Adding new trieNode now`);
                runner.children[index] = new TrieNode(word[letter]);
            }
            // Third: I want to move down to that letter in the child array
            runner = runner.children[index];
        }

        runner.isWord = true;
        console.log(`${word} was added successfully`);
    }

    // Trie Contains
    // Given a string, return true or false whether that string exists in the trie
    find(word) {
        if (word.length == 0) {
            return false
        }
        // Start at our root
        let runner = this.root;
        // safety check, make sure all my letters are lowercase
        word = word.toLowerCase();
        // I need to go through my letters and find or add each of them in individually
        // Step one: loop through my word
        for (let letter = 0; letter < word.length; letter++) {
            // My children are built on an array that is structured to keep all my letters in alphabetical order
            // So, for example, "c" would be located at index 2
            // So if I look at children[2] I would expect to see either TrieNode(c) OR null
            // First: identify where the letter SHOULD be
            let index = word[letter].charCodeAt(0) - 97;
            // console.log(index);
            // Second: find out if anything is at that location
            if (runner.children[index] == null) {
                // If it is equal to null, nothing is there, which means I need to add the value in
                console.log(`The Word ${word} was not found`);
                return false
            }
            console.log(`The letter ${word[letter]} was  found`);
            runner = runner.children[index];
        }
        if (runner.isWord) {
            console.log(`The word ${word} was  found`);
            return true
        }
        return false
    }
    // Autocomplete
    // Alright we've come to the final challenge with tries! The autocomplete! We can add words and confirm what words are in our trie, 
    // now write a function that, given a starter bit of letters, returns all words down that particular branch
    // Ex, say we have a trie that has the words "car", "cat", "dog", carrot", "saw", and "can"
    // if we ran autocomplete("ca"), we would expect back an array with ["car", "cat", "carrot", "can"]
    // if we ran autocomplete("car") we would expect back an array with ["car","carrot"] - NOT cat and can, because they don't start with "car"
    // Hint: you might have the best luck with this one using our old friend recursion
    autocomplete(str) {
        arr = [];
        runner = this.root;
        str = str.toLowerCase();
        strings = ""
        for (var i = 0; i < str.length; i++) {
            let index = str[i].charCodeAt(0) - 97;
            if (runner.children[index] == null) {
                return null
            }
            else {
                runner = runner.children[index]
                strings += runner.val
            }
        }
    }
    // helper(Trie node) {
    //     foreach(child in node)
    // }



    // anna solution with ta Shanw

    autocomplete(start) {
        if (start.length < 1) {
            return "Pass an argument";
        }
        let runner = this.root;
        start = start.toLowerCase();
        for (let i = 0; i < start.length; i++) {
            let index = start[i].charCodeAt(0) - 97;
            if (runner.children[index] == null) {
                return [];
            }
            runner = runner.children[index];
        }
        let arrayOfWords = [];
        this.collect(runner, arrayOfWords, start)
        return arrayOfWords
    }

    collect(node, arrayOfWords, start) {
        if (node.isWord) {
            arrayOfWords.push(start)
        }
        for (let i = 0; i < node.children.length; i++) {
            if (node.children[i] != null) {
                this.collect(node.children[i], arrayOfWords, start + node.children[i].val)
            }
        }
    }
}


var myTrie = new Trie();
myTrie.add("CAR");
// myTrie.add("CAT");
// myTrie.add("APPLE");
// myTrie.add("APE");

// var myNode = new TrieNode("c");
// console.log(myNode)
// myTrie.find("CAR");
// myTrie.find("CAT");
// myTrie.find("APPLE");
// myTrie.find("APE");
console.log(myTrie.find("CA"));
