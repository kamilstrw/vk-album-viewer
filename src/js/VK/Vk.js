import React from 'react'
import vkContext from './vkContext'
import vkLogin from './vkLogin'
import {connect} from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'


let stateToProps = (state) => {
	return	{
		user: state.User
	}
}
@connect(stateToProps)
export class Vk extends React.Component
{
	render()
	{
		return(
			<vkContext.Provider value = {window.VK}>		
				<Route exact path="/" render={
					(props)=>(
						<Redirect to="/login"/>
					)
				}/>
				<Route path="/login" component={vkLogin}/>
				<Route path="/app" render={(props)=>(<React.Fragment>{this.props.children}</React.Fragment>)}/>
			</vkContext.Provider>
		)
	}
}
