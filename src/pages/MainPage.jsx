import React from 'react';
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Hero from "../components/sections/Hero/Hero.jsx";
import About from "../components/sections/About/About.jsx";
import Why from "../components/sections/Why/Why.jsx";
import Trade from "../components/sections/Trade/Trade.jsx";
import Client from "../components/sections/Client/Client.jsx";
import Move from "../components/sections/Move/Move.jsx";
import SEO from "../components/SEO/SEO.jsx";
import Info from "../components/sections/Info/Info.jsx";
import Markets from "../components/sections/Markets/Markets.jsx";
import Accounts from "../components/sections/Accounts/Accounts.jsx";


const MainPage = () => {
    return (
        <>
            <SEO
                title="Absolute Finance — Trading Platform"
                description="Trade CFDs on Forex, Crypto and Stocks with Absolute Finance"
                keywords="trading, forex, crypto, stocks, cfd"
                canonical="https://test.com/"
            />
            <Header />
            <div className='main'>
                <Hero />
                <About />
                <Why />
                <Markets />
                <Info />
                <Accounts />
                <Trade />
                <Client />
                <Move />
            </div>
            <Footer />
        </>
    );
};

export default MainPage;
