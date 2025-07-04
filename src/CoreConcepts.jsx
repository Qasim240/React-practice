import React from 'react'

const CoreConcepts = ({ image, title, description }) => {
    return (
        <>
            <div>
                <img src={image} alt={title} />
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </>
    )
}

export default CoreConcepts