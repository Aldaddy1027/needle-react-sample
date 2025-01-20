import "@needle-tools/engine";
import { NeedleEngineAttributes } from "@needle-tools/engine";
import React, { ReactElement } from "react";

/**
 * Componente React que representa el elemento personalizado `<needle-engine>` del Needle Engine.
 *
 * Este componente actúa como un contenedor para integrar el motor 3D de Needle en una aplicación React.
 * Acepta atributos específicos definidos por `NeedleEngineAttributes` y permite incluir contenido como hijos.
 *
 * @param {NeedleEngineAttributes | { children?: any }} props - Propiedades del componente.
 * @param {React.ReactNode} [props.children] - Elementos secundarios que se renderizarán dentro del contenedor `<needle-engine>`.
 * @returns {ReactElement<NeedleEngineAttributes>} Elemento React que representa el contenedor del Needle Engine.
 *
 * @example
 * ```tsx
 * <NeedleEngine style={{ width: "100%", height: "100%" }} loading-style="dark">
 *   <button onClick={handleClick}>Interactuar</button>
 * </NeedleEngine>
 * ```
 */
export function NeedleEngine(
    props: NeedleEngineAttributes | { children?: any }
): ReactElement<NeedleEngineAttributes> {
    return (
        <needle-engine {...props}>
            {props.children}
        </needle-engine>
    );
}
