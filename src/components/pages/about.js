import React from 'react';
import Header from '../header';
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div>
            <Header />
            <div className='profilePageContainer'>
                <div className='profilePageSection'>
                    <div className='sectionContainer'>
                        <div className='pageSection'>
                            <h2>About section under construction</h2>
                            <p>Please go back to profile page</p>
                            <Link to='/'>
                                <button className='backToProfile'>Profile</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default About;