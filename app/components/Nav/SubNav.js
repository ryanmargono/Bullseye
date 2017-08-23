import React from 'react';
import { Navbar, NavItem, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { logout} from '../../reducers/auth';
import { Link } from 'react-router-dom'

const SubNav = (props) => {
	return (
		props.currentUser ?
		<Navbar>
			<Link to='/savedReports'><NavItem> Saved Reports </NavItem></Link>
			<NavItem> Shared with me </NavItem>
			<NavItem onClick={props.logout}> Sign Out </NavItem>
		</Navbar>
		:
		<Navbar>
			<NavItem href="/api/auth"><Button> Log in with Google </Button> </NavItem>
		</Navbar>
	);
};

const mapState = ({ currentUser }) => ({
	currentUser
});

const mapDispatch = { logout };

export default connect(mapState, mapDispatch)(SubNav);
