---
title: "Test Markdown"
author: "Alexandru Tofănel"
date: "2026-10-14"
---

# Intro

**Testează** markdown --pandoc--> HTML pentru a inegra fișiere markdown în pagini web.

Exemple de:

- Heading-uri
- Link-uri
- Tabele
- Citate
- Cod
- Liste
- Footer

## Cod

Exemplu de așa nu.

```bash
#!/bin/bash
sudo rm -rf /
```

Package manager

```bash
sudo apt update
```

## PATH

```env
export PATH=~/.local/bin
```

> **Notă:** Adaugă în .profile

## Tabel

| Luni | Marți | Miercuri |
|---|---|---|
| 1 | 2 | 3 |
| 4 | 5 | 6 |
| 7 | 7 | 7 |
| 8 | 8 | 9 |

## Workflow exemplu:

1. Sarcina 1.
2. Sarcina 2.
3. Sarcina 3.
4. Sarcina 4.

## Task-uri

- [x] Fa-ți tema.
- [x] Trimite tema.
- [ ] Party.
- [ ] Dormi.

## Link-uri

- [Pandoc](https://pandoc.org/)
- [Markdown](https://www.markdownguide.org/)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)

## Image

![imagine din link ](../img/crai.jpg)

## Footnote

Pandoc convertește Markdown in mai multe formate:[^1]

[^1]: De exemplu, HTML, PDF, DOCX, și EPUB.

## Ecuații în LaTeX

$$ \begin{aligned}
& ax^2 + bx + c = 0 \\
& \delta=b^2-4ac \\
$ x_{1,2}=\frac{-b \pm \sqrt{\Delta}}{2a}
\end{aligned} $$

## Concluzie

Markdown este ușor de editat și pandoc convertește fișierele în HTML pentru a le vedea în Browsere.
