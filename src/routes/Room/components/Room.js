import React, { Component } from 'react';
import '../styles/room.scss'
import { browserHistory } from 'react-router';
import Post from './Post';

class Room extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        console.log(this.props);
        return (
            <div className="room">

                <div className="roomTitle">

                    {this.props.roomId}

                </div>

                <div className="postsList">

                    <NewPost />

                    <Post question={{
                        question: 'Is register %rax valid?',
                        likes: 10,
                    }}/>

                    <Post question={{
                        question: 'What is the CPU Pipeline?',
                        likes: 12,
                    }}/>

                    {
                        this.props.questions.map(post => {

                            <Post post={post} />
                        })
                    }

                </div>

            </div>
        );
    }
}

export default Room;