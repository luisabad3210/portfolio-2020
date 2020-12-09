import React, {Component} from 'react';
import NewsFeedPost from './newsFeedPost';

class NewsFeed extends Component {
    render() {
        return (
            <div> 
                {this.props.content.map((feed, index) => {
                    return <NewsFeedPost 
                        key={index}
                        index={index}
                        feed={feed}
                        magicalFunction = {this.props.magicalFunction}
                        />
                })}
            </div>
        )
    }
}

export default NewsFeed 