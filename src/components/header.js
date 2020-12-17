import React from 'react';
import Arrow from '../components/images/down-arrow.png';
import Contact from '../components/contact/contact';
import {Link} from 'react-router-dom'

const Header = ({profile}) => {
    return (
        <div className='headerContainer'>
            <div className='headerSection'>
                <div className='headerBackgroundPic'>
                    
                </div>
                <div className='headerInfo'>
                        <div className='headerInfoContainer'>
                            <div className='profilePic'></div>
                            <h1>{profile.firstName + ' ' + profile.lastName}</h1>
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
                            <button className='headerBtn gone2'>Photos</button>
                        </Link>
                        <Link to='/videos'>
                            <button className='headerBtn gone'>Videos</button>
                        </Link>

                        <div className='dropdown gone'>
                            <button className='headerBtn center'>More <img className='headerArrow' src={Arrow} alt='' title=''/></button>
                            <div className='dropdown-content'>
                                More coming soon!
                            </div>
                        </div>

                        <div className='contactContainer' >
                            <Contact profile={profile}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;