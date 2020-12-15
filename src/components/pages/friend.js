import React from 'react';
import Header from '../header';
import {Link} from 'react-router-dom';


const Friend = ({profile}) => {
    return (
        <div>
            <Header profile={profile}/>
            <div className='profilePageContainer'>
                <div className='profilePageSection'>
                    <div className='sectionContainer'>
                        <div className='pageSection'>
                            <h2>Friends section under construction</h2>
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

export default Friend;