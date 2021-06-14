import React from 'react';

import Header from '../components/Header/';
import Footer from '../components/Footer/';
import Greetings from '../components/Greetings/';
import WhyUs from '../components/WhyUs/';

function Landing(){
    return(
        <div className='landing-page'>
            <Header />
            {/* SECTION */}
                <Greetings />
                <WhyUs />
                {/* ABOUT US */}
                {/* OUR TEAM */}
                {/* SERVICES */}
                {/* CONTACTS */}
            <Footer />
        </div>
    )
}

export default Landing;