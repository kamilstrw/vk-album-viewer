export {Vk} from './Vk'

import {withVK} from './vkContext'

import vkLogin from './vkLogin'


const vkLoginPage = withVK(vkLogin)

export {
	vkLoginPage
}