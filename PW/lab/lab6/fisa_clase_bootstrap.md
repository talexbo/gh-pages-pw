# Fișă: clasele Bootstrap din Laboratorul 6

**De unde vin clasele?** Bootstrap este un fișier CSS scris de alți programatori. Clasa `card` este o regulă CSS (`.card { ... }`), exact ca `.card` din `style.css` scris de tine la Laboratorul 5. Dacă pui fișierul în pagină, clasele lui funcționează. Nu trebuie să le știi pe de rost: le copiezi din `model/` sau din [documentația Bootstrap](https://getbootstrap.com/docs/5.3/) și le adaptezi.

**Cum arăți de unde vine o clasă:** în browser, click dreapta pe un card → *Inspect*; în panoul din dreapta vezi regula `.card` și numele fișierului `bootstrap.min.css`.

| Ce vrei | Clase | Unde în `model/` |
|---|---|---|
| Bootstrap în pagină | 2 linkuri (CSS în `<head>`, JS înainte de `</body>`) | [1] în toate paginile |
| Meniu care se strânge într-un buton pe telefon | `navbar navbar-expand-md`, `navbar-toggler`, `collapse navbar-collapse`, `nav-link active` | [2] |
| Conținut centrat, cu margini | `container`, `my-4` (margine sus și jos) | `<main class="container my-4">` |
| Carduri pe coloane | `row g-4` + `col-md-4` (sau `col-md-6`) | [3] |
| Card | `card h-100`, `card-img-top`, `card-body`, `card-title`, `card-text` | [3] |
| Link în formă de buton | `btn btn-success`, `btn btn-outline-success`, `btn-lg` | [3] |
| Tabel | `table table-striped table-bordered` în `table-responsive` | [4] |
| Carusel de imagini | `carousel slide`, `carousel-item active`, `carousel-control-prev/next`, `data-bs-*` | [5] |
| Imagini în grilă | `row row-cols-2 row-cols-md-3 g-3` + `col` | [5b] |
| Spațiere, text | `p-3`, `mt-2`, `my-4`, `text-center`, `lead`, `bg-success text-white` | peste tot |

**Citirea numelor:** `col-md-4` = „coloană, de la ecran mediu (768 px) în sus, 4 din 12 părți". `g-4` = spațiu între coloane. `mt-2` = margin-top mic. `my-4` = margine sus și jos. `btn-outline-success` = buton verde doar cu contur.

**Reguli de reținut**
1. Bootstrap se leagă **înaintea** `style.css`, ca regulile tale să poată înlocui regulile lui.
2. Meniul și caruselul merg fără JavaScript scris de tine, dacă scriptul Bootstrap este înainte de `</body>`.
3. `id`-ul și `data-bs-target` trebuie să fie identice (`mainMenu` ↔ `#mainMenu`).
4. În carusel, **doar primul** `carousel-item` are `active`.
5. După fiecare copiere: schimbi textele, imaginile, linkurile; deschizi pagina; micșorezi fereastra la ~400 px.
