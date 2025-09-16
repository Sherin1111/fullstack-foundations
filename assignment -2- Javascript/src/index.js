// Receive input from user and output the recommendation
function getNoteForm() {
  // To get the users value from each option
  let topNote = document.getElementById("topNote").value;
  let middleNote = document.getElementById("middleNote").value;
  let baseNote = document.getElementById("baseNote").value;

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

  // Updates the result to paragraph element
  document.getElementById("perfumeRec").innerHTML = result;
}
