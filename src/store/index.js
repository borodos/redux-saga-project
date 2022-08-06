import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { countReducer } from "./countReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
	countReducer,
	userReducer,
});

export const store = configureStore(
	{ reducer: rootReducer },
	composeWithDevTools()
);
