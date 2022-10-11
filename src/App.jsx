import { Section } from "./components/Section"

import "./config.scss"
import "./style/title-section.scss"

export const App = () => {
    return (
        <>
            <div className="title-section">
                <h1>Aprendiendo<br/>SASS</h1>
            </div>
        
            <Section 
                title="INSTALAR"
                text={[
                    [ "paragraph" , "Para instalar SASS en React, debes usar el comando:"],
                    [ "code" , "npm i sass" ],
                ]}
            />
            <Section 
                title="ARCHIVO"
                text={[
                    [ "paragraph" , "Para crear estilos con sass, creamos un archivo con la extension .scss"],
                    [ "paragraph" , "Luego para usar este archivo en React.js, simplemente lo importamos como cualquier archivo .css"],
                    [ "code" , `import "./style/style.scss"`],
                ]}
            />
            <Section 
                title="CODIGO PARCIAL"
                text={[
                    [ "paragraph" , "Se pueden crear codigos de estilo parciales, para luego ser usado en otros archivos, siendo mas legible y mantenible."],
                    [ "paragraph" , "Para declarar un archivo de estilo parcial, se coloca al principio del nombre del archivo un _ (Guion bajo)."],
                    [ "code" , "_parcial-style.scss" ],
                    [ "paragraph" , "Para ser usado en otro archivo de estilo, se debe colocar:"],
                    [ "code" , `@use "./parcial-style"`],
                ]}
            />
            <Section 
                title="VARIABLES"
                text={[
                    [ "paragraph" , "Sass permite crear variables para luego ser reusado, esto usando $ (simbolo de dolar)."],
                    [ "code" , "$primary-color: red" ],
                    [ "paragraph" , "Estas variables tambien se pueden exportar si estan dentro de codigos de estilo parciales."],
                    [ "code" , `@use "./parcial-style"` ],
                    [ "code" , "h1 {" ],
                    [ "code" , "____background-color: parcial-style.$primary-color;" ],
                    [ "code" , "}" ],
                ]}
            />
            <Section 
                title="OPERADORES"
                text={[
                    [ "paragraph" , "En Sass se pueden usar los siguientes operadores:"],
                    [ "code" , "+ sumar" ],
                    [ "code" , "- restar" ],
                    [ "code" , "* multiplicar" ],
                    [ "code" , "/ dividir" ],
                    [ "code" , "% porcentaje" ],
                    [ "code" , "== igual" ],
                    [ "code" , "!= distinto" ],
                    [ "code" , "< menor a" ],
                    [ "code" , "> mayor a" ],
                    [ "code" , ">= mayor o igual a" ],
                    [ "code" , "<= menor o igual a" ],
                ]}
            />
            <Section 
                title="ANIDADO"
                text={[
                    [ "paragraph" , "Para mejorar la legibilidad y el matenimiento, Sass permite anidar elementos hijos dentro del padre."],
                    [ "code" , "div {" ],
                    [ "code" , "___h1 {" ],
                    [ "code" , "______color: black;" ],
                    [ "code" , "___}" ],
                    [ "code" , "}" ],

                    [ "paragraph" , "No solamente pueden ser elementos html, tambien pueden ser pseudoelementos."],
                    [ "code" , "div {" ],
                    [ "code" , "___:hover {" ],
                    [ "code" , "______background: grey;" ],
                    [ "code" , "___}" ],
                    [ "code" , "}" ],
                ]}
            />
            <Section 
                title="MIXIN"
                text={[
                    [ "paragraph" , "Puedes crear mezclas para tener ajustes preconfigurados que cambian segun una variable. Esto colocando:"],
                    [ "code" , "@mixin name ($var: Red) {" ],
                    [ "code" , "____background: $var" ],
                    [ "code" , "____color: rgba($var, .25)" ],
                    [ "code" , "}" ],
                    [ "paragraph" , "Para usarlo debes colocar:"],
                    [ "code" , "h1 {" ],
                    [ "code" , "____@include name($var: Black)" ],
                    [ "code" , "}" ],
                ]}
            />
            <Section 
                title="HEREDAR / EXTENDER"
                text={[
                    [ "paragraph" , "A veces desearemos extender las mismas propiedades a otros elementos. Para esto debemos usar % (Simbolo de porcentaje)"],
                    [ "code" , "% name-extend {" ],
                    [ "code" , "...styles" ],
                    [ "code" , "}" ],
                    [ "paragraph" , "Para usarlo necesitamos colocar dentro del elemento a heredar lo siguiente:"],
                    [ "code" , "h1 {" ],
                    [ "code" , "___@extend % name-extend" ],
                    [ "code" , "}" ],
                ]}
            />
        </>

    )
}