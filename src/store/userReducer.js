const defaultState = {
	users: [],
};

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

const SET_USERS = "SET_USERS";

export const userReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_USERS:
			return { ...state, users: action.payload };

		default:
			return state;
	}
};

export const setUsersAction = (payload) => ({ type: SET_USERS, payload });
