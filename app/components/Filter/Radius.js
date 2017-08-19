import React from 'react'
import { connect } from 'react-redux'
import { updateRadius } from '../../reducers/radius-reducer'
import { Input, Row, Col } from 'react-materialize'
import { switchMeasurement } from '../../reducers/report'

const radius = (props) => {
	// let metric = 'mile'
	// const handleMetric = (event)=>{
	// 	if (metric ==='mile') metric = 'km'
	// 		else {
	// 			metric = 'miles'
	// 		}
	// }
	console.log(document.getElementById('metric-switch'))

	const changeHandler = (event) => {
		function getMetersFromMiles(miles) {
			return miles * 1609.344;
		}
		function getMetersFromKM(km) {
			return km * 1000;
		}
		const metric = document.getElementById('metric-switch').checked ? getMetersFromKM(+document.getElementById('radiusField').value) : getMetersFromMiles(+document.getElementById('radiusField').value)
		props.updateRadius(metric);
		document.getElementById('metric-switch').checked ? props.switchMeasurement('km') : props.switchMeasurement('miles');

	}

	return (
		<Row>
			<Col s={4}>
				<Input id='radiusField' label="Radius" validate onChange={changeHandler}></Input>
			</Col>
			<Col s={8} style={{ paddingTop: 25 }}>
				<Input name='on' type='switch' id="metric-switch" value='1' onLabel='km' offLabel='miles' onChange={changeHandler} />
			</Col>
		</Row>
	)
}

const mapStateToProps = storeState => ({
	radius: storeState.radius
})

const mapDispatchToProps = dispatch => ({
	updateRadius: (radObj) => dispatch(updateRadius(radObj)),
	switchMeasurement: (str) => dispatch(switchMeasurement(str))
})

export default connect(mapStateToProps, mapDispatchToProps)(radius)
