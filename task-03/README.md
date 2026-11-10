# Task 03 - Coș de cumpărături

Acest program gestionează produsele dintr-un coș.

## Rulare

Din folderul principal: `node task-03/main.js`.

## Produse

Un produs are `id`, `name`, `price` și `quantity`. Prețul este pentru o singură bucată.

## Adăugare

`addProduct()` adaugă un produs. Dacă același `id` există deja, cantitatea se adună.

## Cantitate

`updateQuantity()` schimbă cantitatea unui produs existent. Cantitatea trebuie să fie cel puțin 1.

## Ștergere

`removeProduct()` șterge produsul după `id`. Dacă produsul nu există, este generată o eroare.

## Total

`calculateTotal()` folosește `reduce()` pentru a aduna prețul înmulțit cu cantitatea fiecărui produs.

## Exemplu

După operațiile din `main.js`, în coș rămân 5 pixuri, iar totalul este 25.00 lei.
