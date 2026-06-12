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

<img width="919" height="961" alt="imagen" src="https://github.com/user-attachments/assets/698b2d84-2fd9-4f5b-bc74-f9181b909b63" />

<img width="919" height="995" alt="imagen" src="https://github.com/user-attachments/assets/94d04763-3973-4e6e-8c1c-94e301213bde" />

<img width="921" height="1002" alt="imagen" src="https://github.com/user-attachments/assets/10c90f9b-9e08-45ba-b569-5c493347579b" />

<img width="921" height="999" alt="imagen" src="https://github.com/user-attachments/assets/b6b5a536-32e5-4d1e-b922-07208b1e9787" />


## Actualizacion de Mi microservicio Devops
## Observabilidad y Entornos Reales (Evaluación 3)
Para garantizar una operación confiable, transparente y alineada a estándares de calidad, se implementó la siguiente arquitectura:

### 1. Monitoreo y Dashboards (IE1 e IE3)
*   **Recolección de Métricas:** Se integró la librería `prom-client` en el código de Node.js para habilitar el endpoint `/metrics`, exponiendo datos vitales como uso de CPU, consumo de memoria y tiempos de respuesta
*   **Visualización:** Se configuró `Prometheus` (como scraper) y `Grafana` (como dashboard) dentro del orquestador `docker-compose.yml`. Esto permite crear paneles personalizados para observar el comportamiento del sistema y detectar anomalías en tiempo real

### 2. Entorno de Kubernetes (IE2)
*   Se crearon los manifiestos oficiales de orquestación en la carpeta `/k8s/` (`deployment.yaml` y `service.yaml`)
*   Estos archivos preparan el microservicio para ser desplegado en un cluster real, estableciendo límites estrictos de recursos (`128Mi` a `256Mi` de RAM) para asegurar gobernanza y escalabilidad

### 3. Políticas de Cumplimiento (IE5 e IE6)
*   **Validación Automatizada:** Se configuró una política de *Branch Protection Rule* en GitHub para la rama `main` 
*   **Parada de Emergencia:** Se exige que todos los *status checks* (como `build-and-test`) pasen exitosamente antes de permitir un Merge. Como se evidencia en los registros del pipeline, ante cualquier error o falla de seguridad, el proceso se interrumpe y bloquea el paso a producción


### Declaración de Uso de Inteligencia Artificial (Evaluación 3):
En esta etapa final, utilicé Inteligencia Artificial (Google IA Studio) de manera ética como apoyo técnico. La IA me ayudó a estructurar los archivos de configuración para Prometheus y los manifiestos YAML de Kubernetes. También me asistió en la resolución de problemas (troubleshooting) cuando el pipeline presentó errores de sintaxis o fallas de dependencias en GitHub Actions. Todas las decisiones arquitectónicas, validaciones en la plataforma y pruebas fueron ejecutadas manualmente.
Fuente: https://bibliotecas.duoc.cl/ia

### Reflexión Personal - Evaluación 3
*Para esta última evaluación, el desafío más grande no fue escribir código, sino conectar las herramientas. Aprender a configurar Prometheus y crear manifiestos de Kubernetes me hizo entender cómo funciona un sistema robusto en la vida real. Lo que más destaco de este proceso fue enfrentarme a los errores del pipeline (como los exit codes) y tener que investigar y aplicar soluciones "en caliente" para destrabarlo. Me apoyé en la Inteligencia Artificial para entender por qué fallaban los comandos en el servidor de GitHub, lo que aceleró mi aprendizaje. Ahora comprendo perfectamente el ciclo completo de DevOps: no solo es subir código, sino monitorearlo, protegerlo y saber cómo reaccionar cuando algo se rompe*
<img width="923" height="930" alt="Captura de pantalla 2026-06-11 220833" src="https://github.com/user-attachments/assets/b979c1fa-2e48-4672-830e-f4bf69d7b58e" />

<img width="933" height="867" alt="Captura de pantalla 2026-06-11 220643" src="https://github.com/user-attachments/assets/7c92bf81-44b7-4cb6-b7b8-7a92981a50ad" />

<img width="797" height="777" alt="Captura de pantalla 2026-06-11 222039" src="https://github.com/user-attachments/assets/a7f71064-5f10-4160-8ab9-4bc3585c011e" />
