import React from 'react';
import ProfileImg from '../images/profile-pic.png';

const Post = ({profile}) => {
    return (
        <div className='postContainer'>
            <div className='section1'>
                <h2>Create</h2>
                <div>
                    <div className='postInputContainer'><img src={ProfileImg} width='50px' height='50px'/><input className='postInput' placeholder="What's on your mind?"></input></div>
                    <hr></hr>
                    <button className='postBtn'>Post</button>
                </div>
            </div>
        </div>
    );
}

export default Post;