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

    componentDidMount() {
        this.props.getCourses();
    }

    createRoom = () => {
        let className = document.getElementById('classname').value;
        let courseName = document.getElementById('coursename').value;

        this.props.createRoom(courseName, className);
    }


    render() {
        console.log('instructo render', this.props.courses)
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
                            <div className="addCourse" onClick={() => {this.createRoom()}} >
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

                    {
                        this.props.courses.map(course =>
                            <Course key={course} getClassrooms={(courseID) => {this.props.getClassrooms(courseID)}} createRoom={this.props.createRoom} courseName={course} classrooms={this.props.classrooms[course]}/>
                        )
                    }

                </div>

            </div>
        );
    }
}

export default Instructor;