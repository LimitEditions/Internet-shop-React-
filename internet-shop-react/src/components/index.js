import React from 'react';
import '../style/style.css';
import Header from '../components/Header';
import Main from '../components/Main';
import Nav from '../components/Nav';
import FuturedItems from '../components/FuturedItems';
import Order from './Order';
import Subscribe from './Subscribe';
import Footer from './Footer';



function Index() {
    return (
        <div>
            <Header/>
            <Main />
            <Nav />
            <FuturedItems />
            <Order/>
            <Subscribe />
            <Footer />

        </div>)
}

export default Index;