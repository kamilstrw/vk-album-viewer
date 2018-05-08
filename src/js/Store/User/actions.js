import Type from './type'
export function login(session){
	return {
		type: Type.LOGIN,
		session
	}
}
