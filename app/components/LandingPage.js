import React, { Component } from 'react'
import Nav from './Nav/Nav'
import { Row, Col, CardPanel, Card, CardTitle } from 'react-materialize'
import { Link } from 'react-router-dom'
import Center from 'react-center'

class LandingPage extends Component {
	constructor() {
		super()
		this.state = {
			hovered: false,
			hovered2: false,
			hoverText: ''
		};

		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseEnter2 = this.handleMouseEnter2.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	handleMouseEnter() {
		this.setState({hovered: true, hoverText:
				"Find competitive business data and neighborhood statistics for areas of interest"});
	}

	handleMouseEnter2() {
		this.setState({hovered2: true, hoverText:
				'Collaborate with neighbors, request new businesses and vote on your favorite ideas'});
	}

	handleMouseLeave() {
		this.setState({hovered: false, hovered2: false});
	}

	render() {
		return (
			<div>
				<Row>
					<Nav />
				</Row>

				<Center>
					<Row>
						<Col l={6}>
							<Link to='/business' >
								<Card
									className='landingCard'
									onMouseEnter={() => this.handleMouseEnter()}
									onMouseLeave={() => this.handleMouseLeave()}
									header={
										<CardTitle
											image='BizCard.png'
											waves='light'
											style={{ height: 300, width: '100%', opacity: this.state.hovered ? '.4' : '1'}}
										/>
									}
								>
									{ this.state.hovered
										? <p style={{ fontSize:16, paddingTop: '12px' }} className='center-align'>{this.state.hoverText}</p>
										: <p style={{ fontSize:18, paddingTop: '20px' }} className='center-align'>OPEN A BUSINESS</p>
									}
								</Card>
							</Link>
						</Col>

						<Col l={6}>
							<Link to='/threads'>
								<Card
									className='landingCard'
									onMouseEnter={() => this.handleMouseEnter2()}
									onMouseLeave={() => this.handleMouseLeave()}
									header={
										<CardTitle
											image='ResCard.png'
											waves='light'
											style={{ height: 300, width: '100%', opacity: this.state.hovered2 ? '.4' : '1'}}
										/>
									}
								>
									{ this.state.hovered2
										? <p style={{ fontSize:16, paddingTop: '12px' }} className='center-align'>{this.state.hoverText}</p>
										: <p style={{ fontSize:18, paddingTop: '20px' }} className='center-align'>SUGGEST A BUSINESS</p>
									}
								</Card>
							</Link>
						</Col>
					</Row>
				</Center>

				<Row style={{textAlign:'center', margin: 'auto', width: '75%', marginTop: '40px'}}>
					<Col l={12} >
							<span className='landingHeader' style={{fontSize: 30}}>
								Bullseye helps small business owners find the perfect location for their venture. With a unique mix of business intelligence and crowdsourced data, making informed decisions has never been easier.
							</span>
					</Col>
				</Row>

			</div>
		)
	}
}

export default LandingPage
