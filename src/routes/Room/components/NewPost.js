import React, { Component } from 'react';
import '../styles/newPost.scss'
import { browserHistory } from 'react-router';

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            heart: false,
        }
    }

    like = () => {
        this.props.likePost(this.props.question.questionId);
    }

    render() {
        return (
            <div className="newPost">

                <div className="title">
                    <input placeholder="Type your question..."/>
                </div>

            </div>
        );
    }
}

export default Post;