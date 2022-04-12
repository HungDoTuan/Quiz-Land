import {
    Box,
    Button,
    Text
} from "@chakra-ui/react"
import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { totalScore } from "../redux/reducer"


export const Quiz = () => {
    const quizList = useSelector((state) => state.quizData.questionAndAnswer)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleExit = () => {
        navigate("/")
    }
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const handleNext = () => {
        setCurrentQuestion(currentQuestion + 1)
        setIsDisabledOptionOne(false)
        setIsDisabledOptionTwo(false)
        setOptionOneColor()
        setOptionTwoColor()
        setOptionOneBackGround()
        setOptionTwoBackGround()
        if (currentQuestion === 3) {
            navigate("/result")
        }
        dispatch(totalScore(score))
        console.log(score)
    }
   const [optionOneColor, setOptionOneColor] = useState()
   const [optionTwoColor, setOptionTwoColor] = useState()
   const [optionOneBackGround, setOptionOneBackGround] = useState()
   const [optionTwoBackGround, setOptionTwoBackGround] = useState()
   const [isDisabledOptionOne, setIsDisabledOptionOne] = useState(false)
   const [isDisabledOptionTwo, setIsDisabledOptionTwo] = useState(false)
   const [score, setScore] = useState(0)
  return (
    <Box>
        <>
            <Box
                textAlign={"center"}
                bg="#247881"
                w={"500px"}
                margin={"auto"}
                mt="100px"
                padding={"20px"}
                >
                    <Box fontSize={"20px"} color="white">{quizList[currentQuestion]?.question}</Box>
                    <Box mt={"20px"}>
                       <Button
                       isDisabled={isDisabledOptionOne ? true : false}
                       onClick={() => {
                           if (quizList[currentQuestion]?.answers?.answer1?.isTrue === "true") {
                            setOptionOneColor("white")
                            setOptionOneBackGround("#357C3C")
                            setScore(score + 1)
                        } else {
                            setOptionOneColor("white")
                            setOptionOneBackGround("#D82148")
                        }
                        setIsDisabledOptionTwo(true)
                        console.log(quizList[currentQuestion])
                       }}
                       
                       color={optionOneColor}
                       bg={optionOneBackGround}
                       >{quizList[currentQuestion]?.answers?.answer1?.content}</Button>
                        
                        <Button
                        onClick={() => {
                            if (quizList[currentQuestion]?.answers?.answer2?.isTrue === "true") {
                                setOptionTwoColor("white")
                                setOptionTwoBackGround("#357C3C")
                                setScore(score + 1)
                            } else {
                                setOptionTwoColor("white")
                                setOptionTwoBackGround("#D82148")
                            }
                            setIsDisabledOptionOne(true)
                            console.log(quizList[currentQuestion])
                        }}
                        isDisabled={isDisabledOptionTwo ? true : false}
                        color={optionTwoColor}
                        bg={optionTwoBackGround}
                        ml={"20px"}>
                            {quizList[currentQuestion]?.answers?.answer2?.content}
                        </Button>
                        <Text mt={"10px"} color={"white"}>{(isDisabledOptionTwo || isDisabledOptionOne) && quizList[currentQuestion].explanation}</Text>
                    </Box>
                    <Box mt={"50px"} display="flex" justifyContent={"space-between"}>
                        <Button onClick={handleNext}>Tiếp tục</Button>
                        <Button onClick={handleExit}>Thoát</Button>
                    </Box>
                </Box>
                    </>
    </Box>
  )
}
