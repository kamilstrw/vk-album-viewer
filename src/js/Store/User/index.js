import Type from './type.js'


export default function(state=null, action)
{
	let _state = state;
	switch (action.type)
	{
		case Type.LOGIN:
			_state = action.session;
			break;
	}

	return _state;
}