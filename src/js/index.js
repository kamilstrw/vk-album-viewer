import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'

import {Vk} from './VK'

import Store from './Store'


ReactDOM.render((
	<Provider store={Store}>
		<HashRouter>
			<Vk>
				<div>hello, world</div>
			</Vk>
		</HashRouter>
	</Provider>),
 document.getElementById("main"))