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
                    <div className='postHeader'> 
                        <img className='commentProfilePic' src={ProfilePic} /> 
                        <div>
                            <div>Luis Abad <i>created a post</i></div>
                            <div><i>{this.props.feed.date}</i><img className='globe' src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/yQ3UwzfyAi-.png" alt="Public"/></div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='bodyFeed'>{this.props.feed.body}</div>
                    <hr></hr>
                    <div>
                        <button
                            className='likeBtn'
                            onClick = {() => {
                            this.props.magicalFunction(this.props.feed, this.props.index)}}
                        >{this.props.feed.likes} Likes</button>
                        <button className='likeBtn'
                        onClick={()=>{
                            let x = this.state.isCommenting;
                            this.setState({isCommenting: !x});
                        }}>
                            Comment
                        </button>
                        <button className='likeBtn'>Share</button>
                        {this.state.isCommenting === true ? <div><hr></hr><div className='searchContainer'><img className='commentProfilePic' src={ProfilePic}/><button className='navSearchBtn'></button><input className='navSearchBar' placeholder='Write a comment...'></input></div></div>: null}
                        
                    </div> 
                </div>
            </div>
        )
    }
}

export default NewsFeedPost;