import React from 'react';
import {Link} from 'react-router-dom';
import Search from '../images/search-icon.png';

const Watch = () => {
    return (
        <div className='pageContainer'>
            <div className='navSection'>
                <h2>Watch</h2>
                <div className='searchContainer'><button className='navSearchBtn'><img src={Search} width='15px' height='15px' alt='' title=''/></button><input className='navSearchBar' placeholder='Search videos'></input></div>
                <hr></hr>
            </div>

            <div className='sectionContainer'>
                <div className='pageSection'>
                    <h2>Watch page under construction</h2>
                    <p>Please go back to profile page</p>
                    <Link to='/'>
                        <button className='backToProfile'>Profile</button>
                    </Link>
                </div>
            </div>
            
        </div>
        );
}

export default Watch;