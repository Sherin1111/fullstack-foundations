// An array of perfume recommendations
  let perfumes = [
    "Creed Aventus", // [0]
    "Viktor & Rolf Flowerbomb", // [1]
    "Chanel Chance Eau Fraîche", // [2]
    "Dolce & Gabbana Light Blue Intense", // [3]
    "Mugler Angel Muse", // [4]
    "YSL Black Opium", // [5]
    "Marc Jacobs Daisy", // [6]
    "Lancôme La Vie Est Belle", // [7]
  ];


// Receive input from user and output the recommendation
function getNoteForm() {
  // To get the users value from each option
  let topNote = document.getElementById("topNote").value;
  let middleNote = document.getElementById("middleNote").value;
  let baseNote = document.getElementById("baseNote").value;


  // The result of the recommendation
  let result = " ";

  // If response is citus, spicy, and woody recommend Creed Aventus
  if (topNote === "citrus" && middleNote === "spicy" && baseNote === "woody") {
    result = perfumes[0];
  }

  // Else if response is citrus, spicy, and vanilla recommend Viktor & Rolf Flowerbomb
  else if (
    topNote === "citrus" &&
    middleNote === "spicy" &&
    baseNote === "vanilla"
  ) {
    result = perfumes[1];
  }

  // Else if response is citrus, floral, and woody recommend Chanel Chance Eau Fraîche
  else if (
    topNote === "citrus" &&
    middleNote === "floral" &&
    baseNote === "woody"
  ) {
    result = perfumes[2];
  }

  // Else if response is citrus, floral, and vanilla recommend Dolce & Gabbana Light Blue Intense
  else if (
    topNote === "citrus" &&
    middleNote === "floral" &&
    baseNote === "vanilla"
  ) {
    result = perfumes[3];
  }

  // Else if response is fruity, spicy, and woody recommend Mugler Angel Muse
  else if (
    topNote === "fruity" &&
    middleNote === "spicy" &&
    baseNote === "woody"
  ) {
    result = perfumes[4];
  }

  // Else if response is Fruity, spicy, and vanilla recommend YSL Black Opium
  else if (
    topNote === "fruity" &&
    middleNote === "spicy" &&
    baseNote === "vanilla"
  ) {
    result = perfumes[5];
  }

  // Else if response is Fruity, floral, and woody recommend Marc Jacobs Daisy
  else if (
    topNote === "fruity" &&
    middleNote === "floral" &&
    baseNote === "woody"
  ) {
    result = perfumes[6];
  }

  // Else if response is Fruity, floral, and vanilla recommend Lancôme La Vie Est Belle
  else if (
    topNote === "fruity" &&
    middleNote === "floral" &&
    baseNote === "vanilla"
  ) {
    result = perfumes[7];
  }

  console.log("Top Note:", topNote, "Middle Note:", middleNote, "Base Note:", baseNote);
  console.log("Recommended Perfume:", result);
  // Outputs the result to paragraph element
  document.getElementById("perfumeRec").innerHTML = result;

  // Changes the background from blue to pink
  document.body.style.backgroundColor = "#FFC8DD";
}

// Submit button to change background and output the perfume recommendation
let submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", getNoteForm);

//Add to basket alert
function myFunction() {
  const addBasketElement = document.querySelector("#addBasket");

  // A popup for the user to confirm they want the perfume in their basket
  let addElement = prompt("Confirm 'Yes' to add the perfume to the basket");

  if (addElement === "Yes" || addElement === "yes" || addElement === "YES") {
    addBasketElement.innerText =
      "GREAT! Your perfume has been added to the basket! 🎉";
  } else {
    addBasketElement.innerText =
      "The perfume has not been added to the basket 🥀";

    document.getElementById("addBasket").appendChild(p);
  }
}

// An array of emoji's to represent the notes
const isEmoji = ["🍋", "🫐", "🌶️", "🪵", "🌸", "🍦"];
let emojiOutput = " ";

// Use a loop to iterate through the values in the array
for (let i = 0; i < isEmoji.length; i++) {
  emojiOutput += isEmoji[i] + " ";
}
document.getElementById("addEmojis").innerHTML = emojiOutput;
