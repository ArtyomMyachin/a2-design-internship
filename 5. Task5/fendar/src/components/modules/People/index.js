import React from 'react';
import Header from './../../Header';
import Main from './Main';

const People = () => {

    const isCurrent = [false, true, false];

    return (
        <div className="people">
            <Header isCurrent={isCurrent}/>
            <Main/>
        </div>
    );
}

export default People;