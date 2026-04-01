---
title: 'Astro Actions: Interactividad en el servidor sin dolor'
description: 'Dejando atrás las pesadas APIs tradicionales y abrazando mis primeras implementaciones de RPC.'
pubDate: 'Apr 03 2026'
heroImage: '/blog-placeholder-2.jpg'
---

## Reemplazando las APIs que siempre conocí

Al momento de programar rutinas simples para regresar y recibir información de los visitantes de mi sitio —por ejemplo, para documentar el instante en el cual se registra un simple *like* en mi servidor— recuerdo que a menudo debía forzar la creación de una capa robusta de APIs, usando las pautas convencionales e introduciendo bastante carga extra para mi sistema en forma de tediosos *endpoints*.

La reciente inclusión de las **Astro Actions** suprimió este paso intermedio por completo. Me simplifica la declaración y definición explícita de cualquier método en el lado de mi servidor, otorgándome las potestad absoluta de utilizar e invocar mis métodos en RPC para ejecutar la función remotamente desde la parte frontal usando *Vanilla JS*, React e inclusive, tal y como hice en este pequeño proyecto, integrando interactividades ricas con **Vue**. Más encima, le saco partido a sus funciones de alta validación automáticas con Zod.

### Un ejemplo programático vivo

Yéndome a lo tangible y directamente aplicado dentro de mi *blog*, he diseñado el respectivo contador interactivo de pulgares arriba (mis "likes"). Utilizando una Action nativa en la base, me he ocupado en que cuando presiones aquí debajo dicho recurso, esté actualizando la central de datos en Turso silenciosamente en un trasfondo invisible. Te generará la asombrosa comodidad y la ilusión de mantenerte frente a una *SPA* (Aplicación pura de página central) aunque en realidad navegas mi renderizado clásico en HTML y CSS servido velozmente tras la lógica del render *SSR*.

Adicional al rendimiento envidiable de mi motor interno, me llena de orgullo este increíble resultado por el innegable pulido visual, mis temas sombreados, componentes fluidos en formato cristal (*glassmorphism*) y botones de acción ¡que cobran vida orgánicamente!
