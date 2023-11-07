import axios from "axios";
import {
	USER_LOGIN,
	USER_REGISTRATION,
	USER_LOGOUT,
	RESET_STATE,
} from "./actions_types";

const URL = "http://localhost:3002";

export const userLogin = (user) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.post(`${URL}/login`, user);
			const { user } = data;
			return dispatch({
				type: USER_LOGIN,
				payload: user,
			});
		} catch (error) {
			console.log(error);
		}
	};
};
