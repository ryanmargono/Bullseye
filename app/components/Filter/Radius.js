import React from 'react'
import { connect } from 'react-redux'
import { putRadius } from '../../reducers/radius-reducer'
import { Input, Icon, Row, Col } from 'react-materialize'

const radius = (props) => {
	const addRadius = props.addRadius
	const changeHandler = (event) => {
	  const newObj = { value: +event.target.value, metric: 'imperial' }
		addRadius(newObj)
	}

	return (
		<Row>
			<Col s={4}>
			<Input label="Radius" validate onChange={changeHandler}></Input>
			</Col>
			<Col s={8} style={{ paddingTop: 25 }}>
				<Input name='on' type='switch' value='1' onLabel='km' offLabel='miles' />
			</Col>
		</Row>
	)
}

const mapStateToProps = storeState => ({
	radius: storeState.radius
})

const mapDispatchToProps = dispatch => ({
	addRadius: (radObj) => dispatch(putRadius(radObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(radius)
