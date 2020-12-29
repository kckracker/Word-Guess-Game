/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    /**
     * Method to add generated phrase to game display
     */
    addPhraseToDisplay(){
        for (let letter of this.phrase.split("")) {
            if (letter !== ' '){
                letter.innerHTML =  `<li class="hide letter ${letter}">${letter}</li>`;
            } else {
                letter.innerHTML = `<li class="space"> </li>`;
            }
        }
    }
    /**
     * 
     * @param {Boolean} key - Returns true if player key selection matches letter in phrase, else returns false  
     */
    checkLetter(key){
        for (let letter of this.phrase.split("")){
            return key = letter;
        }
    }
    /**
     * Reveals matched letters in the phrase display 
     */
    showMatchedLetter(){

    }
}