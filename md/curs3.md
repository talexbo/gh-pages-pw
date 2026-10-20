---
title: "Șiruri - Wolfram"
author: "Alexandru Tofănel"
date: "20/10/26"
---
### Fibonaci
$$F_{n+2} = F_{n+1}+F_{n}, F_1=1, F_2=1$$
1,1,2,3,5,8,...
$$\lim{n\to \infty} \frac{F_{n+1}}{F_n}= \phi= \frac{1+\sqrt{5}}{2}; F_n=\frac{1}{\sqrt{5}}[ (\frac{1+\sqrt{5}}{2})^n-\frac{1-\sqrt{5}}{2})^n ]$$
Există un număr prim de 5 cifre în șirul lui: Fibonacii, Lucas, Pell.
Fib(23)
Nu există nici un număr prim de 5 cifre în șirul lui Lucas. (Iterativ WF)

Să se rezolve ecuația: 
$$(1+\sqrt{5})^n = 6765\sqrt{5} \cdot 2^n + (1-\sqrt{5})^n$$

### Lucas
Șirul lui Lucas: 
$$L_{n+2}=L_{n+1}+L_n, F=1, F=3$$
1,3,4,7,11,...
$$L_n=?$$
$$L_{n+2}-L_{n+1}-L_n = 0$$
$$x^2-x-1=0
\Delta = 5 => x_{1,2}\frac{1\pm\sqrt{5}}{2} => L_n=A(\frac{1+\sqrt{5}}{2})^n + B(\frac{1-\sqrt{5}}{2})^n$$

### Pell

Șirul lui Pell:

$$P_{n+2} = 2P_{n+1}+P_n, P_1=1. P_2=2$$
1,2,5,12,29,...
Termenul general: 
$$P_{n+2} -2P_n -Pn = 0$$
$$x^2-2x-1=0, \Delta = 8 x_{1,2}=1\pm\sqrt{2}$$
$$P_2=2\cdot P_1 + P_0, 2 = 2 + P_0 => P_0 = 0$$
Sistem ...


### Matrice la n

$$
A=\begin{pmatrix}
1 & 1 \\
0 & 1 
\end{pmatrix}
$$