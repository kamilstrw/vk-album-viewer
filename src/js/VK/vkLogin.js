import React from 'react'
import {connect} from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'

import * as actionsUsers from "JS/Store/User/actions"


let stateToProps = (state) => {
	return	{
		user: state.User
	}
}
let actionsToProps = {
	...actionsUsers
}
@connect(stateToProps, actionsToProps)
export default class vkLogin extends React.Component
{
	render()
	{
		return(
			<React.Fragment>
				{this.props.user && <Redirect to="/app"/>}
				<div className="page login">
					<h1 className="login__title">Просматривайте фотографии из своих альбомов Вконтакте</h1>
				</div>
			</React.Fragment>
		)

	}
}