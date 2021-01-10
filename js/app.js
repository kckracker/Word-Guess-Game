/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Creating variables to store a new Game object and all elements with the key class name
const newGame = new Game;
const keyboard = document.querySelectorAll('.key');
// Adding click event listener on the start button. Calls the startGame method on newGame variable
document.querySelector('#btn__reset').addEventListener('click', () => {
    newGame.startGame();
})
// Looping through each element of the keyboard variable
for (let key of keyboard) {
    // Adding a click event listener for the on-screen keyboard
    key.addEventListener('click', (e) => {
        // Calling the handleInteraction method on the newGame variable - pushing the key as parameter
        newGame.handleInteraction(key);
    });
    // Adding a keydown event listener 
    document.addEventListener('keydown', (e) => {
        // Conditional - if innerText of onscreen key matches key property of keydown key
        if (e.key === key.innerText){
            // Calling the handleInteraction method on the newGame variable - pushing the key as parameter
            newGame.handleInteraction(key);
        }
})
}    

