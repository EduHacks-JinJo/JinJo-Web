import React, { Component } from 'react';
import '../styles/home.scss'

class HomeView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            view: 'student',
            error: null,
        }
    }


    signIn = () => {

        let email = document.getElementById('instructor-signin-email').value;
        let password = document.getElementById('instructor-signin-password').value;

        if (email === '' || password === '') {
            this.setState({
                error: 'signin-completeness-err',
            });
            console.log('error: ', 'signin-completeness-err');
            return;
        }

        this.setState({
            error: null,
        });

        //DO Api

    }

    signUp = () => {

        let email = document.getElementById('instructor-signup-email').value;
        let password = document.getElementById('instructor-signup-password').value;
        let confirmPassword = document.getElementById('instructor-signup-confirmpassword').value;

        if (password === '' || confirmPassword === '' || email === '') {
            this.setState({
                error: 'signup-completeness-err'
            });
            console.log('error: ', 'signup-completeness-err');
            return;
        }

        if (password !== confirmPassword) {
            this.setState({
                error: 'signup-password-err'
            });
            console.log('error: ', 'signup-password-err');
            return;
        }

        this.setState({
            error: null,
        });

        //DO API


    }

    joinRoom = () => {


    }


    render() {
        return (
            <div className="home">

                <div className="title">
                    JinJo
                </div>

                <div className="joinRoom">

                    <div className="studentView" style={this.state.view === "student" ? {} : {display : 'none'}}>
                        <div className="title">
                            Join Room
                        </div>
                        <div className="input">
                            <input placeholder="Room ID" />
                        </div>

                        <div className="join" onClick={() => {this.joinRoom()}}>
                            Join Room
                        </div>
                    </div>

                    <div className="instructorView" style={this.state.view === "instructorSignIn" ? {} : {display : 'none'}}>
                        <div className="title">
                            Sign In
                        </div>

                        <div className="input">
                            <input placeholder="Email" id="instructor-signin-email"/>
                        </div>

                        <div className="input">
                            <input placeholder="Password" id="instructor-signin-password"/>
                        </div>

                        <div className="join" onClick={() => {this.signIn()}}>
                            Sign In
                        </div>
                        <div className="join" onClick={() => {this.setState({view: 'instructorSignUp'})}}>
                            Sign Up
                        </div>
                        <div className="err">
                            {
                                this.state.error === 'signin-completeness-err' ?
                                    <div>Please fill in all fields</div>
                                    :
                                    null
                            }
                        </div>
                    </div>

                    <div className="instructorView" style={this.state.view === "instructorSignUp" ? {} : {display : 'none'}}>
                        <div className="title">
                            Sign Up
                        </div>

                        <div className="input">
                            <input placeholder="Email" id="instructor-signup-email"/>
                        </div>

                        <div className="input">
                            <input placeholder="Password" id="instructor-signup-password"/>
                        </div>
                        <div className="input">
                            <input placeholder="Confirm Password"id="instructor-signup-confirmpassword" />
                        </div>

                        <div className="join" onClick={() => {this.signUp()}}>
                            Sign Up
                        </div>

                        <div className="err">
                            {
                                this.state.error === 'signup-completeness-err' ?
                                    <div>Please fill in all fields</div>
                                    :
                                    null
                            }
                            {
                                this.state.error === 'signup-password-err' ?
                                    <div>Please ensure your passwords match</div>
                                    :
                                    null
                            }
                        </div>
                    </div>
                </div>

                <div className="joinProf">
                    <div className="button" onClick={() => {this.setState({view: 'instructorSignIn'})}}>
                        I'm an Instructor
                    </div>
                </div>

            </div>
        );
    }
}

export default HomeView;