// Business Logic
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 67, 70,71, 72, 73, 74, 75, 76, 77, 78, 79, 20, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 10, 11, 12, 13, 254, 255, 256, 257,258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, ];
const newArray = numberArray.map(function(element));
for(let index=0; index<=element; index +=1);
  console.log(element);



function sillyNumbers(number, text, word) {
  if (text.includes('3') || number.includes(3)) {
    return newArray.push("Won't you be my neighbor?");
  } else if (text.includes('2') || number.includes(2)) {
    return newArray.push('Beep!')
  } else (text.includes('1') || number.includes(1)) {
    return newArray.push('Boop!');
  };
};



// UI logic

$(document).ready(function() {
  $(#form)
});


//                Business Logic

function numberCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let numberCount = 0;
  const numberArray = text.split(" ");
  console.log(numberArray);
  numberArray.forEach(function (element) {
    if (!parseInt(element)) {
      numberCount++;
    }
  });
  return numberCount;
}

function numberOfOccurrencesInText(word, text, number) {
  if (noInputtedWord(word, text, number)) {
    return 0;
  }
  const numberArray = text.split(` `);
  let numberOfOccurences = 0;
  numberArray.forEach(function (element) {
    if (element.toUpperCase().includes(word.toUpperCase())) {
      numberOfOccurences++;
    }
  });
  return numberOfOccurences;
}

function boldPassage(word, text, number) {
  if (noInputtedWord(word, text, number)) {
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}

console.log(boldPassage('hello', 'hello there'));


//                UI Logic

$(document).ready(function () {
  $("form#silly-numbers").submit(function (event) {
    event.preventDefault();
    const passage = $("#text-passage").val().trim();
    const word = $("#word").val().trim();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
  });
});