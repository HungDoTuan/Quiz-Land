import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questionAndAnswer: [],
    score: 0,
    topic: ""
}

export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        quizData: (state, action) => {
            state.questionAndAnswer = action.payload
        },
        totalScore: (state, action) => {
            state.score = action.payload
        },
        topic: (state, action) => {
            state.topic = action.payload;
            console.log(state.topic)
        }
    }
})
export const {
    actions: { quizData, totalScore, topic },
    reducer
} = quizSlice