import React, {Component} from 'react';

class NewsFeedPost extends Component {

    state = {
        isCommenting: false,
    }

    render() {
        return (
            <div>
                <div className='newsFeedContainer'>
                    <div><i>Luis Abad</i> created a post</div>
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
                        >Likes</button>
                    </div> 
                </div>
            </div>
        )
    }
}

export default NewsFeedPost;