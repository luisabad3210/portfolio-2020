import React from 'react';
import {Link} from 'react-router-dom';

const Groups = () => {
    return (
        <div className='pageContainer'>
            <div className='navSection'>
                <h2>Groups</h2>
                <hr></hr>
            </div>

            <div className='sectionContainer'>
                <div className='pageSection'>
                    <h2>Groups page under construction</h2>
                    <p>Please go back to profile page</p>
                    <Link to='/'>
                        <button className='backToProfile'>Profile</button>
                    </Link>
                </div>
            </div>
            
        </div>
        );
}

export default Groups;