// script.js – Lab 8: variables, strings and calculations
// The browser reads this file from top to bottom when calculator.html loads.
// Open DevTools (F12 -> Console) to see the console.log() messages.

// ---------- [2] Variables ----------
// const = a value that does not change; let = a value that can change.
// (The examples from the lecture use "var". It works too, but let/const are the modern way.)
const clubName = "Clubul Pedala";      // string (text)
const foundedYear = 2019;               // number
let members = 48;                       // number (it can change, so let)
const isOpenOnWeekends = true;          // boolean (true or false)

console.log(clubName, typeof clubName);                    // Clubul Pedala string
console.log(foundedYear, typeof foundedYear);              // 2019 number
console.log(isOpenOnWeekends, typeof isOpenOnWeekends);    // true boolean

members = members + 5;                  // 5 new members joined
console.log("Members:", members);       // Members: 53

// document.getElementById("...") finds the element with this id on the page.
// .textContent = "..." replaces the text inside that element.
document.getElementById("variables-result").textContent =
  clubName + " a fost înființat în " + foundedYear + ". Numărul de membri: " + members + ".";


// ---------- [3] Strings ----------
const tourName = "Tura Lacul Verde";

console.log(tourName.length);           // 16
console.log(tourName.toUpperCase());    // TURA LACUL VERDE

const stringLines = [
  "Textul: " + tourName,
  "Lungimea (length): " + tourName.length,
  "Majuscule (toUpperCase): " + tourName.toUpperCase(),
  "Litere mici (toLowerCase): " + tourName.toLowerCase(),
  "Primele 4 caractere (slice): " + tourName.slice(0, 4),
  // substr(start, length) is the older method; it still works but slice() is recommended.
  "Primele 4 caractere (substr): " + tourName.substr(0, 4),
  "Poziția cuvântului Lacul (indexOf): " + tourName.indexOf("Lacul"),
  "După înlocuire (replace): " + tourName.replace("Verde", "Albastru"),
  // Template literal: backticks and ${...} put values inside text.
  `Cu backtick: ${tourName} are ${tourName.length} caractere`
];
// "\n" = new line (the .output class in style.css shows it as a line break)
document.getElementById("strings-result").textContent = stringLines.join("\n");


// ---------- [4] Function with strings: formatName() ----------
// Called from the button (onclick="formatName()" in calculator.html).
function formatName() {
  const fullName = document.getElementById("full-name").value.trim(); // trim() removes spaces at both ends
  const output = document.getElementById("name-result");

  const spaceIndex = fullName.indexOf(" ");   // position of the first space, or -1 if there is none
  if (spaceIndex === -1) {
    output.textContent = "Scrie prenumele și numele, separate printr-un spațiu.";
    return;                                    // stop here: nothing more to do
  }

  const firstName = fullName.slice(0, spaceIndex);        // everything before the space
  const lastName = fullName.slice(spaceIndex + 1);        // everything after the space

  output.textContent =
    "Prenume: " + firstName + "\n" +
    "Nume: " + lastName.toUpperCase() + "\n" +
    "Inițiale: " + firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase() + ".";
}


// ---------- [5] Functions with numbers: percentOf() and calculateTotal() ----------
// Standard VAT rate in Romania since 1 August 2025 (check it again before using it in a real project).
const VAT_RATE = 21;

// A function with two parameters that returns a value.
function percentOf(value, percent) {
  return value * percent / 100;
}

// Called from the button (onclick="calculateTotal()" in calculator.html).
function calculateTotal() {
  // Values read from input fields are TEXT, so we convert them to numbers first.
  const pricePerPerson = parseFloat(document.getElementById("price").value);
  const people = parseInt(document.getElementById("people").value, 10);
  const discountPercent = parseFloat(document.getElementById("discount").value);
  const output = document.getElementById("total-result");

  // Input validation: isNaN(x) is true when x is "Not a Number" (an empty or invalid field).
  if (isNaN(pricePerPerson) || isNaN(people) || pricePerPerson < 0 || people < 1) {
    output.textContent = "Introdu un preț și un număr de persoane valide.";
    return;
  }
  if (isNaN(discountPercent) || discountPercent < 0 || discountPercent > 100) {
    output.textContent = "Reducerea trebuie să fie un număr între 0 și 100.";
    return;
  }

  const subtotal = pricePerPerson * people;
  const discountValue = percentOf(subtotal, discountPercent);
  const afterDiscount = subtotal - discountValue;
  const vat = percentOf(afterDiscount, VAT_RATE);
  const total = afterDiscount + vat;

  // toFixed(2) rounds to 2 decimals and returns a string such as "256.50".
  output.textContent =
    "Subtotal: " + subtotal.toFixed(2) + " lei\n" +
    "Reducere (" + discountPercent + "%): " + (-discountValue).toFixed(2) + " lei\n" +
    "TVA (" + VAT_RATE + "%): " + vat.toFixed(2) + " lei\n" +
    "Total de plată: " + total.toFixed(2) + " lei";
  console.log("Total:", total);
}
