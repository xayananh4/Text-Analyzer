// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;}
  });
  return wordCount;
}

// Business Logic
function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

// Business Logic
function omitOffensiveWords(userInput) {

  const userInputArray = userInput.split(" ");
  
  const offensiveArray = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  let newArr = "";
  const tempArr = [];
  
  for (let i = 0; i < userInputArray.length; i++) {
    console.log(userInputArray[i]);
    
    if (!offensiveArray.includes(userInputArray[i])) {
      tempArr.push(userInputArray[i]);
    } 

  }
  newArr = tempArr.join(" ");
  return newArr; 
}

window.addEventListener("load", function(event) {
  let form = document.querySelector("form");
  
  // the original form submission event listener
  form.addEventListener("submit", function(event) {
    //read in user information
    const userInput = document.getElementById("userInput").value;

    //select paragraph element
    const paraText = document.getElementById("foo");
    //call omit function and print to paragraph
    paraText.innerText = omitOffensiveWords(userInput);
    
    event.preventDefault();
  });


});


  