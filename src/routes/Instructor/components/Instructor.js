import React, { Component } from 'react';
import '../styles/instructor.scss'
import { browserHistory } from 'react-router';
import Course from './Course';

class Instructor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            createCourse: false,
        }
    }

    createRoom = (classname, coursename) => {
        this.props.createRoom(classname, coursename);
    }



    render() {
        return (
            <div className="instructor">

                <div className="jinjoTitle">
                    JinJo
                </div>

                {
                    this.state.createCourse === true ?
                        <div className="createCourse">
                            <div className="courseName">
                                Course Name
                                <input id='coursename' placeholder="Course Name" />
                            </div>
                            <div className="className">
                                Class Name
                                <input id='classname' placeholder="Class Name" />
                            </div>
                            <div className="addCourse">
                                Add Course
                            </div>
                            <div className="addCourse" onClick={() => {this.setState({createCourse: false})}}>
                                Cancel
                            </div>
                        </div>
                        :
                        <div className="createCourse" onClick={() => {this.setState({createCourse: true})}}>
                            Create Course
                        </div>
                }

                <div className="courses">

                    <div className="coursesTitle">
                        Courses
                    </div>

                    <Course createRoom={this.props.createRoom} course="CPSC 210"/>

                    <Course createRoom={this.props.createRoom} course="CPSC 310" />

                    <Course createRoom={this.props.createRoom} course="CPSC 110"/>

                    {
                        this.props.courses.forEach(course =>
                            <div className="course">
                                {course.name}
                            </div>
                        )
                    }

                </div>

            </div>
        );
    }
}

export default Instructor;