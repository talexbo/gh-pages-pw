# Laborator 2: Formatarea textului în HTML

| | |
|---|---|
| **Obiective** | La finalul laboratorului vei putea: (1) structura textul cu titluri (`h1`–`h6`) și paragrafe; (2) pune în evidență text cu bold și italic; (3) seta culori de text și de fundal în `style.css`, în trei notații (nume, HEX, RGB); (4) crea liste neordonate (`ul`) și ordonate (`ol`); (5) folosi tutorialul W3Schools ca sursă de lucru. |
| **Cerințe prealabile** | Laboratorul 1 (scheletul unei pagini HTML5, legarea unui fișier `style.css`); ai citit **Cursul 2 – Formatarea textului în HTML** |
| **Timp estimat** | 100 minute |
| **Instrumente** | VS Code, un browser actual (Chrome, Firefox sau Edge), tutorialul W3Schools: https://www.w3schools.com/html/ |

> **Materiale:** această foaie (cu teoria inclusă) și folderul `starter/`.

## Planul orei

| Parte | Min |
|---|---|
| 0. Pregătire | 5 |
| 1. Teorie (T1–T5) | 25 |
| 2. Demonstrație ghidată | 15 |
| 3. Exercițiul 1 (ghidat) | 10 |
| 4. Exercițiul 2 (notat) | 35 |
| 5. Predare | 5 |
| Rezervă | 5 |

---

## 0. Pregătire (5 min)

1. Copiază folderul `starter/` pe desktop și redenumește-l `Nume_Prenume_Grupa_lab02` (ex. `Popescu_Ana_1234_lab02`).
2. Deschide folderul în VS Code (*File → Open Folder*).
3. Deschide `ex1.html` în browser. Vezi un text simplu, fără formatare. La sfârșitul orei va arăta altfel.

## 1. Teorie (25 min)

### T1. Titluri și paragrafe (5 min)

```html
<h1>Titlul paginii</h1>
<h2>Un subtitlu</h2>
<h3>Un sub-subtitlu</h3>
<p>Acesta este un paragraf.</p>
```

- Există 6 niveluri de titlu: `<h1>` (cel mai important) până la `<h6>` (cel mai puțin important).
- Pe o pagină folosim **un singur** `<h1>`, apoi `<h2>` pentru secțiuni și `<h3>` pentru subsecțiuni.
- Titlurile se folosesc pentru **structură**, nu pentru a face textul mare sau bold. Mărimea se schimbă cu CSS.
- Fiecare paragraf se scrie în `<p>…</p>`. Browserul ignoră spațiile în plus și rândurile goale din cod.
- `<br>` trece la rând nou în același paragraf; `<hr>` desenează o linie orizontală.

W3Schools: [Headings](https://www.w3schools.com/html/html_headings.asp) · [Paragraphs](https://www.w3schools.com/html/html_paragraphs.asp)

**Verifică-te:** (1) Câte `<h1>` pune pe o pagină? (2) Dacă vrei text mai mare, ce folosești: un titlu sau CSS?

### T2. Formatarea textului (6 min)

| Tag | Efect obișnuit | Folosește-l pentru |
|---|---|---|
| `<strong>` | bold | text **important** |
| `<b>` | bold | doar aspect, fără importanță |
| `<em>` | italic | text *accentuat* |
| `<i>` | italic | alt ton (ex. un termen străin) |
| `<mark>` | evidențiat | text marcat |
| `<small>` | mai mic | notă mică |
| `<del>` / `<ins>` | tăiat / subliniat | text șters / inserat |
| `<sub>` / `<sup>` | indice / exponent | H<sub>2</sub>O, x<sup>2</sup> |

```html
<p>Este <strong>important</strong> să ajung la timp și să iau <em>notițe</em>.</p>
```

- La laborator folosim de obicei `strong` și `em`. Sunt acceptate și `b` și `i`.
- Tag-urile se închid în ordinea inversă a deschiderii: `<strong><em>…</em></strong>`.

W3Schools: [Text Formatting](https://www.w3schools.com/html/html_formatting.asp)

**Verifică-te:** (1) Ce tag folosești pentru text important? (2) Ce tag folosești pentru H₂O?

### T3. Culori (7 min)

Două proprietăți CSS:

| Proprietate | Ce schimbă |
|---|---|
| `color` | culoarea **textului** |
| `background-color` | culoarea **fundalului** |

```css
h1 { background-color: DodgerBlue; }
h2 { color: #B7410E; }
h6 { color: rgb(0, 128, 255); }
```

Trei notații pentru culori (aceeași culoare, scrisă diferit):

| Notație | Exemplu | Cum se scrie |
|---|---|---|
| Nume | `DodgerBlue` | un nume de culoare în engleză |
| HEX | `#1E90FF` | `#` + 6 cifre hexazecimale (roșu, verde, albastru) |
| RGB | `rgb(30, 144, 255)` | trei valori între 0 și 255 |

(Opțional: există și HSL, de ex. `hsl(210, 100%, 56%)`, pentru aceeași culoare.)

> **Atenție, la curs și pe W3Schools:** culorile apar scrise direct pe element, cu atributul `style`:
> `<h2 style="color:orange;">…</h2>`
> **La laborator scriem aceleași proprietăți în `style.css`**, ca la Laboratorul 1:
> `h2 { color: orange; }`
> Efectul este același, dar regula din `style.css` se aplică tuturor titlurilor `<h2>` din pagină.

**Textul trebuie să se citească.** Galben pe fundal alb sau gri pe gri se citesc greu. Alege o culoare închisă pe fundal deschis sau invers.

W3Schools: [Colors](https://www.w3schools.com/html/html_colors.asp)

**Verifică-te:** (1) Ce proprietate schimbă culoarea fundalului? (2) Care din `#FF0000`, `FF0000`, `rgb(255,0,0)` este scrisă greșit?

### T4. Liste (5 min)

```html
<ul>
  <li>laptop</li>
  <li>caiet</li>
</ul>

<ol>
  <li>curs</li>
  <li>laborator</li>
</ol>
```

- `<ul>` = listă **neordonată** (cu buline); `<ol>` = listă **ordonată** (numerotată).
- Fiecare element al listei se scrie în `<li>…</li>`, direct în interiorul lui `<ul>` sau `<ol>`.
- Folosește `<ol>` când ordinea contează (pași, clasament), altfel `<ul>`.
- Pentru `<ol>` poți schimba numerotarea cu `type="A"` sau `start="3"` (opțional).
- Liste în liste (imbricate): un `<ul>` sau `<ol>` se pune **în interiorul unui `<li>`** (bonus).

W3Schools: [Lists](https://www.w3schools.com/html/html_lists.asp) · [Unordered](https://www.w3schools.com/html/html_lists_unordered.asp) · [Ordered](https://www.w3schools.com/html/html_lists_ordered.asp)

**Verifică-te:** (1) Ce tag are fiecare element al unei liste? (2) Pentru „pașii unei rețete" alegi `ul` sau `ol`?

### T5. Cum folosim W3Schools (2 min)

W3Schools este tutorialul pe care îl folosim în tot semestrul. Este în engleză, deci folosește glosarul de la sfârșit.

1. Caută pagina potrivită (ex. „W3Schools HTML Colors") sau intră pe https://www.w3schools.com/html/.
2. Citește explicația și exemplul de cod.
3. Apasă **„Try it Yourself »”**, modifică codul și vezi rezultatul.
4. Scrie în VS Code ce ai înțeles, cu propriul tău text.
5. În bara din stânga ai și **Exercises** pentru a te verifica.

## 2. Demonstrație ghidată: „Despre facultate” (15 min)

Construim împreună o pagină, pas cu pas. După fiecare pas **reîncarci pagina (F5)**.

1. **Fișiere.** Creează `demo.html` (schelet HTML5, ca la Laboratorul 1) și `demo.css`; leagă-le cu `<link rel="stylesheet" href="demo.css">`.
2. **Titluri.** Adaugă un `<h1>` („Despre facultate”), un `<h2>` („Studiile”) și un `<h6>` („Notă”).
3. **Paragrafe.** Adaugă două paragrafe sub `<h2>`.
4. **Bold și italic.** Pune două cuvinte importante în `<strong>` și unul în `<em>`.
5. **Culori în `demo.css`.** `h1` cu `background-color` (nume), `h2` cu `color` (HEX), `h6` cu `color` (RGB).
6. **Listă neordonată.** „Ce oferă facultatea”: burse, mobilități, campus, practică.
7. **Listă ordonată.** „Etapele studiilor”: licență, master, doctorat.
8. **Comparație (2 min).** Pune `style="color:red;"` direct pe un `<h2>` și vezi că merge; apoi mută culoarea în `demo.css`.

✅ La final, în browser: titluri colorate, paragrafe cu text evidențiat, două liste. Încearcă și un `<h2>` galben pe fundal alb: se citește?

> Dacă nu ai terminat, treci mai departe: instructorul îți dă `demo.html` și `demo.css`.

## 3. Exercițiul 1 – ghidat (10 min, nenotat)

Fișiere: `ex1.html` și `ex1.css` din starter. Textul „O zi la facultate” este deja scris, dar neformatat.

| Pas | Fișier | Ce faci |
|---|---|---|
| TODO 1 | `ex1.html` | Primul rând devine `<h1>`; „Dimineața” și „După-amiaza” devin `<h2>` |
| TODO 2 | `ex1.html` | „important” și „Programare web” în `<strong>`; „notițe” și „bibliotecă” în `<em>` |
| TODO 3 | `ex1.html` | Rândurile de sub „Ce iau cu mine” devin o listă `<ul>`; cele de sub „Programul zilei” o listă `<ol>` |
| TODO 4 | `ex1.css` | `h1` cu `background-color` (nume), `h2` cu `color` (HEX), `strong` cu `color` (RGB) |

✅ *Verifică:* în browser vezi titluri colorate, cuvinte evidențiate și două liste (una cu buline, una numerotată).

## 4. Exercițiul 2 – Pagina mea (35 min, notat)

Creezi o pagină despre **un subiect ales de tine** (un hobby, un oraș, un film sau o carte, un sport, o rețetă, o călătorie, o tehnologie etc.). Lucrezi în `index.html` și `style.css`. **Subiectul este obligatoriu și diferit de al colegilor.**

| Pas | Fișier | Cerință | Obiectiv |
|---|---|---|---|
| TODO 5 | `index.html` | Subiectul în `<title>` și în `<h1>` | 1 |
| TODO 6 | `index.html` | Cel puțin 2 titluri `<h2>` (secțiuni) și 1 titlu `<h3>` | 1 |
| TODO 7 | `index.html` | Cel puțin 2 paragrafe (câte minimum 2 propoziții) despre subiect | 1 |
| TODO 8 | `index.html` | Cel puțin 2 expresii în bold (`strong`/`b`) și 2 în italic (`em`/`i`) | 2 |
| TODO 9 | `index.html` | O listă `<ul>` și o listă `<ol>`, fiecare cu cel puțin 4 elemente, legate de subiect | 4 |
| TODO 10 | `style.css` | `h1` cu `background-color`, scrisă cu **nume** de culoare | 3 |
| TODO 11 | `style.css` | `h2` cu `color`, scrisă cu cod **HEX** | 3 |
| TODO 12 | `style.css` | O culoare în **RGB** (de ex. pe `h3` sau `strong`) | 3 |
| TODO 13 | `style.css` | Textul rămâne lizibil: culoare închisă pe fundal deschis sau invers | 3 |
| – | `README.md` | Jurnalul de utilizare AI | – |

### Jurnalul de utilizare AI (obligatoriu)
Poți folosi instrumente AI, dar trebuie să înțelegi ce predai. În `README.md` completezi, pentru fiecare utilizare: ce ai întrebat, ce ai primit, ce ai modificat și **ce ai învățat**. Dacă nu ai folosit AI, scrie explicit „Nu am folosit instrumente AI”.

Exemplu bun: *„Am întrebat cum colorez fundalul unui titlu. Răspuns: `background-color`. Am scris `h1 { background-color: SteelBlue; }` în style.css, pentru că regula se aplică titlului h1.”*
Exemplu slab: *„Am folosit ChatGPT pentru pagină.”*

### Bonus (opțional, nenotat)
- Folosește `<mark>`, `<del>`/`<ins>` sau `<sub>`/`<sup>` într-un paragraf.
- Fă o listă imbricată (o listă în interiorul unui `<li>`).
- Scrie o culoare în HSL.

## 5. Predare (5 min)

- [ ] Folderul se numește `Nume_Prenume_Grupa_lab02` și conține `index.html`, `style.css`, `README.md` (poți lăsa și `ex1.html`, `ex1.css`)
- [ ] Pagina se deschide în browser, iar stilurile se văd (`style.css` este legat)
- [ ] Ai cel puțin 3 niveluri de titlu, 2 paragrafe, bold și italic, liste `ul` și `ol`
- [ ] Ai folosit culori în cele 3 notații (nume, HEX, RGB) și textul se citește
- [ ] Diacriticele se văd corect (`<meta charset="UTF-8">`, fișiere salvate UTF-8)
- [ ] `README.md` conține jurnalul AI
- [ ] Ai creat ZIP-ul din folder, l-ai deschis și ai verificat conținutul
- [ ] Ai încărcat `Nume_Prenume_Grupa_lab02.zip` pe platforma e-learning, **înainte de termen**

## 6. Notare (rezumat; detaliile în `rubric.md`)

| Criteriu | Puncte |
|---|---|
| Structură HTML5 și `style.css` legat | 10 |
| Titluri (`h1`, 2×`h2`, `h3`) | 15 |
| Paragrafe (text propriu, subiect ales) | 10 |
| Bold și italic | 10 |
| Liste `ul` și `ol` | 15 |
| Culori în `style.css` (3 notații) | 15 |
| Lizibilitate | 5 |
| Diacritice corecte | 5 |
| Structura predării (ZIP, nume, căi) | 10 |
| Jurnal de utilizare AI | 5 |
| **Total** | **100** |

## 7. Glosar RO ↔ EN

| Română | English |
|---|---|
| titlu | heading |
| paragraf | paragraph |
| îngroșat (bold) | bold |
| înclinat (italic) | italic |
| text important / accentuat | strong / emphasized text |
| listă neordonată / ordonată | unordered / ordered list |
| element al listei | list item |
| culoare de text | text color (`color`) |
| culoare de fundal | background color (`background-color`) |
| proprietate / valoare | property / value |
| selector | selector |
| nume de culoare, HEX, RGB | color name, HEX, RGB |
| contrast | contrast |

## 8. Lecturi suplimentare
- W3Schools HTML: https://www.w3schools.com/html/ (paginile Headings, Paragraphs, Text Formatting, Colors, Lists)
- Validatorul de HTML al W3C: https://validator.w3.org/
