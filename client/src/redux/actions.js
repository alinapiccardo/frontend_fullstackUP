import axios from "axios";
import {
	USER_LOGIN,
	USER_REGISTRATION,
	USER_LOGOUT,
	RESET_STATE,
	GET_USER,
} from "./actions_types";

const URL = "http://localhost:3002";

export const userLogin = (username, password) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.post(`${URL}/login`, {
				username,
				password,
			});
			if (data) {
				dispatch({
					type: USER_LOGIN,
					payload: data,
				});
				dispatch(getUserLoggedIn(data));
				window.alert("INICIO EXITOSO");
			}
		} catch (error) {
			console.log(error);
			window.alert(error.response.data.error);
		}
	};
};

export const userLogout = () => {
	return { type: USER_LOGOUT };
};

export const getUserLoggedIn = (data) => {
	const id = data._id;
	return async (dispatch) => {
		try {
			const { data } = await axios.get(`${URL}/users/${id}`);

			dispatch({
				type: GET_USER,
				payload: data,
			});

			sessionStorage.setItem("user", JSON.stringify(data));
		} catch (error) {
			console.log(error);
			window.alert(error.response.data.error);
		}
	};
};

export const resetState = () => {
	return { type: RESET_STATE };
};
