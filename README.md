# Mi Blog Moderno con Astro, Turso y Astro DB

Este es mi propio proyecto de blog de arquitectura *full-stack*, construido enteramente sobre las bases de **Astro**. Me dediqué a utilizar tecnologías e implementaciones experimentales de última generación que elevan el estándar de rendimiento en la web.

![Captura de mi panel](/blog-placeholder-about.jpg)

## 🚀 Lo que implementé y cómo se divide

- **Diseño Personal Modernizado:** Desarrollé a mano este oscuro tema integrando elementos de *glassmorphism*, ligeros difuminados y un ecosistema completamente ajustable (*responsive*) basado íntegramente en directivas de puro CSS nativo vanilla.
- **Astro DB & Turso:** Buscando cómo estructurar de forma eficaz mi recuento de _likes_ sin caerme en esquemas densos, conseguí integrarme ágilmente mediante SQLite distribuido velozmente hacia múltiples centros (*edge*). Mis bases relacionales han quedado perfectamente operativas en Astro.
- **Astro Actions:** Renuncié por completo y con mucho gusto a armar la enorme y fatigosa capa tradicional extra de rutas JSON. Empleando este concepto del *RPC* conseguí ejecutar y enrutar datos a mi panel lógico como comandos inofensivos.
- **Trazando islas de Vue.js:** Mi asombrosa dinámica central que recuenta y asiste los aplausos de mi comunidad —que nombro `LikeCounterAction.vue`— funciona encapsulada. Astro recorta gastos en procesamiento levantándola estrictamente tan solo en los módulos requeridos y descartándolos en el texto frío y simple.
- **Hibridez Real (SSG + SSR):** Compilo todo lo estático como cemento firme para aligerar la navegación e inculco *Server-Side Render* cuando y solo cuando un usuario reclama datos dinámicos a mis funciones subyacentes.

## 📁 Explorando la Estructura de mi Ecosistema

Te invito a mirar la estructura básica en mis carpetas. Todo este núcleo se clasifica orgánicamente, permitiéndome gran maniobrabilidad en poco tiempo:

```text
├── public/                # Mis archivos y activos totalmente públicos
├── src/
│   ├── actions/           # Mi lógica segura desde donde envío transacciones de Action RPC
│   ├── components/        # La colección interna de mis componentes web Astro e islas de Vue
│   ├── content/           # Mis artículos documentados, divididos por las colecciones Markdown Markdown
│   ├── layouts/           # Mis estructuras nativas de enmarcado central
│   └── pages/             # Rutas que dirigen al navegador directamente a mis recursos en cada nodo
├── astro.config.mjs       # Percepción integral de mis recursos globales e inicialización técnica
└── package.json           # Las librerias precisas que me asisten aquí día con día
```

## 🧞 Probando este entorno local

Para este sistema te recomiendo altamente correr el sistema nativo y potente *handler* de `bun`. Desde una ventana de tu directorio principal (raíz) los invoco de esta forma a través del gestor:

| En la Interfaz        | Lo que hace en mi computadora                        |
| :------------------ | :--------------------------------------------------- |
| `bun install`       | Descargar de inmediado e instalar todas mis dependencias subyacentes |
| `bun dev`           | Me deja observar un panel rápido e iniciar entorno de pruebas interno (corriendo sobre el localhost:4321)|
| `bun astro db push` | Una sola rutina que uso para empujar mi archivo y forzar sincronización directa hacia la sede de datos central de mis bases de Turso |
| `bun build`         | Transita hacia una minúscula carpeta `./dist/` generando todos mis pesados cálculos internamente dejándolo lista al espectador global |
| `bun preview`       | Visualiza localmente y antes del despliegue toda la estructura rígida recién computada |

## ✨ Un Pequeño Crédito Adicional Base

Todo lo que ves hoy arrancó remotamente con los mínimos detalles prestados y la humilde simpleza esquelética de algo llamado [Bear Blog](https://github.com/HermanMartinus/bearblog/). Luego arranqué todas y cada una de sus costuras estétricas rehaciéndolas para forcluir el código dentro de las bases integrales y configuradas por mi propia cuenta apuntando directo dentro de `src/styles/global.css`.
