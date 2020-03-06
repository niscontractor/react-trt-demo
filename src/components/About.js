import React from 'react';

const About = (props) => {
    const { title } = props;
    return (
        <div>
            <h3>{title}</h3>
            <p>About Component</p>
        </div>
    )
}

export default About;