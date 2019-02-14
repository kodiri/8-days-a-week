import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Link } from 'react-router-dom';
import Details from '../Details/Details.js';
import './timeline.css';
import 'react-vertical-timeline-component/style.min.css';
import Header from '../header/header';


class TimeLine extends Component {
    render() {
        return (
            <div>
            <Header />
            <div className="timeLine">
                
                    <VerticalTimeline>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Monday"
                            iconStyle={{ background: 'rgb(25, 149, 173)', color: '#fff' }}>
                            <h3 className="vertical-timeline-element-title">Monday</h3>
                            <h4 className="vertical-timeline-element-subtitle">Code Mood</h4>
                            <p>“You can’t wait for inspiration. You have to go after it with a club.”</p>
                            <Link to="/details" component={Details}>
                                <button className="myButton">Click Me</button>
                            </Link>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Tuesday"
                            iconStyle={{ background: 'rgb(25, 149, 173)', color: '#fff' }}>
                            <h3 className="vertical-timeline-element-title">Tuesday</h3>
                            <h4 className="vertical-timeline-element-subtitle">Drink Mood</h4>
                            <p>“If you think you are too small to make a difference, try sleeping with a mosquito.“</p>
                            <Link to="/details" component={Details}>
                            <button className="myButton" >Click Me</button>
                            </Link>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Wednesday"
                            iconStyle={{ background: 'rgb(25, 149, 173)', color: '#fff' }}>
                            <h3 className="vertical-timeline-element-title">Wednesday</h3>
                            <h4 className="vertical-timeline-element-subtitle">Learn Mood</h4>
                            <p>“Consider the postage stamp: its usefulness consists in the ability to stick to one thing ’til it gets there.“</p>
                            <Link to="/details" component={Details}>
                            <button className="myButton">Click Me</button>
                            </Link>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Thursday"
                            iconStyle={{ background: 'rgb(25, 149, 173)', color: '#fff' }}>
                            <h3 className="vertical-timeline-element-title">Thursday</h3>
                            <h4 className="vertical-timeline-element-subtitle">Code Mood</h4>
                            <p>“A diamond is merely a lump of coal that did well under pressure.“</p>
                            <Link to="/details" component={Details}>
                            <button className="myButton" >Click Me</button>
                            </Link>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="Friday"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}>
                            <h3 className="vertical-timeline-element-title">Friday</h3>
                            <h4 className="vertical-timeline-element-subtitle">Hard Drink Mood</h4>
                            <p>“I have not failed. I’ve just found 10,000 ways that won’t work.“</p>
                            <Link to="/details" component={Details}>
                            <button className="myButton" >Click Me</button>
                            </Link>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="Saturday"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}>
                            <h3 className="vertical-timeline-element-title">Saturday</h3>
                            <h4 className="vertical-timeline-element-subtitle">Worse Mood</h4>
                            <p>“Listen, smile, agree, and then do whatever you were gonna do anyway.“</p>
                            <Link to="/details" component={Details}>
                            <button className="myButton" >Click Me</button>
                            </Link>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="Sunday"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}>
                            <h3 className="vertical-timeline-element-title">Sunday</h3>
                            <h4 className="vertical-timeline-element-subtitle">Relax</h4>
                            <p>“Nothing is impossible, the word itself says ‘I’m possible’!“</p>
                            <Link to="/details" component={Details}>
                            <button className="myButton" >Click Me</button>
                            </Link>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="One More Sunday"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}>
                            <h3 className="vertical-timeline-element-title">One More Sunday</h3>
                            <h4 className="vertical-timeline-element-subtitle">Relax</h4>
                            <p>“Nothing is impossible, the word itself says ‘I’m possible’!“</p>
                            <Link to="/details" component={Details}>
                            <button className="myButton" >Click Me</button>
                            </Link>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
            </div>
            </div>
        );
    }
}


export default TimeLine;