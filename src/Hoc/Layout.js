import React from 'react';
import Header from '../Components/Header_footer/Header';
import Footer from '../Components/Header_footer/Footer';
import Home from '../Components/Home';


const Layout = (props) => {
    return (
        <div>
            <Header />
                <Home />
            <Footer />
        </div>
    )
}

export default Layout;