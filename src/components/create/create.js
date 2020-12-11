import React, {Component} from 'react';
import ProfileImg from '../images/profile-pic.png';
import NewsFeed from './newsFeed';
import OldPortfolio from '../images/oldPortfolio.png'
import ProjectOne from '../images/projectOne.png';
import ProjectTwo from '../images/projectTwo.png';

function createNewsFeed(date, body, comments, likes) {
    return {
        date,
        body,
        comments,
        likes
    };
}

class Post extends Component {

    state = {
        index: null,
        response: '',
        isPosting: false,
        feeds: [
            createNewsFeed('Tue Feb 04 2020', 'Welcome to my portfolio page. Before you go on, this page is best viewed on a  screen width of 1500px or a 13inch MacBook Pro. Feel free to explore around by writing on my portfolio wall, liking, commenting, and even try out dark-mode in the settings. Have fun! :)', [], 0),
            createNewsFeed('Tue Feb 04 2020', 'There’s something always being added to this page like new features and projects, so you might see a few glitches here and there lol', [], 0),
            createNewsFeed('Tue Feb 04 2020', 'Click on the image bellow to view projects', [], 0),
            createNewsFeed('Tue Feb 04 2020', 'Checkout my old protfolio bellow', [], 0),
            createNewsFeed('Tue Feb 04 2020', <a href="http://luisabad3210.github.io/facebook/" target='_blank'><img alt='Twitter project' src={OldPortfolio} width='100%' height='220%' /></a>, [], 0),
            createNewsFeed('Tue Feb 04 2020', <a href="http://luisabad3210.github.io/twitter/" target='_blank'><img alt='Twitter project' src={ProjectOne} width='100%' height='220%' /></a>, [], 0),
            createNewsFeed('Tue Feb 04 2020', <a href="https://luisabad3210.github.io/calculator-app/" target='_blank'><img alt='Calculator project' src={ProjectTwo} width='50%' height='50%' /></a>, [], 0),
        ],
    }

    render() {
        return (
            <div className='postContainer'>
                <div className='section1'>
                    <h2>Create</h2>
                    <div>
                        <div className='postInputContainer'>
                            <img src={ProfileImg} width='50px' height='50px'/>
                            <input className='postInput' id='post-input' placeholder="What's on your mind?"
                                
                                onChange = {(event)=> {
                                    let text = event.target.value;
                                    // console.log(text)
                                    if (text !== '') {
                                        this.setState({isPosting: true})
                                        // clear()
                                        
                                    } else {
                                        this.setState({isPosting: false})
                                    }
                                    this.setState({response: text});
                                }}
                            ></input>
                        </div>
    
                        <hr></hr>
                        <button className={this.state.isPosting === false ? 'postBtnGrey' : 'postBtnBlue'} 
                            onClick={() => {
                            let text = this.state.response
                            if (text === '') {
                                console.log('error')
                            } else {
                                let add = createNewsFeed(new Date().toDateString(), text,[], 0);
                                let x = this.state.feeds;
                                x.unshift(add);
                                this.setState({feeds: x})
                            }
                        }}>Post</button>
                    </div>
                </div>


                <NewsFeed 
                    content={this.state.feeds}
                    magicalFunction = {(feed) => {
                        let current = feed.likes;
                        current === 0 ? feed.likes = 1 : feed.likes = 0;
                        this.setState({x: feed.likes})
                    }}
                />
            </div>
        );
    }
}

export default Post;