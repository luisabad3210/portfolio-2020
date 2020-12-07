import React from 'react';
import Arrow from '../components/images/down-arrow.png';
import Contact from '../components/contact/contact';
import Profile from './user';

const Header = () => {
    return (
        <div className='headerContainer'>
            <div className='headerSection'>
                <div className='headerBackgroundPic'>
                    
                </div>
                <div className='headerInfo'>
                        <div className='headerInfoContainer'>
                            <div className='profilePic'></div>
                            <h1>{Profile.user.firstName + ' ' + Profile.user.lastName}</h1>
                            {/* <p>{User.bio}</p> */}
                        </div>
                    <hr></hr>
                    <div className='headerBtnContainer'>
                        <button className='headerBtn'>Post</button>
                        <button className='headerBtn'>About</button>
                        <button className='headerBtn'>Friends</button>
                        <button className='headerBtn'>Photos</button>
                        <button className='headerBtn'>Videos</button>
                        <button className='headerBtn center'>More <img className='headerArrow' src={Arrow} /></button>
                        <div className='contactContainer' >
                            <Contact/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;