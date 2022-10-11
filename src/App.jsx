import { ContainerSections } from "./components/ContainerSections"

import "./config.scss"
import "./style/title-section.scss"

export const App = () => {
    return (
        <>
                <div className="title-section">
                    <h1>Aprendiendo<br/>SASS</h1>
                </div>
                <ContainerSections />    
        </>

    )
}