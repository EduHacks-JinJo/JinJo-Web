import React, { Component } from 'react';
import '../styles/room.scss'
import { browserHistory } from 'react-router';
import Post from './Post';
import NewPost from './NewPost';

class Room extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.getQuestions(this.props.roomId);
    }

    render() {
        console.log(this.props);
        return (
            <div className="room">

                <div className="roomTitle">
                    {this.props.roomId}
                </div>

                <div className="postsList">

                    <NewPost askQuestion={(question) => {this.props.askQuestion(question, this.props.roomId)}} />

                    <Post question={{
                        question: 'Is register %rax valid?',
                        likes: 10,
                    }}/>

                    <Post question={{
                        question: 'What is the CPU Pipeline?',
                        likes: 12,
                    }}/>

                    {
                        this.props.questions.map(question => {
                            <Post post={question} likeQuestion={() => {this.props.likeQuestion(question.questionID)}} unlikeQuestion={() => {this.props.unlikeQuestion(question.questionID)}} />
                        })
                    }

                </div>

            </div>
        );
    }
}

export default Room;