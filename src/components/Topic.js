import React from 'react'
import {
    Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { quizData, topic } from "../redux/reducer"


export const Topic = ({ numberTopic, data, bgColor}) => {
    const result = useSelector(state => state.quizData.score)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    console.log(data)
    const handleChooseTopic = () => {
        const quizShuffled = data.sort(() => Math.random() - 0.5)
        const quiz = quizShuffled.slice(0,4)
        dispatch(topic(numberTopic))
        dispatch(quizData(quiz))
        navigate("/quiz")
    }
  return (
    <Button
    bg={bgColor}
    isDisabled={result === 4 && (numberTopic === "") && true}
    onClick={handleChooseTopic}
    marginLeft={"90px"}
    mt="30px"
    w={"300px"}
    h={"300px"}
    >Chủ đề {numberTopic}</Button>
  )
}
