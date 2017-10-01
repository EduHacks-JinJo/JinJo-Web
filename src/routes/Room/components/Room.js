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

                    {
                        this.props.questions.reverse().map(q =>
                            <Post key={q._id} question={q} likeQuestion={() => {this.props.likeQuestion(q._id)}} unlikeQuestion={() => {this.props.unlikeQuestion(q._id)}} />
                        )
                    }

                </div>

            </div>
        );
    }
}

export default Room;