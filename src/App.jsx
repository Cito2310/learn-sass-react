import { ContainerSections } from "./components/ContainerSections"
import { Section } from "./components/Section"
import { SideBar } from "./components/SideBar"

import "./config.scss"
import "./style/title-section.scss"

export const App = () => {
    return (
        <>
            <SideBar />

            <div className="content">
                <div className="title-section">
                    <h1>Aprendiendo<br/>SASS</h1>
                </div>
                <ContainerSections />
            </div>
        
        </>

    )
}