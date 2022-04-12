import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

export const rootReducer = combineReducers({
    quizData: reducer
})
export const store = configureStore({
    reducer: rootReducer
})