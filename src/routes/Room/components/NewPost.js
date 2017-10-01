import React, { Component } from 'react';
import '../styles/newPost.scss'
import { browserHistory } from 'react-router';

class NewPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            heart: false,
        }
    }

    askQuestion = () => {
        let question = document.getElementById('newquestion').value;
        if (question !== '') {
            this.props.askQuestion(question);
            document.getElementById('newquestion').value = '';
        }
    }

    render() {
        return (
            <div className="newPost">

                <div className="title">
                    Ask your Question:
                </div>
                <div className="input">
                    <input id='newquestion' type="text" placeholder="Type your question..."/>
                </div>
                <div className="button" onClick={() => this.askQuestion()}>
                    ASK
                </div>

            </div>
        );
    }
}

export default NewPost;