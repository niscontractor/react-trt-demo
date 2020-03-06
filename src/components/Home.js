
import React from 'react';

const Home = (props) => {
    const { title } = props;
    return (
        <div>
            <h3>{title}</h3>
            <p>Home Component</p>
        </div>
    )
}

export default Home;