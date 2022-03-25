//based on a demo provided by John Cokos

function getAnswer(){
    let answer = prompt("Tired of your same old same old day to day routine?");
    console.log(answer);
       if(answer.toLowerCase() !== "no"){
          document.write("Yes! Talk to a Code Fellows Admissions Advisor today!")
       } else {
              document.write ("It's good to hear things are going to so well for you!");
              }
}
