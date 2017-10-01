import React, { Component } from 'react';
import '../styles/post.scss'
import { browserHistory } from 'react-router';
import heart from '../assets/heart.svg';
import heartRed from '../assets/heart-red.png';

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

    unlike = () => {
        this.props.unlikePost(this.props.question.questionId);
    }

    handleLikeClick = () => {
        this.setState({heart: !this.state.heart}, function() {
            if (this.state.heart) {
                this.like();
            } else {
                this.unlike();
            }
        });
    }

    render() {
        return (
            <div className="post">

                <div className="title">
                    {this.props.question.question}
                </div>

                <div className="like" onClick={() => {this.handleLikeClick()}}>
                    <img src={this.state.heart ? heartRed : heart} />
                    <div className="likeCount">
                        {this.props.question.likes}
                    </div>
                </div>

            </div>
        );
    }
}

export default Post;