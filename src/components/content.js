import React from 'react';
import Post from './post/post';
import Profile from './images/profile-pic.png';
import Resume from './images/resume.png';
import Pdf from './images/resume.pdf';
import ReactLogo from './images/badges/react.png'; 
import NodeLogo from './images/badges/node.jpg';
import JavascriptLogo from './images/badges/js.png';
import HtmlLogo from './images/badges/html.png';
import CssLogo from './images/badges/css.png';
import GitLogo from './images/badges/git.png';
import TerminalLogo from './images/badges/terminal.png';
import UIUXLogo from './images/badges/uiux.png';

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
                    <div className='badges'>
                        <h2>Skills</h2>
                        <div className='badgesContainer'>
                            <img className='rotate' src={ReactLogo} width='200px' height='200px'/>
                            <img src={NodeLogo} width='200px' height='200px'/>
                        </div>
                    </div>

                    <div className='badges'>
                        <div className='badgesContainer2'>
                            <div className='badgesContainerCenter'>
                                <img src={JavascriptLogo} width='120px' height='120px'/>
                                <img src={HtmlLogo} width='120px' height='120px'/>
                                <img src={CssLogo} width='120px' height='120px'/>
                            </div>
                            
                            <div className='badgesContainerCenter'>
                                <img src={GitLogo} width='120px' height='120px'/>
                                <img src={TerminalLogo} width='120px' height='120px'/>
                                <img src={UIUXLogo} width='120px' height='80px'/>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className='contentRight'>
                    <Post />
                </div>
            </div>
        </div>
    );
}

export default Content;