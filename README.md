# Mi Microservicio Devops

## Estrategia de Ramificación y Control de Versiones

Para este proyecto hemos decidido implementar **GitFlow**

**Justificación:**
Elegimos GitFlow porque permite un entorno colaborativo estructurado al tener una rama `main` aislada, aseguramos que el código de producción siempre sea estable la rama `develop` sirve como punto de integración para todo el equipo las ramas `feature/` nos permiten trabajar en paralelo sin pisarnos el código, y las ramas `hotfix/` nos dan una vía rápida para solucionar errores críticos en producción sin interrumpir el desarrollo de nuevas características

## Convenciones y Buenas Prácticas del Equipo

### 1. Naming de Ramas
*   **main**: Código estable para producción
*   **develop**: Código de integración de desarrollo
*   **feature/<nombre-breve>**: Para nuevas funcionalidades (Ej: `feature/login`, `feature/nueva-ruta`)
*   **hotfix/<nombre-breve>**: Para errores críticos en main (Ej: `hotfix/caida-bd`)

### 2. Convenciones de Commits
Utilizamos la convención de *Conventional Commits* para mantener la trazabilidad:
*   `feat: <descripción>` para nuevas características
*   `fix: <descripción>` para solución de bugs
*   `docs: <descripción>` para cambios en documentación
*   `ci: <descripción>` para cambios en GitHub actions/flujos

### 3. Flujo de Merge y Estrategias de Revisión
*   **Nunca** se hace push directo a `main` ni a `develop`
*   Todo cambio debe integrarse mediante un **Pull Request (PR)**
*   Antes de aprobar un PR, el código debe pasar exitosamente el pipeline de GitHub Actions (CI) y ser revisado por al menos 1 compañero de equipo 

### 4. Estructura de Carpetas
*   `.github/workflows/`: Archivos de configuración de GitHub Actions
*   `/`: Archivos de configuración en la raíz (`package.json`, `.gitignore`)
*   `/src/` o raíz: Lógica principal del microservicio (`index.js`)

### Declaración de Uso de Inteligencia Artificial

Para este proyecto hemos decidido implementar **GitFlow**

**Justificación:**
Elegimos GitFlow porque permite un entorno colaborativo estructurado al tener una rama `main` aislada, aseguramos que el código de producción siempre sea estable la rama `develop` sirve como punto de integración para todo el equipo las ramas `feature/` nos permiten trabajar en paralelo sin pisarnos el código, y las ramas `hotfix/` nos dan una vía rápida para solucionar errores críticos en producción sin interrumpir el desarrollo de nuevas características

## Convenciones

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

###  Estructura de Carpetas
   `.github/workflows/`: Archivos de configuración de GitHub Actions
   `/`: Archivos de configuración en la raíz (`package.json`, `.gitignore`)
   `/src/` o raíz: Lógica principal del microservicio (`index.js`)

### Declaración de Uso de Inteligencia Artificial
En este proyecto se utilizó IA (Google ia Studio) de manera ética como apoyo para estructurar el formato de este documento README.md, recordar comandos de Git y validar la sintaxis básica del archivo YAML para GitHub Actions todas las decisiones técnicas, la creación de las ramas, los commits y la ejecución de los Pull Requests fueron realizadas de forma manual
Fuente: https://bibliotecas.duoc.cl/ia

Principalmente, lo que más me costó al inicio fue entender bien el flujo de las ramas y el orden de los commits al principio me confundía un poco al hacer los Pull Requests, los merge, y tratar de que no se me desordenara la rama main con la de develop y configurar el archivo YAML para las GitHub Actions fue un desafío, pero al apoyarme en la Inteligencia Artificial para resolver mis dudas puntuales, pude entender el proceso paso a paso, aprendiendo de forma mucho más rápida y guiada

# Actualizacion de Mi Microservicio Devops
## Evolución del Pipeline (Evaluación 2)
Para asegurar la calidad y trazabilidad desde el desarrollo hasta la producción:
* **Contenedores y Orquestación:** Implementamos `Dockerfile` y `docker-compose.yml` para garantizar que la app funcione igual en cualquier entorno (simulación Cloud)

* **Pruebas Automatizadas:** Integramos `Jest`. El pipeline bloquea el paso a producción si las pruebas fallan

* **Seguridad:** Utilizamos `Dependabot` para revisión de dependencias y `npm audit` en el pipeline para bloquear el despliegue si se detectan vulnerabilidades críticas
  
## Arquitectura y Decisiones Técnicas (Evaluación 2)
Para esta etapa, hemos escalado el microservicio integrando prácticas avanzadas de DevOps:
* **Contenedorización:** Se creó un `Dockerfile` optimizado utilizando la imagen `node:18-alpine` para reducir el peso y mejorar la seguridad. El puerto interno configurado es el 8080
* **Orquestación Simulada:** Mediante `docker-compose.yml`, simulamos un entorno Cloud que levanta el servicio de forma aislada, asegurando que "funcione en mi máquina y en producción de la misma manera"
* **Calidad de Código (QA):** Se implementó la librería `Jest` para ejecutar pruebas unitarias automáticas en el pipeline.
* **Seguridad (SecOps):** Se activó `Dependabot` en GitHub y se integró `npm audit --audit-level=critical` en el flujo de Actions. Si se detecta un paquete malicioso, el despliegue se bloquea automáticamente protegiendo el entorno de producción

# Declaración de uso de Inteligencia Artificial (Evaluación 2):
En esta etapa del proyecto, utilicé Inteligencia Artificial (Google ia Studio) de manera ética como apoyo técnico para generar la estructura base del Dockerfile, el archivo docker-compose.yml y para entender la sintaxis de los comandos de pruebas y seguridad (Jest y npm audit) dentro del archivo de GitHub Actions. Todas las implementaciones, pruebas de ejecución y resolución de conflictos en el repositorio fueron realizadas manualmente
Fuente: https://bibliotecas.duoc.cl/ia

Para esta segunda evaluación, el mayor desafío fue subirle la complejidad al pipeline. Como seguí trabajando solo, entender cómo empaquetar la aplicación con Docker y luego orquestarla con Docker Compose me costó un poco al principio y tambien integrar la seguridad para que el pipeline se bloqueara automáticamente si encontraba vulnerabilidades fue algo totalmente nuevo para mí. Me apoyé en la Inteligencia Artificial para entender la estructura de los archivos de configuración y no frustrarme con los errores de sintaxis (como el uso de mayúsculas en Dockerfile). Gracias a esto, logré comprender cómo funciona realmente la integración continua, asegurando que el código que llega a producción sea seguro y esté probado

