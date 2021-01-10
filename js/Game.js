/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [new Phrase('What a wonderful world'), new Phrase('A bird in the hand'), new Phrase('A penny saved is a penny earned'), new Phrase('Strike while the iron is hot'), new Phrase('Early to bed early to rise')];
        this.activePhrase = null;
    }
        /**
     * Returns random phrase stored in phrases array
     *  - Using return keyword to call phrases property with a bracket notation of Math random multiplied by the length of the phrases property length, each a new Phrase object
     * @return {phrase} - Random phrase generated from Random Math multiplied by length of phrases array 
     */
    get getRandomPhrase(){
        return this.phrases[parseInt(Math.random() * (this.phrases.length))];
    }
    /**
     * Initializes game by hiding initial start screen and adding random phrase to display
     *  - Selecting overlay element and placing display value to none
     *  - Updating activePhrase property to a call of the getRandomPhrase method
     *  - Calling addPhraseToDisplay method on newly updated activePhrase property
     */
    startGame(){
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase;
        this.activePhrase.addPhraseToDisplay();
    }
    /**
     * Resets game to enable multiple game plays in one session
     *  - Removes previous game's random phrase
     *  - Enables the keys selected in previous game and removes wrong and chosen classes
     *  - Resets score and re-applies life representation hearts
     */
    resetGame(){
        const gamePhrase = document.querySelectorAll('#phrase ul li');
        for (let element of gamePhrase) {
            element.parentNode.removeChild(element);
        }
        const keyboard = document.querySelectorAll('.key');
        for (let key of keyboard){
            key.disabled = false;
            key.classList.remove('wrong','chosen');
        }
        this.missed = 0;
        const tries = document.querySelectorAll('.tries img');
        for (let i = 0; i <tries.length; i++){
            tries[i].src = 'images/liveHeart.png';
        }    
    }
    /**
     * Finalizes game by displaying end of game message based on player results
     *  - Enables display of the overlay screen
     *  - Checks all letter objects comprising the random phrase to determine if they are shown
     *      - If shown, adds winning message to overlay, removes all other classes and adds win class
     *      - If not shown, adds losing message to overlay, removes all other classes and adds lose class
     *  - Finally, resets game by calling reset method to enable player to replay if they desire
     */
    gameOver(){
        document.querySelector('#overlay').style.display = 'block';
        if (this.checkForWin()) {
            document.querySelector('#game-over-message').textContent = 'Congratulations you win! Click Start Game to play again.';
            document.querySelector('#overlay').classList.remove('start', 'lose');
            document.querySelector('#overlay').classList.add('win');
        } else {
          document.querySelector('#game-over-message').textContent = 'Sorry you lose! Click Start Game to play again.';
          document.querySelector('#overlay').classList.remove('start', 'win');  
          document.querySelector('#overlay').classList.add('lose');
        } 
        this.resetGame();
      }
    /**
     * Replaces life token with lost token
     *  - Loops through array of the life tokens
     *  - Updates source of token image based on the number missed, utilizing missed property from this object
     *  - Breaks to ensure only 1 token is updated per call
     *  - If total missed equals 5, calls game over method
     */
    removeLife(){
        const tries = document.querySelectorAll('.tries img');
        for (let i = 0; i < tries.length; i++){
            tries[this.missed].src = 'images/lostHeart.png';
            this.missed += 1;
            break;   
        }
        if (this.missed === 5){
            this.gameOver();
        }
    }
    /**
     * Checks to determine if the player has won the game
     *  - Loops all letter objects comprising the random phrase
     *      - If all the letters of the random phrase contain the show property, win variable returns true
     *      - If not, win returns false
     * @return {Boolean} - win variable returns true or false based on revealed letters 
     */
    checkForWin(){
        let win = false;
        const phraseLetters = document.querySelectorAll('#phrase li.letter');
        for (let letter of phraseLetters){
            if (letter.classList.contains('show')) {
                win = true;
            } else {
                win = false;
                break;
            }
        }
        return win;
    }
    /**
     * Handles the game logic based on user input
     *  - Disables the key object selected by player
     *  - Runs checkLetter method on the key input and determines if there are any matching letters
     *      - If no matching letter found in randomPhrase, adds wrong class and calls removeLife method
     *      - If matching letter(s) found, runds showMatchLetter method from Phrase object
     *          - Supplies innerText value of key input provided to enable on screen and physical keyboard use
     *          - Calls the checkForWin method to see if matching letters finalize the game
     * @param {string} key Accepts key input string value from qwerty gameboard
     */
    handleInteraction(key){
        // const selectedKey = key.target;
        key.disabled = true;
        if (this.activePhrase.checkLetter(key.innerText) === 0) {
            key.classList.add('wrong');
            this.removeLife();
        } else {
            key.classList.add('chosen');
            this.activePhrase.showMatchedLetter(key.innerText);
            if (this.checkForWin()){
                this.gameOver();
            }
        }
    }
    
}
