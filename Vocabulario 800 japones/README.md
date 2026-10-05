# Japonés 800 · Ray-Ban Meta Display

App web de tarjetas para estudiar las 800 palabras más comunes del japonés, pensada para las Ray-Ban Meta Display (viewport 600×600) y la Neural Band.

## Controles (flechas + Enter)

| Pantalla | Acción |
|---|---|
| Menú | Flechas mueven la selección · Enter abre el nivel |
| Tarjeta | ↓ siguiente · ↑ anterior · → muestra lectura, traducción y frase · ← oculta / vuelve al menú |

El progreso por nivel se guarda en `localStorage`. La fuente se ajusta sola para que la palabra quepa en una línea.

## Añadir palabras

Los datos están en la constante `D` dentro de `index.html`. Un nivel es un bloque de líneas separado por una línea en blanco:

```
palabra|lectura|español|frase|frase en español
```

## Estado

- Nivel 1 y 2: 80 palabras cada uno
- Niveles 3 a 10: 5 palabras de muestra (por completar)

## Publicar con GitHub Pages

1. Sube `index.html` y `README.md` a un repositorio.
2. Settings → Pages → Deploy from a branch → `main` / `(root)`.
3. Abre la URL `https://<usuario>.github.io/<repo>/` en las gafas.
