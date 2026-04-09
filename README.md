Para este proyecto hemos decidido implementar **GitFlow**

**Justificación:**
Elegimos GitFlow porque permite un entorno colaborativo estructurado al tener una rama `main` aislada, aseguramos que el código de producción siempre sea estable la rama `develop` sirve como punto de integración para todo el equipo las ramas `feature/` nos permiten trabajar en paralelo sin pisarnos el código, y las ramas `hotfix/` nos dan una vía rápida para solucionar errores críticos en producción sin interrumpir el desarrollo de nuevas características

## Convenciones y Buenas Prácticas del Equipo

###  Naming de Ramas
   **main**: Código estable para producción
   **develop**: Código de integración de desarrollo
   **feature/<nombre-breve>**: Para nuevas funcionalidades (Ej: `feature/login`, `feature/nueva-ruta`)
   **hotfix/<nombre-breve>**: Para errores críticos en main (Ej: `hotfix/caida-bd`)

###  Convenciones de Commits
Utilizamos la convención de *Conventional Commits* para mantener la trazabilidad:
   `feat: <descripción>` para nuevas características
   `fix: <descripción>` para solución de bugs
   `docs: <descripción>` para cambios en documentación
   `ci: <descripción>` para cambios en GitHub actions/flujos

###  Flujo de Merge y Estrategias de Revisión
   **Nunca** se hace push directo a `main` ni a `develop`
   Todo cambio debe integrarse mediante un **Pull Request (PR)**
   Antes de aprobar un PR, el código debe pasar exitosamente el pipeline de GitHub Actions (CI) y ser revisado por al menos 1 compañero de equipo 

### 4. Estructura de Carpetas
   `.github/workflows/`: Archivos de configuración de GitHub Actions
   `/`: Archivos de configuración en la raíz (`package.json`, `.gitignore`)
   `/src/` o raíz: Lógica principal del microservicio (`index.js`)

### Declaración de Uso de Inteligencia Artificial
En este proyecto se utilizó IA (Google ia Studio) de manera ética como apoyo para estructurar el formato de este documento README.md, recordar comandos de Git y validar la sintaxis básica del archivo YAML para GitHub Actions todas las decisiones técnicas, la creación de las ramas, los commits y la ejecución de los Pull Requests fueron realizadas de forma manual
Fuente: https://bibliotecas.duoc.cl/ia

Principalmente, lo que más me costó al inicio fue entender bien el flujo de las ramas y el orden de los commits al principio me confundía un poco al hacer los Pull Requests, los merge, y tratar de que no se me desordenara la rama main con la de develop y configurar el archivo YAML para las GitHub Actions fue un desafío, pero al apoyarme en la Inteligencia Artificial para resolver mis dudas puntuales, pude entender el proceso paso a paso, aprendiendo de forma mucho más rápida y guiada
