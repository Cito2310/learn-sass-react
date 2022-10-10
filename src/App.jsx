import { Section } from "./components/Section"

export const App = () => {
    return (
        <Section 
            title="INSTALAR"
            paragraphs={[
                "Para instalar SASS en React, debes usar el comando:"
            ]}
            codes={[
                "npm i sass"
            ]}
        />
    )
}