# Portfolio - Thiago Paolo Icochea Rodriguez

Portfolio profesional construido con **Angular 17**.

---

## Estructura del Proyecto

```
src/app/
├── components/
│   ├── header/          # Navbar fijo con scroll effect + mobile menu
│   └── footer/          # Footer con links de contacto
├── pages/
│   ├── home/          # Landing principal con RULETA giratoria sobre tecnologías usadas
│   ├── about/           # Sobre mí: educación, experiencia, intereses
│   ├── skills/          # Tecnologías con filtros por categoría
│   └── contact/         # Canales de contacto
    |__ projects/        # Proyectos personales 
├── services/
│   └── portfolio.service.ts   # DATOS CENTRALIZADOS
├── models/
│   └── portfolio.model.ts     # Interfaces TypeScript
├── app.routes.ts        # Rutas
└── app.config.ts        # Configuración con View Transitions API
```

---

## Instalación y ejecución

```bash

npm install


ng serve


http://localhost:4200
```

---


## Colores (variables CSS)
Se puede editar el archivo `src/styles/main.scss` para cambiar la paleta:

```scss
--color-primary:      #00B4D8;   
--color-primary-dark: #0077B6;   
--color-primary-light:#90E0EF;   
--color-accent:       #48CAE4;  
--color-bg:           #020B18;   
```

---

## Páginas

| Ruta          | Componente  | Descripción                          |
|---------------|-------------|--------------------------------------|
| `/`           | HomeComponent | Landing con ruleta + hero + stats  |
| `/sobre-mi`   | AboutComponent | Bio, educación, experiencia       |
| `/habilidades`| SkillsComponent | Grid de tecnologías con filtros  |
| `/contacto`   | ContactComponent | Links de contacto + mini CV     |
| `/proyectos`  |ProjectsComponent | Proyectos personales y enlaces  de repositorios |

---


