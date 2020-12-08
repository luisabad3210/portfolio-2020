import React from 'react';
import Arrow from '../components/images/down-arrow.png';
import Contact from '../components/contact/contact';
import Profile from './user';
import {Link} from 'react-router-dom'

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
                        <Link to='/'>
                            <button className='headerBtn'>Post</button>
                        </Link>
                        <Link to='/about'>
                            <button className='headerBtn'>About</button>
                        </Link>
                        <Link to='/friend'>
                            <button className='headerBtn'>Friends</button>
                        </Link>
                        <Link to='/photos'>
                            <button className='headerBtn'>Photos</button>
                        </Link>
                        <Link to='/videos'>
                            <button className='headerBtn'>Videos</button>
                        </Link>
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