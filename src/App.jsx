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
        </>

    )
}