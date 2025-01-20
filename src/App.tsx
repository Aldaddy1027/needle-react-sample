import React, { useRef } from 'react';
import { NeedleEngine } from './NeedleEngine';
import { ContextRegistry, GameObject, Rigidbody } from '@needle-tools/engine';
import { Vector3 } from 'three';

/**
 * Genera un número aleatorio en un rango específico.
 *
 * @param {number} min - Valor mínimo del rango.
 * @param {number} max - Valor máximo del rango.
 * @returns {number} Un número aleatorio entre el rango especificado.
 */
function randFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const App = () => {
  /**
   * Almacena las referencias a todos los objetos `Rigidbody` en la escena.
   * @type {Rigidbody[]}
   */
  const bodies: Rigidbody[] = [];

  /**
   * Callback que se ejecuta cuando un nuevo contexto de Needle Engine es creado.
   * Busca y almacena todos los objetos `Rigidbody` en la escena.
   */
  ContextRegistry.addContextCreatedCallback((_context) => {
    bodies.push(...GameObject.findObjectsOfType(Rigidbody));
  });

  /**
   * Aplica un impulso instantáneo a todos los objetos `Rigidbody` en la escena.
   * La dirección del impulso es hacia arriba (eje `y`) con una magnitud aleatoria.
   *
   * @function performJump
   * @description Recorre todos los objetos `Rigidbody` y les aplica un impulso. 
   * La magnitud del impulso varía entre 0.5 y 5 para crear un efecto dinámico.
   */
  const performJump = () => {
    // Vector para definir la dirección y magnitud del impulso
    const vec = new Vector3(0, 1, 0);

    // Iterar sobre cada cuerpo rígido en la escena
    bodies.forEach((body) => {
      // Establecer una magnitud aleatoria para el impulso
      vec.set(0, randFloat(0.5, 5), 0);

      // Aplicar el impulso al cuerpo rígido
      body.applyImpulse(vec);
    });
  };

  return (
    <>
      {/* Contenedor principal de Needle Engine */}
      <div id="container" className="needle-container">
        {/* Componente de Needle Engine */}
        <NeedleEngine style={{ position: 'relative', display: 'flex' }} loading-style="light">
          {/* Botón que ejecuta la función performJump */}
          <div style={{ width: '100%', height: '100%' }}>
            <button type="button" onClick={performJump} className="jump-button">
              Squish!
            </button>
          </div>
        </NeedleEngine>
      </div>

      {/* Contenido adicional fuera del canvas */}
      <div
        style={{
          height: '30vh',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {/* Enlaces a la documentación de Needle y React */}
        <h1 style={{ width: 'max(80%, 500px)', textAlign: 'center' }}>
          <a id="needle" href="https://needle.tools" target="_blank">
            Needle Engine
          </a>{' '}
          en{' '}
          <a id="react" href="https://github.com/needle-engine/react-sample" target="_blank">
            React
          </a>
        </h1>
        {/* Descripción del proyecto */}
        <h2 style={{ width: 'min(80%, 800px)', textAlign: 'center' }}>
          El canvas puede ser transparente, permitiendo una experiencia visual continua.<br />
          Esto se logra configurando el "Clear mode" de la cámara a "Don't Clear".
        </h2>
      </div>
    </>
  );
};

export default App;
