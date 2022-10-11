export const ContainerSections = () => {
    return (
        <div className="container-sections">
            <div className="section">
                <h2 className="section-title" id="INSTALAR">INSTALAR</h2>
                <p> Para instalar SASS en React, debes usar el comando: </p>
                <code>npm i sass</code>
            </div>

            <div className="section">
                <h2 className="section-title" id="ARCHIVO">ARCHIVO</h2>

                <p>
                    Para crear estilos con sass, creamos un archivo con la extension .scss
                </p>

                <p>
                    Luego para usar este archivo en React.js, simplemente lo importamos como cualquier archivo .css
                </p>

                <code>
                    import "./style/style.scss"
                </code>
            </div>
            
            <div className="section">
                <h2 className="section-title" id="CODIGO PARCIAL">CODIGO PARCIAL</h2>

                <p>
                    Se pueden crear codigos de estilo parciales, para luego ser usado en otros archivos, siendo mas legible y mantenible.
                </p>

                <p>
                    Para declarar un archivo de estilo parcial, se coloca al principio del nombre del archivo un _ (Guion bajo)
                </p>

                <code>
                    _parcial-style.scss
                </code>

                <p>
                    Para ser usado en otro archivo de estilo, se debe colocar:
                </p>

                <code>
                    @use "./parcial-style"
                </code>
            </div>
            
            <div className="section">
                <h2 className="section-title" id="VARIABLES">VARIABLES</h2>

                <p>
                    Sass permite crear variables para luego ser reusado, esto usando $ (simbolo de dolar).
                </p>

                <code>
                    $primary-color: red
                </code>

                <p>
                    Estas variables tambien se pueden exportar si estan dentro de codigos de estilo parciales.
                </p>

                <code>
                    @use "./parcial-style" <br/>
                    h1 &#123; <br/>
                    &emsp; background-color: parcial-style<br/>
                    &#125; <br/>
                </code>
            </div>
            
            <div className="section">
                <h2 className="section-title" id="OPERADORES">OPERADORES</h2>

                <p>
                    En Sass se pueden usar los siguientes operadores:
                </p>

                <code>
                    + sumar <br/>
                    - restar <br/>
                    * multiplicar <br/>
                    / dividir <br/>
                    % porcentaje <br/>
                    == igual <br/>
                    != distinto <br/>
                </code>
            </div>
            
            <div className="section">
                <h2 className="section-title" id="ANIDADO">ANIDADO</h2>

                <p>
                    Para mejorar la legibilidad y el matenimiento, Sass permite anidar elementos hijos dentro del padre.
                </p>

                <code>
                    div &#123;                  <br/>
                    &emsp; h1 &#123;            <br/>
                    &emsp; &emsp; color: black; <br/>
                    &emsp; &#125;               <br/>
                    &#125;                      <br/>
                </code>

                <p>
                    No solamente pueden ser elementos html, tambien pueden ser pseudoelementos si se pone & (and).
                </p>

                <code>
                    div &#123;                      <br/>
                    &emsp; &:hover &#123;           <br/>
                    &emsp; &emsp; background: grey; <br/>
                    &emsp; &#125;                   <br/>
                    &#125;                          <br/>
                </code>

            </div>
            
            <div className="section">
                <h2 className="section-title" id="MIXIN">MIXIN</h2>

                <p>
                    Puedes crear mezclas para tener ajustes preconfigurados que cambian segun una variable. Esto colocando:
                </p>

                <code>
                    @mixin name ($var: red) &#123;  <br/>
                    &emsp; background: $var;        <br/>
                    &emsp; color: rgba($var, .25);  <br/>
                    &#125;                          <br/>
                </code>

                <p>
                    Para usarlo debes colocar:
                </p>

                <code>
                    h1 &#123;                           <br/>
                    &emsp; @include name ($var: Black)  <br/>
                    &#125;                              <br/>
                </code>
            </div>

            <div className="section">
                <h2 className="section-title" id="EXTENDER">EXTENDER</h2>

                <p>
                    A veces desearemos extender las mismas propiedades a otros elementos. Para esto debemos usar % (Simbolo de porcentaje)
                </p>

                <code>
                    % name-extend &#123;  <br/>
                    &emsp; ...styles      <br/>
                    &#125;                <br/>
                </code>

                <p>
                    Para usarlo necesitamos colocar dentro del elemento a heredar lo siguiente:
                </p>

                <code>
                    h1 &#123;                           <br/>
                    &emsp; @extend % name-extend        <br/>
                    &#125;                              <br/>
                </code>
            </div>
            

        </div>
    )
}
