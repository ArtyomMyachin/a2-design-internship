import React from 'react';
import Header from './../../Header';
import Main from './Main';

const Home = () => {

    const isCurrent = [true, false, false];

    return (
        <div className="home">
            <Header isCurrent={isCurrent}/>
            <Main/>
        </div>
    );
}

export default Home;