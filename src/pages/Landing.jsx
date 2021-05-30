import React from 'react';

import Header from '../components/Header/';
import Footer from '../components/Footer/';
import Greetings from '../components/Greetings/';

function Landing(){
    return(
        <div className='landing-page'>
            <Header />
            {/* SECTION */}
                <Greetings />
                {/* ABOUT US */}
                {/* OUR TEAM */}
                {/* SERVICES */}
                {/* CONTACTS */}
            <Footer />
        </div>
    )
}

export default Landing;