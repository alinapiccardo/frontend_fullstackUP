import {
	USER_LOGIN,
	USER_REGISTRATION,
	USER_LOGOUT,
	RESET_STATE,
	GET_USER,
} from "./actions_types";

const initialState = {
	userLogged: {},
	myCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case USER_LOGIN:
			return {
				...state,
				userLogged: payload,
				myCharacters: payload.myCharacters || [],
			};
		case USER_LOGOUT:
			return {
				...state,
				userLogged: null,
			};
		case GET_USER:
			return {
				...state,
				userLogged: payload,
			};
		case RESET_STATE:
			return { ...initialState };
		default:
			return state;
	}
};

export default rootReducer;
