import React from 'react'
import { Input } from 'react-materialize'
import { connect } from 'react-redux'
import { putBType } from '../../../reducers/b-type-reducer'

const SubRest = (props) => {
	const changeHandler = (event) => {
		let value = event.target.value
		let str = ''
		let restStr = 'resturants'
		if (value == 0) str = 'resturants'
		if (value == 1) str = 'american ' + restStr
		if (value == 2) str = 'carribean ' + restStr
		if (value == 3) str = 'chinese ' + restStr
		if (value == 4) str = 'greek ' + restStr
		if (value == 5) str = 'japanese ' + restStr
		if (value == 6) str = 'mexican ' + restStr
		props.addBType(str)
	}

	return (
		<Input s={12} type='select' label="Restaurant Type" defaultValue='-1' onChange={changeHandler}>
			<option disabled = 'disabled' value='-1'> Select Type </option>
			<option value='0'> All </option>
			<option value='1'>American</option>
			<option value='2'>Carribean</option>
			<option value='3'>Chinese</option>
			<option value='4'>Greek</option>
			<option value='5'>Japanese</option>
			<option value='6'>Mexican</option>
		</Input>
	)
}
const mapStateToProps = storeState => ({ bType: storeState.bType })
const mapDispatchToProps = dispatch => ({ addBType: typeStr => dispatch(putBType(typeStr)) })
export default connect(mapStateToProps, mapDispatchToProps)(SubRest)