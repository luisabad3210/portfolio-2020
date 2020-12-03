import React from 'react';
import Profile from './images/profile-pic.png';
import Resume from './images/resume.png';
import Pdf from './images/resume.pdf';

const Content = ({profile}) => {

    const download = () => {
        console.log('thank you for downloading my resume')
    }

    return (
        <div className='contentContainer'>
            <div className='contentSection'>
                <div className='contentLeft'>
                    <div className='intro'>
                        <h2>Intro</h2>
                        <p>{profile.bio}</p>
                        <p><img src="https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/T_U3HeH9U6x.png" width='15px' height='15px'/> {profile.profession}</p>
                        <p><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/0WfUR2KWqGs.png" width='15px' height='15px'/> Went to <a href='https://www.digitalcrafts.com/atlanta-campus.html' >{profile.education}</a></p>
                        <p><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/ff2xkdFtGUz.png" width='15px' height='15px'/> Lives in <a href='https://www.facebook.com/places/Things-to-do-in-Atlanta-Georgia/107991659233606/' >{profile.currentCity}</a></p>
                        <p><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/aH4CTEpBLHC.png" width='15px' height='15px' /> From <a href='https://www.facebook.com/places/Things-to-do-in-New-York-New-York/108424279189115/' >{profile.homeTown}</a></p>
                        <div className='resumeContainer'>
                            <a href={Pdf} download onClick={download}>
                                <img className='resume' src={Resume} width='400px'/>
                            </a>
                        </div>
                    </div>
                    <div className='badges'><h2>Badges</h2></div>
                    Portfolio 2020
                </div>

                <div className='contentRight'>
                    <div className='section1'><h2>Create</h2>
                        <div>
                            <div className='postInputContainer'><img src={Profile} width='50px' height='50px'/><input className='postInput' placeholder="What's on your mind?"></input></div>
                            <hr></hr>
                            <button className='postBtn'>Post</button>
                        </div>
                    </div>
                    <div className='section2'></div>
                    <div className='section2'></div>
                    <div className='section2'></div>
                    <div className='section2'></div>
                </div>
            </div>
        </div>
    );
}

export default Content;