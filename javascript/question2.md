# ASSIGNMENT 2: JavaScript

## Question 2

### 2.1.

**unshift()** adds a specified element to the beginning of an array and returns the new length of that array.

`const cfgdegreeStream = ["software or Data", "Data Science", "Full-Stacks"]:`

`cfgdegreeStream.unshift("Product Management");`

`console.log(cfgdegreeStream);`

Output: // [object Array] (4)

`["Product Management","software or Data","Data Science","Full-Stacks"]`

**shift()** removes the first element of an array and returns that removed element. It shifts all values to the left by 1 and reduces the array’s length by 1, resulting in the first element being removed.

`const cfgdegreeStream = [“Product Management”, "Software or Data", "Data Science",` `"Full-Stacks"];`

`const removeCfgdegreeStream = cfgdegreeStream.shift();`

`console.log(removeCfgdegreeStream);`

`console.log(cfgdegreeStream);`

Output: `"Product Management"`

Output: // [object Array] (3)

`["Software or Data","Data Science","Full-Stacks"]`

The **split()** is used to split a string into an array of substrings. It returns the substrings as an array, using " " (a space) as a separator, splits each word, while "" (empty string) splits every character, including spaces.

`const text = "Start your career in tech with the CFGDEGREE";`

`const myArray = text.split(" ");`

`console.log(myArray)`

Output: // [object Array] (8)
`["Start","your","career","in","tech","with","the","CFGDEGREE"]`

`const text = "CFGDEGREE";`

`const myArray = text.split("");`

`console.log(myArray);`

Output: // [object Array] (9)

`["C","F","G","D","E","G","R","E","E"]`

### 2.2.

An object is a collection of related data and properties, and an **object method** is a function stored as one of those properties. A property’s value can be a function, which is then referred to as a method.

`const progLang = {`

`name: "JavaScript",` _// String_

`year: 1995,` _// Number_

`inventor: {`

`fullName: "Brendan Eich",` _// String_

`age: 64,` _// Number_

`country: "America"` _// String_

`},`

`langInfo: function () {`

`console.log("This is " + this.name);`

` }`

`};`

`progLang.langInfo();`

Output: `"This is JavaScript"`

### 2.3.

The **onmouseover** event is triggered when the mouse cursor moves over an element in HTML.
For example, when you hover the cursor over a specific text, it can trigger an alert message..

The **oninput** event happens when an element receives input, and it fires immediately as the value changes.
For example, if you type your name in lowercase in an input field, JavaScript could automatically convert it to uppercase as you type.

The **onpaste** event happens when the user pastes something into an input field.
For example, if you paste some text into the field, it can trigger a message saying “You pasted text”.
