/**
 * Created by jeffreydoyle on 2017-09-30.
 */
import React, { Component } from 'react';
import '../styles/instructor.scss'
import { browserHistory } from 'react-router';

class Course extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            createNew: false
        }
    }

    createRoom = () => {
        let roomname = document.getElementById('roomname').value;
        this.props.createRoom(this.props.course, roomname);
    }

    render() {
        return (
            <div className="course" onClick={() => {this.setState(this.state.createNew ? {} : {expanded: !this.state.expanded})}}>
                <div className="courseTitle">
                    {this.props.course}
                </div>
                {
                    this.state.expanded === true ?
                        <div className="classlist">

                            <div className="class" onClick={(e) => {e.stopPropagation(); browserHistory.push('/room/' + 101)}}>
                                101
                            </div>

                            <div className="class" onClick={(e) => {e.stopPropagation(); browserHistory.push('/room/' + 101)}}>
                                102
                            </div>

                            {
                                this.state.createNew ?
                                    <div className="createCourse">
                                        <div className="courseName">
                                            Course Name
                                            <input id='coursename' defaultValue={this.props.course} placeholder="Course Name" onFocus={(e) => {e.stopPropagation()}}/>
                                        </div>
                                        <div className="className">
                                            Room Name
                                            <input id='roomname' placeholder="Room Name" onFocus={(e) => {e.stopPropagation(); this.createRoom()}}/>
                                        </div>
                                        <div className="addCourse" onClick={(e) => {this.setState({createNew: false})}}>
                                            Create Room
                                        </div>
                                        <div className="addCourse" onClick={(e) => {this.setState({createNew: false})}}>
                                            Cancel
                                        </div>
                                    </div>
                                    :
                                    <div className="createNew" onClick={(e) => {e.stopPropagation(); this.setState({createNew: true})}}>
                                        New Class
                                    </div>
                            }

                        </div>
                        :
                        null
                }
            </div>
        );
    }
}

export default Course;