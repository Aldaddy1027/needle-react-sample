import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * Punto de entrada principal para la aplicación React.
 * Este archivo inicializa la aplicación y monta el componente raíz (`App`) en el DOM.
 *
 * @constant {HTMLElement | null} rootElement - Elemento HTML donde se renderiza la aplicación React.
 * @constant {ReactDOM.Root} root - Instancia del renderizador de ReactDOM.
 *
 * @example
 * En el archivo `index.html`, debe existir un elemento con el ID `root`:
 * ```html
 * <div id="root"></div>
 * ```
 */
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

/**
 * Renderiza el componente raíz `App` dentro del elemento HTML con ID `root`.
 * El componente está envuelto en `<React.StrictMode>` para habilitar comprobaciones adicionales en el desarrollo.
 *
 * @example
 * ```tsx
 * root.render(
 *   <React.StrictMode>
 *     <App />
 *   </React.StrictMode>
 * );
 * ```
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
