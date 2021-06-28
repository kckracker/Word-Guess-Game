# Word-Guess-Game
 ___
 ### Before we begin...[^1]
___
## Summary
___
 This project emphasizes the use of Object creation and interaction within JavaScript through the creation of a fun word game. I have created two separate objects stored in separate .js files for ease of readability. 

- The first object, Phrase.js, handles the interactions that make up the phrases which will be guessed by the player. The constructor only accepts one parameter, phrase, and the object utilizes three methods: addPhraseToDisplay, checkLetter, and showMatchedLetter. 

  - This Object takes some of the workload of logic off the Game object by placing the phrase received from the Game into the HTML for the page. Further, the Phrase object handles the logic of checking key input received from the player against the phrase object supplied by the Game.

   - If the key input received from the player matches a letter of the phrase, the Phrase object reveals the letters on screen for the player to see.

- The second object, Game.js, handles the majority of the game logic. The constructor holds three properties (missed - tracks letter attemps, phrases - stores random Phrase objects, activePhrase - stores current Phrase object) and five methods. 
    
    - The Game object starts the game by removing the starting overlay, calling up a random phrase from the phrases property, and pushing that phrase to the display by utilizing the Phrase method addPhraseToDisplay.
    
    - The Game pushes key input supplied by the player to Player methods in order to verify if they match with the letters comprising the current phrase object. If they do, the Game tells the Phrase object to display the matching letters on the screen and marks the key selected as chosen. If they do not, the Game will remove one of the life tokens and marks the key selected as wrong. 

    - Upon losing five life tokens by failing to identify the matching letters, the Game will enable the display of the overlay with a new lose class which displays the lost game message and the start game button to play again.

    - Upon revealing all letters belonging to the active phrase, the Game will enable display of the overlay with a new win class which displays the win game message and the start game button to play again.
___
 ## CSS styling additions / changes
___    
   ### Overlay   
   
 1. Changing background color of start to neutral deep green
    
 2. Adding hover transition to ease in/out color of title text to bold orange and slightly increased scale
    
 3. Adding hover transition to start button to ease in/out background to bold orange and font to off white
    
 4. Changing background color of .win overlay to deeper emerald green to better complement palette
    
 5. Changing background colof of .lose overlay to deep purple to better complement palette

   ### General
    
 1. Updating background color to warmer gray to complement chosen color scheme 
    
 2. Adding hover transition to ease in/out color of title text and transform text to rotate slightly upon hover

   ### Phrase
    
 1. Adding 5px padding & margin to .space class to make phrases more readable

   ### Keyboard
   
 1. Adding hover transition to add border with neutral deep green and slightly increased scale for easier visual of which key is currently being hovered over
    
 2. Changing color scheme of .wrong selection to match bold orange from title
___ 
Thanks for reading me! Cheers!

[^1]: This application requires you to run the command "npm start" in your console at the project's folder location then point your browser to "localhost:3000" to view.

