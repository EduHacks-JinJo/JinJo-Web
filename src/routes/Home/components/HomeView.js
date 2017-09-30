import React, { Component } from 'react';
import '../styles/home.scss'

class HomeView extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="home">

                <div className="title">
                    JinJo
                </div>

                <div className="joinRoom">

                    <div className="title">
                        Join Room
                    </div>
                    <div className="input">
                        <input placeholder="Room Id" />
                    </div>

                    <div className="join">
                        Join Room
                    </div>
                </div>

                <div className="joinProf">
                    <div className="button">
                        I'm an Instructor
                    </div>
                </div>

            </div>
        );
    }
}

export default HomeView;