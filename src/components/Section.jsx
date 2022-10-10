import PropTypes from 'prop-types';

export const Section = ({ title = "" , paragraphs = [] , codes = [] }) => {
    

    return (
        <div className="section">
            <h2 className="section-title">{title}</h2>

            { paragraphs.map( paragraph => <p key={ paragraph}>{ paragraph }</p> ) }
            { codes.map( code => <code key={ code }>{ code }</code> ) }
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    paragraphs: PropTypes.array.isRequired,
    codes: PropTypes.array,
}