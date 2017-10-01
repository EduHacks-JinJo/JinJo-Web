import React, { Component } from 'react';
import '../styles/instructor.scss'
import { browserHistory } from 'react-router';

class Instructor extends Component {

    constructor(props) {
        super(props);
        this.state = {
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


                <div className="createCourse">
                    Create Course
                </div>

                <div className="courses">

                    <div className="coursesTitle">
                        Courses
                    </div>

                    <div className="course">
                        CPSC 210
                    </div>

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