# 🏺 Terra Cemento - Sitio Web

Sitio web profesional para emprendimiento de arte decorativo en cemento hecho a mano en Argentina.

## 📋 Contenido del Proyecto

Este proyecto incluye:
- ✅ **Identidad de marca completa** (nombre, paleta de colores, frases)
- ✅ **Landing page responsive** (HTML, CSS, JavaScript)
- ✅ **Copywriting profesional** en español argentino
- ✅ **Contenido para redes sociales** (Instagram)
- ✅ **Optimización SEO básica**
- ✅ **Imágenes de producto generadas**

## 🎨 Identidad de Marca

### Nombre Seleccionado
**TERRA CEMENTO**

### Paleta de Colores
- **Beige claro/Arena**: #F5F1E8
- **Gris arena**: #D4CFC0
- **Gris cemento**: #8B8680
- **Texto**: #3A3632
- **Blanco**: #FFFFFF

### Frase Principal
*"Diseño artesanal en cemento para tu hogar"*

## 🚀 Cómo Ver el Sitio

### Opción 1: Abrir directamente
1. Navegá a la carpeta `terra-cemento-website`
2. Hacé doble clic en `index.html`
3. El sitio se abrirá en tu navegador predeterminado

### Opción 2: Servidor local (recomendado)
Si tenés Python instalado:
```bash
cd terra-cemento-website
python -m http.server 8000
```
Luego abrí: http://localhost:8000

Si tenés Node.js instalado:
```bash
cd terra-cemento-website
npx serve
```

## 📁 Estructura del Proyecto

```
terra-cemento-website/
├── index.html          # Página principal
├── styles.css          # Estilos y diseño
├── script.js           # Interactividad
└── README.md           # Este archivo
```

## 🎯 Características del Sitio

### Secciones Incluidas
1. **Hero Section** - Presentación principal con llamado a la acción
2. **Sobre Nosotros** - Historia y valores del emprendimiento
3. **Productos** - 5 productos con descripciones y precios
4. **Proceso** - 4 pasos del proceso artesanal
5. **Por Qué Elegirnos** - Propuesta de valor
6. **Contacto** - WhatsApp, Instagram, Email
7. **Footer** - Información adicional y redes sociales

### Productos Incluidos
1. **Florero Estriado Alto** - $12.500 ARS
2. **Florero Estriado Bajo** - $8.900 ARS
3. **Plato Decorativo Irregular** - $7.500 ARS
4. **Plato Ovalado con Textura** - $9.200 ARS
5. **Porta Velas Artesanal** - $6.800 ARS

### Funcionalidades
- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Navegación suave entre secciones
- ✅ Animaciones al hacer scroll
- ✅ Efectos hover en tarjetas y botones
- ✅ Optimizado para SEO
- ✅ Tipografías profesionales (Google Fonts)

## 📱 Contenido para Instagram

El archivo `website_copywriting.md` incluye 5 posts listos para usar:
1. Presentación del emprendimiento
2. Proceso artesanal
3. Producto destacado
4. Valores de marca
5. Testimonial/Uso

## 🌐 Próximos Pasos

### Para Publicar el Sitio
1. **Registrar dominio**: terracemento.com.ar (recomendado)
2. **Hosting sugerido**:
   - Netlify (gratis, fácil)
   - Vercel (gratis, profesional)
   - Hostinger Argentina (pago, soporte local)

### Para Mejorar el Sitio
1. **Reemplazar imágenes placeholder** con fotos reales de tus productos
2. **Actualizar datos de contacto**:
   - WhatsApp: Línea 136 en `index.html`
   - Instagram: Línea 137 en `index.html`
   - Email: Línea 138 en `index.html`
3. **Agregar Google Analytics** para métricas
4. **Configurar formulario de contacto** (opcional)

### Cómo Reemplazar Imágenes
1. Guardá tus fotos de productos en la carpeta del sitio
2. En `script.js`, reemplazá las URLs de `productImages` con las rutas de tus imágenes
3. Ejemplo:
```javascript
const productImages = {
    'product-1': 'images/florero-alto.jpg',
    'product-2': 'images/florero-bajo.jpg',
    // etc...
};
```

## 🔍 SEO Incluido

El sitio ya incluye:
- Meta descripción optimizada
- Keywords relevantes
- Estructura semántica HTML5
- Títulos jerárquicos correctos
- Textos alt para imágenes (cuando las agregues)

### Keywords Principales
- decoración artesanal argentina
- cemento decorativo
- floreros de cemento
- objetos de diseño hechos a mano
- porta velas artesanal
- decoración minimalista

## 📞 Información de Contacto a Actualizar

> ⚠️ **IMPORTANTE**: Antes de publicar, actualizá estos datos en `index.html`

- **WhatsApp**: +54 9 11 XXXX-XXXX (actualizar en líneas 136, 240, 243)
- **Instagram**: @terracemento (actualizar en líneas 137, 241)
- **Email**: hola@terracemento.com.ar (actualizar en líneas 138, 242)

## 🎨 Personalización

### Cambiar Colores
Editá las variables CSS en `styles.css` (líneas 5-10):
```css
:root {
    --color-primary: #F5F1E8;
    --color-secondary: #D4CFC0;
    --color-accent: #8B8680;
    --color-text: #3A3632;
    --color-white: #FFFFFF;
}
```

### Cambiar Tipografías
Las fuentes actuales son:
- **Títulos**: Cormorant Garamond (serif elegante)
- **Texto**: Inter (sans-serif moderna)

Para cambiar, editá la línea 10 de `index.html` y las variables en `styles.css`.

## 📄 Documentos Adicionales

- **brand_strategy.md** - Estrategia de marca completa
- **website_copywriting.md** - Todos los textos y contenido
- **task.md** - Seguimiento del proyecto

## 💡 Consejos de Marketing

1. **Fotografía de productos**: Invertí en buenas fotos con luz natural
2. **Instagram**: Publicá regularmente mostrando el proceso
3. **WhatsApp Business**: Configurá respuestas automáticas
4. **Testimonios**: Pedí fotos a clientes satisfechos
5. **Hashtags**: Usá los sugeridos en el copywriting

## 🛠️ Tecnologías Utilizadas

- HTML5 semántico
- CSS3 con variables y Grid/Flexbox
- JavaScript vanilla (sin dependencias)
- Google Fonts (Cormorant Garamond + Inter)

## 📧 Soporte

Si necesitás ayuda con el sitio, podés:
1. Revisar los comentarios en el código
2. Consultar la documentación en los archivos .md
3. Buscar tutoriales de HTML/CSS básico

---

**Hecho con ❤️ para Terra Cemento**  
*Objetos únicos para espacios únicos* 🇦🇷
