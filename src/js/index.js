import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

import {Vk} from './VK'

import Store from './Store'


ReactDOM.render((
	<Provider store={Store}>
		<BrowserRouter>
			<Vk>
				<div>hello, world</div>
			</Vk>
		</BrowserRouter>
	</Provider>),
 document.getElementById("main"))