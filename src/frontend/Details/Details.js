import React, { Component } from 'react';
import './Details.css';
import Nav from '../Nav/Nav';
import getDays from '../getDays/getDays';
import { Redirect, Link } from 'react-router-dom';

export default class Details extends Component {

	getDay() {
		return getDays().find(day => {
			return day.id === this.props.match.params.dayId;
		});
	}

	render() {
		let day = this.getDay();
		if (this.getDay() === undefined) {
			return <Redirect to='not-found' />
		} else if (day === undefined) {
			return (
				<div>Loading...</div>
			);
		} else {
			return (
				<div>
					<Nav />
					<div className='details-container'>
						<div className='details-box'>
							<h2 className='details-title details-center-text'>Health & Fitness</h2>
							<a href={day.fitness.url} alt='link to fitness' target='_blank' rel='noreferrer noopener'>
							<img className='details-img' src={day.fitness.picture} alt={day.fitness.alt} />
							</a>
						</div>
						<div className='details-box'>
							<h2 className='details-title details-center-text'>Quote of the Day</h2>
							<p>
								{day.quote.quote}
							</p>
							<p className='details-quoter'>
								{day.quote.quoter}
							</p>
						</div>
						<div className='details-box'>
							<h2 className='details-title details-center-text'>Nutrition</h2>
							<h3 className='details-center-text details-a'>{day.food.name}</h3>
							<a className='details-a' href={day.food.url} target='_blank' rel="noopener noreferrer">
								<img className='details-img' src={day.food.picture} alt={day.food.alt} />
							</a>
						</div>
					</div>
					<div className='details-container'>
						<div className='details-box'>
						<a className='details-a' href={ day.influencer.url} target='_blank' rel="noopener noreferrer">
						<h2 className='details-center-text'>Influencer: {day.influencer.name}</h2>
							<div className="details-imgWrap">
								<img className='details-img' src={ day.influencer.picture } alt={ day.influencer.alt } />
							</div>
							</a>
						</div>
						<div className='details-box'>
							{ day.bio.bio }
							<br />
							<a className='details-a' href= { day.bio.url }  target="_blank" rel="noopener noreferrer">
								<p>Learn more ...</p>
							</a>
							<Link className='backBtn'to='/'>Back to Home</Link>
						</div>
					</div>
				</div>
			)
		}
	}
}