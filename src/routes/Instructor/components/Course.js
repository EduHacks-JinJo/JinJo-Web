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

    render() {
        return (
            <div className="course" onClick={() => {this.setState({expanded: !this.state.expanded})}}>
                <div className="courseTitle">
                    {this.props.course}
                </div>
                {
                    this.state.expanded === true ?
                        <div className="classlist">

                            <div className="class" onClick={(e) => {e.stopPropagation(); this.setState({createNew: false})}}>
                                101
                            </div>

                            <div className="class" onClick={(e) => {e.stopPropagation(); this.setState({createNew: false})}}>
                                102
                            </div>

                            {
                                this.state.createNew ?
                                    <div className="createCourse">
                                        <div className="courseName">
                                            Course Name
                                            <input id='coursename' default={this.props.course} placeholder="Course Name" onFocus={(e) => {e.stopPropagation()}}/>
                                        </div>
                                        <div className="className">
                                            Class Name
                                            <input id='classname' placeholder="Class Name" onFocus={(e) => {e.stopPropagation()}}/>
                                        </div>
                                        <div className="addCourse" onClick={(e) => {e.stopPropagation(); this.setState({createNew: false})}}>
                                            Add Course
                                        </div>
                                        <div className="addCourse" onClick={(e) => {e.stopPropagation(); this.setState({createNew: false})}}>
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