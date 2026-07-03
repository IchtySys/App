# IchtySys

IchtySys es una plataforma digital especializada para la recolección, sistematización y análisis de datos ictiométricos de la especie *Sardinella aurita* (sardina). Diseñada específicamente para el personal de inspección pesquera, esta herramienta optimiza el flujo de información en campo y laboratorio para fortalecer el ordenamiento pesquero.

## Características Principales

* **Registro Ictiométrico:** Interfaz optimizada para el conteo rápido de ejemplares según su talla (cm).
* **Gestión de Datos:** Organización automática por puerto, embarcación y responsable del muestreo.
* **Análisis Dinámico:** Visualización inmediata de la estructura poblacional mediante gráficos de torta y barras.
* **Análisis de Corte:** Configuración de puntos de corte porcentuales para evaluar la composición de la captura (ej. tallas menores vs. mayores).
* **Integración con Firebase:** Sincronización y autenticación segura de usuarios para garantizar la integridad de los datos.
* **Offline First:** Implementación de *Service Worker* para permitir una operatividad eficiente incluso en condiciones de conectividad limitada en los puertos.

## Tecnologías Utilizadas

* **Frontend:** HTML5, CSS3 y JavaScript (ES6+).
* **Backend & DB:** Firebase Authentication y Firestore.
* **Visualización de Datos:** Chart.js con el plugin DataLabels.
* **PWA:** Service Worker para capacidades de aplicación web progresiva.

## Estructura del Proyecto

* `index.html`: Estructura principal, lógica de interfaz y autenticación.
* `service-worker.js`: Gestión de caché para funcionamiento offline.
* `manifest.webmanifest`: Configuración de la aplicación para instalación en dispositivos móviles.

## Autores y Derechos

Este software ha sido desarrollado por **Emmanuel Manosalva**.
* **Inicio del desarrollo:** Diciembre de 2023.
* **Inicio de operaciones:** 2024.
* **Ciclo de desarrollo:** 2023 - 2026 (en actualización constante).

© 2026 Emmanuel Manosalva | Insopesca El Morro. Todos los derechos reservados.

---
*Plataforma técnica de apoyo al ordenamiento pesquero.*
