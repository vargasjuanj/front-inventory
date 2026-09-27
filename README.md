# Inventory Management System (Frontend SPA)

[![Angular](https://img.shields.io/badge/Angular-8.3-dd0031.svg?style=flat&logo=angular)](https://angular.io/)
[![Angular Material](https://img.shields.io/badge/Angular%20Material-UI%20Components-3f51b5.svg?style=flat&logo=angular)](https://material.angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3.5-3178c6.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![RxJS](https://img.shields.io/badge/RxJS-6.4-B7178C.svg?style=flat&logo=reactivex)](https://rxjs.dev/)

Frontend SPA para la gestión y control de inventarios, desarrollado con **Angular** y **Angular Material**. Implementa una arquitectura modular con componentes desacoplados, diálogos modales, tablas reactivas y formularios para la administración de categorías y productos.

---

## 🏛️ Arquitectura del Proyecto

El proyecto está organizado siguiendo buenas prácticas de modularización en Angular:

```text
src/app/
├── modules/
│   ├── category/             # Módulo de administración de categorías
│   │   ├── components/       # Listado de categorías, formularios modales (New / Edit)
│   │   └── category.module.ts
│   ├── dashoard/             # Módulo principal de navegación y métricas
│   │   ├── components/home/  # Vista principal del dashboard
│   │   ├── pages/            # Layout general
│   │   └── dashboard.module.ts
│   └── shared/               # Recursos transversales compartidos
│       ├── components/       # Diálogos reutilizables (ConfirmDialog)
│       ├── services/         # Servicios HTTP para consumo de APIs REST (CategoryService)
│       ├── sidenav/          # Barra de navegación lateral colapsable
│       ├── material.module.ts# Centralización de componentes de Angular Material
│       └── shared.module.ts
└── app-routing.module.ts     # Configuración de rutas y lazy loading
```

---

## 🚀 Características Implementadas

* **Componentes de Angular Material:** Utilización de `MatTable`, `MatPaginator`, `MatDialog`, `MatSnackBar`, `MatSidenav`, `MatToolbar` y `MatFormField`.
* **Formularios Reactivos (`ReactiveFormsModule`):** Validaciones síncronas, binding tipado y control de estados de guardado/edición.
* **Diálogos Modales Reutilizables:** Creación y actualización de categorías en ventanas emergentes desacopladas del listado principal.
* **Confirmaciones Atómicas:** Diálogo genérico de confirmación para acciones destructivas (eliminación de registros).
* **Consumo de API REST:** Servicio centralizado mediante `HttpClient` y operadores de `RxJS` para comunicación asíncrona con el backend.

---

## ⚙️ Puesta en Marcha Local

### Prerrequisitos
* Node.js (versión 10 a 14 recomendada para Angular 8).
* npm instalado.

### Instalación y Ejecución
1. Clonar el repositorio e instalar dependencias:
   ```bash
   npm install
   ```
2. Iniciar el servidor de desarrollo:
   ```bash
   ng serve
   ```
3. Abrir en el navegador: `http://localhost:4200/`.
