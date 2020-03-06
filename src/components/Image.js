import React from 'react';
import aboutUsHead from '../assets/about-us-head.png';

const Image = (props) => {
    const { title } = props;
    return (
        <div>
            <h3>{title}</h3>
            <img src={aboutUsHead} alt="logo" />
        </div>
    )
}

export default Image;