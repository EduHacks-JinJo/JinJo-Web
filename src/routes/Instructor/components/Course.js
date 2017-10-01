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

    componentDidMount() {
        this.props.getClassrooms(this.props.courseName);
    }

    createRoom = () => {
        let coursename = document.getElementById('coursename').value;
        let classname = document.getElementById('roomname').value;

        if (coursename === '' || classname === '') {
            return;
        }
        this.props.createRoom(coursename, classname, this.props.courseName);
    }

    render() {
        console.log('classrooms', this.props.classrooms);

        return (
            <div className="course" onClick={() => {this.setState(this.state.createNew ? {} : {expanded: !this.state.expanded})}}>
                <div className="courseTitle">
                    {this.props.courseName}
                </div>
                {
                    this.state.expanded === true ?
                        <div className="classlist">

                            {/*<div className="class" onClick={(e) => {e.stopPropagation(); browserHistory.push('/room/' + 101)}}>*/}
                                {/*101*/}
                            {/*</div>*/}

                            {
                                this.props.classrooms ?
                                    this.props.classrooms.map(room =>
                                        <div className="class" onClick={(e) => {e.stopPropagation(); browserHistory.push('/room/' + room.roomID)}}>
                                            {
                                                room.classname ?
                                                    room.classname
                                                    :
                                                    room.roomID
                                            }
                                        </div>
                                    )
                                    :
                                    null
                            }

                            {
                                this.state.createNew ?
                                    <div className="createCourse">
                                        <div className="courseName">
                                            Course Name
                                            <input id='coursename' defaultValue={this.props.courseName} placeholder="Course Name" onFocus={(e) => {e.stopPropagation()}}/>
                                        </div>
                                        <div className="className">
                                            Room Name
                                            <input id='roomname' placeholder="Room Name" onFocus={(e) => {e.stopPropagation(); this.createRoom()}}/>
                                        </div>
                                        <div className="addCourse" onClick={(e) => {this.createRoom(); this.setState({createNew: false})}}>
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