import React from 'react';
import {Link} from 'react-router-dom';

const Friends = () => {
    return (
        <div className='pageContainer'>
            <div className='navSection'>
                <h2>Friends</h2>
                <hr></hr>
                <h4>People you may know</h4>
            </div>

            <div className='sectionContainer'>
                <div className='pageSection'>
                    <h2>Friends page under construction</h2>
                    <p>Please go back to profile page</p>
                    <Link to='/'>
                        <button className='backToProfile'>Profile</button>
                    </Link>
                </div>
            </div>
            
        </div>
    );
}

export default Friends;