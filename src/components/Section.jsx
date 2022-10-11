import PropTypes from 'prop-types';

import "../style/section.scss"

export const Section = ({ title = "" , text = []}) => {
    const textSection = () => {
        return text.map( paragraph => {
            switch (paragraph[0]) {
                case "paragraph":
                    return <p key={paragraph[1]}>{paragraph[1]}</p>;
                    
                case "code":
                    return <code key={paragraph[1]}>{paragraph[1]}</code>;
            }
        })
    }

    return (
        <div className="section">
            <h2 className="section-title">{title}</h2>
            { textSection() }
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.array.isRequired,
}