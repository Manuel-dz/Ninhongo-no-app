# Japonés 800 · Ray-Ban Meta Display

App web de tarjetas para estudiar las 800 palabras más comunes del japonés, pensada para las Ray-Ban Meta Display (viewport 600×600) y la Neural Band.

## Controles (flechas + Enter)

| Pantalla | Acción |
|---|---|
| Menú | Flechas mueven la selección · Enter abre el nivel |
| Tarjeta | ↓ siguiente · ↑ anterior · → muestra lectura, traducción y frase · ← oculta / vuelve al menú |

El progreso por nivel se guarda en `localStorage`. La fuente se ajusta sola para que la palabra quepa en una línea.

## Añadir palabras

Los datos están en la constante `D` dentro de `data.js`. Un nivel es un bloque de líneas separado por una línea en blanco:

```
palabra|lectura|español|frase|frase en español
```

## Nivel extra: Hiragana

El menú incluye un nivel extra con 104 caracteres agrupados: vocales, filas K S T N H M Y R W/N, dakuten (G Z D B), handakuten (P) y sílabas combinadas. Cada tarjeta muestra el carácter y, al deslizar a la derecha, su sonido en alfabeto latino, el grupo y una palabra de ejemplo. Los datos están en la constante `H` de `data.js`.

## Estado

- Niveles 1 a 10: 80 palabras cada uno (800 en total) + nivel extra de hiragana (104 caracteres)

## Publicar con GitHub Pages

1. Sube `index.html`, `app.js`, `data.js` y `README.md` a un repositorio.
2. Settings → Pages → Deploy from a branch → `main` / `(root)`.
3. Abre la URL `https://<usuario>.github.io/<repo>/` en las gafas.
