const UPDATE_RADIUS = 'UPDATE_RADIUS'

const updateRadius = (radObj) => ({
	type: UPDATE_RADIUS,
	radObj,
})

const fetchRadius = (radObj) => dispatch => {
	dispatch(updateRadius(radObj))
}

const radiusReducer = (radius={}, action) => {
	switch(action.type){
		case UPDATE_RADIUS:
			return action.radObj
		default:
			return radius
	}
}

export default radiusReducer