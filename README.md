# Evaluación 1: Ingenieria DevOps - Mi Primer Pipeline

## Modelo de Ramificacion: GitFlow
Para este proyecto hemos seleccionado *GitFlow*.
*Justificación:* Elegimos GitFlow porque permite una separación clara entre el código estable en `main` y el desarrollo activo en `develop` el uso de ramas `feature/` permite trabajar en nuevas funcionalidades sin afectar la estabilidad del sistema, cumpliendo con los estándares de trazabilidad y calidad exigidos

## Convenciones del Proyecto
 *Naming de Ramas:* 
 Funcionalidades: `feature/nombre-tarea`
 Arreglos rapidos: `hotfix/nombre-error`
*Mensajes de Commit:* Usamos *Conventional Commits* (ej: `feat:`, `fix:`, `docs:`).
 *Estrategia de Revisión:* Todo cambio debe pasar por un Pull Request (PR) de una rama `feature` hacia `develop`

## Automatización (CI/CD)
Se ha configurado un workflow de *GitHub Actions* que se dispara automáticamente con cada `push` a la rama `develop` y con cada `Pull Request` hacia `main`