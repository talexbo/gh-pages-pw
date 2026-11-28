// script.js – Lab 8 (starter)
// Browserul citește acest fișier de sus în jos când se încarcă calculator.html.
// Deschide DevTools (F12 -> Console) ca să vezi mesajele din console.log().
// Modelul complet este în model/script.js: caută comentariile [2], [3], [4], [5].


// ---------- TODO 2: variabile ----------
// a) Declară cel puțin 4 variabile despre subiectul tău: un text (const), două numere
//    (unul declarat cu let, pe care îl modifici ulterior) și o valoare true/false.
// b) Afișează fiecare variabilă și tipul ei în consolă: console.log(nume, typeof nume);
// c) Afișează o frază cu valorile lor pe pagină:
//    document.getElementById("variables-result").textContent = "...";
//    (getElementById găsește elementul cu id-ul dat; textContent îi schimbă textul)


// ---------- TODO 3: șiruri de caractere ----------
// a) Declară un șir (de ex. numele unei oferte/produse/rețete din subiectul tău).
// b) Aplică cel puțin 5 dintre: length, toUpperCase, toLowerCase, slice (sau substr), indexOf, replace,
//    concatenare cu + sau cu backtick (`...${variabila}...`).
// c) Pune rezultatele într-un tablou și afișează-le pe pagină, câte unul pe rând:
//    const lines = [ "Textul: " + ..., "Lungimea: " + ... ];
//    document.getElementById("strings-result").textContent = lines.join("\n");


// ---------- TODO 4: funcția formatName() ----------
// Butonul din calculator.html o apelează deja. Funcția:
//  - citește câmpul cu id="full-name" (.value) și elimină spațiile de la capete cu .trim()
//  - caută primul spațiu cu indexOf(" ")  (dacă nu există, afișează un mesaj și ieși cu return)
//  - separă prenumele și numele cu slice()
//  - scrie în id="name-result": prenumele, numele cu majuscule și inițialele
function formatName() {
  // ... scrie aici ...
}


// ---------- TODO 5: calcule ----------
// a) Declară o constantă pentru TVA (cota standard din România de la 1 august 2025 este 21%).
// b) Scrie funcția percentOf(value, percent) care returnează value * percent / 100.
// c) Scrie funcția calculateTotal() (butonul o apelează deja):
//    - citește câmpurile: price (parseFloat), people (parseInt(..., 10)), discount (parseFloat)
//    - verifică valorile cu isNaN(...) și mesaj de eroare dacă sunt invalide
//    - calculează subtotalul, reducerea, TVA-ul și totalul (folosește percentOf)
//    - afișează în id="total-result" fiecare valoare cu .toFixed(2)
function percentOf(value, percent) {
  // ... scrie aici ...
}

function calculateTotal() {
  // ... scrie aici ...
}
