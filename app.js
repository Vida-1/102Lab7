function getName() {

        let name = prompt ("What is your name?");
        if (name !== "Vida") {
                document.write("Let's bounce with the puppy " + name+"!!");

        } else {
                document.write("Let's dance with the puppy, Vida!");

        }

    }
    
const answer = prompt('Tired of your same old same old day to day?');
console.log(answer);

dancePref()


// Notes from class today follow:

// function yourName() {

//         let name = prompt ("What is your name?");
//             document.write("Nice to meet you, " + name);
// } 


// function guessNumber() {
//         let answer;
//         let guesses = 0;

//         do {
//         guesses++;
//         answer=prompt("Guess a number between 1 and 10");
//         if (parseInt(answer) ===7) {
//                 document.write("It took you " +guesses + " times to guess my number")
//         } 

//         if (parseInt(answer) === 7)  {
//                 document.write ("It took yu " + guesses + " times to guess my number")
//         }

// }

// } 
