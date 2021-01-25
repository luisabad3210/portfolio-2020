import React, {Component} from 'react';
import ProfileImg from '../images/profile-pic.png';
import NewsFeed from './newsFeed';
import OldPortfolio from '../images/oldPortfolio.png'
import ProjectOne from '../images/projectOne.png';
import ProjectTwo from '../images/projectTwo.png';
import TodoApp from '../images/todo-app.png'

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
            createNewsFeed('Tue Feb 04 2020', 'Welcome to my portfolio page,  Before you go on, this page is best viewed on a desktop but also enjoyable on a small device. Feel free to explore around by writing on my portfolio wall and liking and commenting posts. There’s something always being added to this page like new features and projects, so you might see a few glitches here and there lol', [], 0),
            createNewsFeed('Tue Feb 04 2020', 'Click on the image bellow to view projects', [], 0),
            createNewsFeed('Tue Feb 04 2020', 'Created this cool Todo app', [], 0),
            createNewsFeed('Mon Jan 25 2021', <a href="https://luisabad3210.github.io/todo" target='_blank' rel="noreferrer"><img src={TodoApp} width='100%' height='220%' alt='' title=''/></a>, [], 0),
            createNewsFeed('Tue Feb 04 2020', 'Checkout my old protfolio bellow', [], 0),
            createNewsFeed('Tue Feb 04 2020', <a href="http://luisabad3210.github.io/facebook/" target='_blank' rel="noreferrer"><img src={OldPortfolio} width='100%' height='220%' alt='' title=''/></a>, [], 0),
            createNewsFeed('Tue Feb 04 2020', 'Checkout my Twitter mockup bellow', [], 0),
            createNewsFeed('Tue Feb 04 2020', <a href="http://luisabad3210.github.io/twitter/" target='_blank' rel="noreferrer"><img src={ProjectOne} width='100%' height='220%' alt='' title=''/></a>, [], 0),
            createNewsFeed('Tue Feb 04 2020', 'Checkout my IOS calculator bellow', [], 0),
            createNewsFeed('Tue Feb 04 2020', <a className='calculatorPrj' href="https://luisabad3210.github.io/calculator-app/" target='_blank' rel="noreferrer"><img src={ProjectTwo} width='50%' height='50%' alt='' title=''/></a>, [], 0),
        ],
    }

    render() {
        return (
            <div className='postContainer'>
                <div className='section1'>
                    <h2>Create</h2>
                    <div>
                        <div className='postInputContainer'>
                            <img src={ProfileImg} width='50px' height='50px' alt='' title=''/>
                            <input className='postInput' id='post-input' placeholder="What's on your mind?"
                                
                                onChange = {(event)=> {
                                    let text = event.target.value;
                                    if (text !== '') {
                                        this.setState({isPosting: true})                                        
                                    } else {
                                        this.setState({isPosting: false})
                                    }
                                    this.setState({response: text});
                                }}
                            ></input>
                        </div>
    
                        <hr></hr>
                        <div className='postBtnContainer'>
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