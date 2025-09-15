//receive input from user
function receiveNoteForm() {
  // To get the users value from each option
  let topNote = document.getElementById("topNote").value;
  let middleNote = document.getElementById("middleNote").value;
  let baseNote = document.getElementById("baseNote").value;

  let result;
  //if response is citus, spicy, and woody recommend "Creed Aventus"
  if (topNote === "citrus" && middleNote === "spicy" && baseNote === "woody") {
    result = "Creed Aventus";
  }

  // else is respons is citrus, spicy, and vanilla recommend Viktor & Rolf Flowerbomb
  else if (
    topNote === "citrus" &&
    middleNote === "spicy" &&
    baseNote === "vanilla"
  ) {
    result = "Viktor & Rolf Flowerbomb";
  }

  // else if respons is citrus, floral, and woody recommend Chanel Chance Eau Fraiche

  // else if respons is citrus, floral, and vanilla recommend Chanel Dolce & Gabbana Light Blue Intense

  // else if respons is Fruity, spicy, and woody recommend Mugler Angle Muse

  // else if respons is Fruity, spicy, and vanilla recommend Mugler YSL Black Opium

  // else if respons is Fruity, floral, and woody recommend Marc Jacobs Daisy

  // else if respons is Fruity, floral, and vanilla recommend Lancome La Vie Est Belle

  // Update result to paragraph
  document.getElementById("perfumeRec").innerHTML = result;
}
