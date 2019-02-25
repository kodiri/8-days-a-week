import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Link } from 'react-router-dom';
import './timeline.css';
import 'react-vertical-timeline-component/style.min.css';
import Header from '../header/header';




class TimeLine extends Component {
    render() {
        return (
            <div>
            <Header />
            <div className="timeLine" id = 'timeline'>

                <VerticalTimeline>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Monday"
                        iconStyle={{ background: 'rgb(25, 149, 173)', color: '#fff' }}>
                        <h3 className="vertical-timeline-element-title">Monday</h3>

                        <p>"The Computer was the first machine man built that assisted the power of his brain instead of the strength of his arm"</p>
                        <h6>Grace Hopper : Computer pioneer</h6>
                        <Link to="/monday" className='btn'>
                            Find Out More...
                        </Link>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Tuesday"
                        iconStyle={{ background: 'rgb(25, 149, 173)', color: '#fff' }}>
                        <h3 className="vertical-timeline-element-title">Tuesday</h3>

                        <p>"We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins"</p>
                        <h6>Ellen Ullman : Software engineer and author</h6>
                        <Link to="/tuesday" className='btn'>
                            Find Out More...
                        </Link>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Wednesday"
                        iconStyle={{ background: 'rgb(25, 149, 173)', color: '#fff' }}>
                        <h3 className="vertical-timeline-element-title">Wednesday</h3>
                        <p>"We hold ourselves back in ways both big and small, by lacking self-confidence, by not raising our hands, and by pulling back when we should be leaning in".</p>
                        <h6>Sheryl Sandberg, Facebook COO</h6>
                        <Link to="/wednesday" className='btn'>
                            Find Out More...
                        </Link>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Thursday"
                        iconStyle={{ background: 'rgb(25, 149, 173)', color: '#fff' }}>
                        <h3 className="vertical-timeline-element-title">Thursday</h3>

                        <p>“Understand well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand."</p>
                        <h6>Ada Lovelace : 'The Mother of programming'</h6>
                        <Link to="/thursday" className='btn'>
                            Find Out More...
                        </Link>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="Friday"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}>
                        <h3 className="vertical-timeline-element-title">Friday</h3>

                        <p>“When I first started using the phrase software engineering, it was considered to be quite amusing. They used to kid me about my radical ideas. Software eventually and necessarily gained the same respect as any other discipline.”</p>
                        <h6>Margaret Hamilton : Mathematician and pioneering computer scientist
                             who coined the phrase "Software Engineering"</h6>
                         <Link to="/friday" className='btn'>
                            Find Out More...
                        </Link>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="Saturday"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}>
                        <h3 className="vertical-timeline-element-title">Saturday</h3>

                        <p>"Life doesn’t always present you with the perfect opportunity at the perfect time. Opportunities come when you least expect them, or when you’re not ready for them. Rarely are opportunities presented to you in the perfect way, in a nice little box with a yellow bow on top. … Opportunities, the good ones, they’re messy and confusing and hard to recognize. They’re risky. They challenge you.”</p>
                        <h6>Susan Wojcicki : CEO YouTube</h6>
                        <Link to="/saturday" className='btn'>
                            Find Out More...
                        </Link>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="Sunday"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}>
                        <h3 className="vertical-timeline-element-title">Sunday</h3>
                        <p>“I learned to always take on things I’d never done before. Growth and comfort do not coexist.”</p>
                        <h6>Virginia Marie "Ginni" Rometty : Chairwoman, President and CEO of IBM</h6>
                        <Link to="/sunday" className='btn'>
                            Find Out More...
                        </Link>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="One More Sunday"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}>
                        <h3 className="vertical-timeline-element-title">'the eighth day'</h3>
                        <p>"Women belong in all places where decisions are being made... It shouldn't be that women are the exception."</p>
                        <h6>Ruth Bader Ginsburg, associate justice of the U.S. Supreme Court</h6>
                        <Link to="/eighth" className='btn'>
                            Find Out More...
                        </Link>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            </div>
        );
    }
}


export default TimeLine;