# Pokédex con React

[![GitHub license](https://img.shields.io/github/license/eber2k1/pokedemo)](https://github.com/eber2k1/pokedemo/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/eber2k1/pokedemo)](https://github.com/eber2k1/pokedemo/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/eber2k1/pokedemo)](https://github.com/eber2k1/pokedemo/network)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Una aplicación web de Pokédex moderna y responsiva construida con React, Vite y Tailwind CSS. Explora información detallada de tus Pokémon favoritos con una interfaz de usuario intuitiva y un rendimiento optimizado.

## 🚀 Características

- **Lista de Pokémon con Scroll Infinito**
  - Carga progresiva de 20 en 20 Pokémon
  - Optimizado para rendimiento con React.memo y useCallback
  - Indicadores de carga integrados

- **Vistas Detalladas**
  - Información completa de cada Pokémon
  - Tipos con colores temáticos
  - Estadísticas detalladas con gráficos
  - Habilidades y movimientos
  - Evoluciones

- **Experiencia de Usuario**
  - Interfaz intuitiva y responsiva
  - Carga optimizada de imágenes
  - Manejo de errores robusto
  - Transiciones suaves
  - Componentes UI reutilizables

- **Arquitectura**
  - Componentes funcionales con Hooks
  - Hooks personalizados para lógica reutilizable
  - Separación clara de responsabilidades
  - Código modular y mantenible

## Demo en Vivo

Puedes ver una versión en vivo del proyecto desplegada en GitHub Pages:

[![Ver Demo](https://img.shields.io/badge/Ver%20Demo-181717?style=for-the-badge&logo=github&logoColor=white)](https://eber2k1.github.io/pokedemo/)

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19** - Biblioteca de JavaScript para construir interfaces de usuario
- **React Router 7** - Enrutamiento para aplicaciones de una sola página (SPA)
- **Vite** - Herramienta de construcción ultra rápida
- **Tailwind CSS** - Framework CSS utilitario para estilos personalizables

### APIs
- **PokeAPI** - API de Pokémon gratuita y sin necesidad de autenticación

### Herramientas de Desarrollo
- **ESLint** - Linter para mantener la calidad del código
- **Prettier** - Formateador de código consistente
- **React Developer Tools** - Extensión para depuración
- **Git** - Control de versiones

## Requisitos Previos

- Node.js (v14 o superior)
- npm o yarn

## 📂 Estructura del Proyecto

```
src/
├── components/              # Componentes reutilizables
│   ├── PokemonComponents/    # Componentes específicos de Pokémon
│   └── ui/                   # Componentes de interfaz de usuario
├── pages/                   # Componentes de página
├── services/                # Lógica de servicios y API
│   └── api.js              # Configuración y llamadas a la API
├── hooks/                   # Hooks personalizados
│   ├── usePokemonPagination.js # Lógica de paginación
│   └── useInfiniteScroll.js # Lógica de scroll infinito
├── utils/                   # Utilidades y helpers
│   └── ColorType.js         # Mapeo de colores para tipos de Pokémon
├── App.jsx                  # Componente principal de la aplicación
└── main.jsx                 # Punto de entrada de la aplicación
```

## 🚀 Instalación y Uso

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/eber2k1/pokedemo.git
   cd pokedemo
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir en el navegador**
   La aplicación estará disponible en [http://localhost:5173](http://localhost:5173)

### 📋 Guía de Estilo

- Usa componentes funcionales con Hooks
- Sigue las convenciones de nomenclatura de React
- Mantén los componentes pequeños y enfocados en una sola responsabilidad
- Documenta los props con PropTypes
- Escribe pruebas para nuevo código

## Licencia

Distribuido bajo la licencia MIT. Ver `LICENSE` para más información.

Enlace al proyecto: [https://github.com/eber2k1/pokedemo](https://github.com/eber2k1/pokedemo)

## 🌟 Agradecimientos

- [PokeAPI](https://pokeapi.co/) - Por proporcionar una API de Pokémon increíble y gratuita
- [Vite](https://vitejs.dev/) - Por la experiencia de desarrollo ultrarrápida
- [Tailwind CSS](https://tailwindcss.com/) - Por revolucionar la forma en que estilamos aplicaciones web
- [React](https://reactjs.org/) - Por hacer que la construcción de interfaces de usuario sea más accesible
- [React Icons](https://react-icons.github.io/react-icons/) - Por proporcionar una amplia gama de iconos

Hecho por [Eber Angel Solano Geldres](https://github.com/eber2k1) - ¡Gracias por visitar!
