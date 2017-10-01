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
            expanded: false
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

                            <div className="class" onClick={(e) => {e.stopPropagation(); this.setState({expanded: false})}}>
                                101
                            </div>

                            <div className="class">
                                102
                            </div>

                        </div>
                        :
                        null
                }
            </div>
        );
    }
}

export default Course;