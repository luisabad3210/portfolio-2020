import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className='homePageContainer'>
            <div className='pageSection'>
                <h2>Home page under construction</h2>
                <p>Please go back to profile page</p>
                <Link to='/'>
                    <button className='backToProfile'>Profile</button>
                </Link>
            </div>
        </div>
        
        );
}

export default Home;