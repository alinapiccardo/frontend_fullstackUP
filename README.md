# Fullstack Web Development

![Badge en Desarollo](https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green)

Fullstack Web Development - Repositorio Remoto para la segunda parte del TP integrador

- **Alumna**: Alina Piccardo
- **Profesora**: Maria Belen Alegre
- **Clase**: Full Stack Web Development - LUN 19hs

# 💻 Frontend del Proyecto

Este proyecto frontend está desarrollado en React y utiliza diversas librerías y tecnologías para ofrecer una experiencia de usuario atractiva y funcional. Aquí se presenta una breve descripción de los principales archivos y componentes utilizados en la aplicación.

## 🗒️ Archivos Principales

### `App.js`

El componente principal de la aplicación que maneja la navegación y renderiza diferentes vistas según la ruta actual. Además, controla el estado del Navbar y realiza la autenticación del usuario.

### `Inicio.jsx`

Un componente funcional que maneja la vista de inicio de sesión. Permite al usuario ingresar su nombre de usuario y contraseña para acceder a la aplicación.

### `Home.jsx`

El componente principal de la vista Home, donde el usuario puede crear atuendos seleccionando un personaje y eligiendo la ropa correspondiente. También muestra un resumen del atuendo seleccionado.

### `AllOutfits.jsx`

Muestra atuendos creados por otros usuarios para que el usuario actual pueda inspirarse. Utiliza la información de los personajes y atuendos almacenados en el backend.

### `MyCharacters.jsx`

Muestra los personajes y atuendos creados por el usuario actual. Permite al usuario ver sus propios atuendos y personajes almacenados en el backend.

## ♻️ Componentes Reutilizables

### `NavBar.jsx`

El componente de barra de navegación que proporciona enlaces a diferentes secciones de la aplicación. Aparece solo en determinadas rutas para mejorar la experiencia del usuario.

### `Footer.jsx`

Un componente simple que muestra información de contacto o cualquier otro contenido relevante en la parte inferior de la aplicación.

## 🎨 Librerías y Estilos

- **React Router DOM:** Utilizado para la gestión de las rutas y la navegación dentro de la aplicación.

- **@material-tailwind/react:** Biblioteca que proporciona componentes de interfaz de usuario siguiendo el diseño de Material y Tailwind CSS.

- **Tailwind CSS:** Marco de diseño de utilidad que facilita la creación de estilos rápidos y receptivos.

- **Axios:** Biblioteca para realizar peticiones HTTP al backend y gestionar la comunicación con el servidor.

## ⚙️ Configuración y Estado Global

- **Redux:** Utilizado para gestionar el estado global de la aplicación, especialmente para el manejo del usuario autenticado.

- **useEffect y useState:** Hooks de React utilizados para realizar operaciones asíncronas y gestionar el estado local de los componentes.

## 🚀 Instalación y Ejecución

Para ejecutar la aplicación, asegúrese de tener Node.js instalado en su sistema. Luego, clone el repositorio y ejecute los siguientes comandos:

```bash
# Instalar dependencias
npm install

# Iniciar la aplicación
npm start
```

Esto iniciará la aplicación en modo de desarrollo y abrirá automáticamente una nueva ventana del navegador.
