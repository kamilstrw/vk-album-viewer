import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'

import {Vk} from './VK'

import makeStore from './Store'

import createHistory from 'history/createBrowserHistory'

import style from "Styles/style.scss"

const history = createHistory()
history.push("/")

class Root extends React.Component
{
	render()
	{
		let store = makeStore(history);
		return(
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Vk>
						<div>das</div>
					</Vk>
				</ConnectedRouter>
			</Provider>
		)
	}
}
ReactDOM.render(<Root/>, document.getElementById("main"))