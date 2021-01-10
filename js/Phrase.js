/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    /**
     * Method to add generated phrase to game display
     *  - Adding ul element to variable for easier reference in supplying child phrase
     *  - Looping through the phrase using split method to breakdown each character
     *      - If character is not a space
     *          -- creates a new li element
     *          -- adds innerHTML based on example supplied in project in example_phrase_html.txt file, utilizing template literal to inform the character based on iteraation of phrase
     *          -- appends newly created li element to previously generated variable storing ul element parent 
     */
    addPhraseToDisplay(){
        const phraseDisplay = document.querySelector('#phrase ul');
        for (let letter of this.phrase.split("")) {
            if (letter !== ' '){
                let newLetter = document.createElement('li');
                newLetter.innerHTML =  `<li class="hide letter ${letter}">${letter}</li>`;
                phraseDisplay.appendChild(newLetter);
            } else {
                let newSpace = document.createElement('li');
                newSpace.innerHTML = `<li class="space"> </li>`;
                phraseDisplay.appendChild(newSpace);
            }   
        }
    }
    /**
     * Checks phrase object to determine if the letter supplied matches any letters in the phrase
     *  - Generates variable to hold count of matching letters, starting at 0
     *  - Loops through the phrase object to compare letter supplied with letters of the phrase
     *      - If the letter supplied matches a letter in the phrase, match variable is incremented
     *  - Returns match variable total
     * @param {letter} letter - represents the key input supplied by player, either from physical keyboard or on-screen
     * @return {number} match - Returns total number of matching letters found based on letter input received from player 
     */
    checkLetter(letter){
        let match = 0;
        for (let key of this.phrase){
            if (key === letter) {
                match += 1;
            }
        }
        return match;
    }
    /**
     * Reveals matched letters in the phrase display
     *  - Created match variable to determine all li elements containing the class name matching letter value
     *  - Looping over all match elements
     *      -- removing hide class 
     *      -- adding show class
     * @param {letter} letter - Receives letter value of key input supplied by player
     */
    showMatchedLetter(letter){
        const match = document.querySelectorAll(`.${letter}`);
        for (let each of match){
            each.classList.remove('hide');
            each.classList.add('show');
        }    
    }
}