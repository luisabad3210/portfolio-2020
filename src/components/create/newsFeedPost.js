import React, {Component} from 'react';
import ProfilePic from '../images/profile-pic.png';

class NewsFeedPost extends Component {

    state = {
        isCommenting: false,
    }

    render() {
        return (
            <div>
                <div className='newsFeedContainer'>
                    <div> <img src={ProfilePic} width='35px' height='35px'/> Luis Abad created a post</div>
                    <div>{this.props.feed.date}</div>
                    <hr></hr>
                    <div>{this.props.feed.body}</div>
                    <hr></hr>
                    <div>
                        {this.props.feed.likes}
                            {/* likes button */}
                        <button
                            onClick = {() => {
                            this.props.magicalFunction(this.props.feed, this.props.index)}}
                        >Like</button>
                    </div> 
                </div>
            </div>
        )
    }
}

export default NewsFeedPost;