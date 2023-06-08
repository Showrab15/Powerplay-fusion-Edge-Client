import React from 'react';
import Header from '../../Header/Header';
import Sponsors from '../../Sponsors/Sponsors';
import ShortSuccessList from '../../ShortSuccessList/ShortSuccessList';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Sponsors></Sponsors>
            <ShortSuccessList></ShortSuccessList>
        </>
    );
};

export default Home;