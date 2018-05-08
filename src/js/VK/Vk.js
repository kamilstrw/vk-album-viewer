import React from 'react'
import vkContext from './vkContext'
import {vkLoginPage} from './index.js'
import {connect} from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'

import * as actionsUsers from "JS/Store/User/actions"


let stateToProps = (state) => {
	return	{
		user: state.User,
		router: state.router
	}
}
let actionsToProps = {
	...actionsUsers
}
@connect(stateToProps, actionsToProps)
export class Vk extends React.Component
{
	componentDidMount()
	{
		window.VK.Auth.getLoginStatus((res)=>{
			if (res.session)
			{

			}
		})
	}
	render()
	{
		return(
			<vkContext.Provider value = {window.VK}>
				{this.props.user && this.props.user.name}
				<Route exact path="/" render={(props)=> {
					return 	this.props.user ? <Redirect to="/app"/> : <Redirect to="/login"/>	}	}	/>
				<Route path="/login" component={vkLoginPage}/>
				<Route path="/app" render={(props)=> {
					return <React.Fragment>{this.props.children}</React.Fragment>	}	}	/>
			</vkContext.Provider> 
		)
	}
}
