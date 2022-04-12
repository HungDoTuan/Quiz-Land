import { useSelector } from "react-redux"
import {
    Box,
    Text,
    Button,
    Image
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import cat from "../images/cat-glory.jpeg"
import dog from "../images/dog-glory.jpeg"
import candy from "../images/candy-glory.jpeg"


export const Result = () => {
    const result = useSelector(state => state.quizData.score)
    const topic = useSelector(state => state.quizData.topic)
    let imageGlory;
    switch (topic) {
        case "Động vật":
            imageGlory = cat
            break;
        case "Khoa học":
        imageGlory = dog
        break;
        case "Văn hóa":
            imageGlory = candy
            break;
        default:
            break;
    }
    const navigate = useNavigate()
    const handleBackMainScreen = () => {
        navigate("/")
    }
    return (
        <Box
        textAlign={"center"}
        bg="#247881"
        w={"500px"}
        margin={"auto"}
        mt="100px"
        padding={"20px"}
        >
        <Text mt={"60px"} fontSize="18px" color="white">
            {
                result === 4
                ? "Xin chúc mừng bạn đã vượt qua thử thách của Quiz Land"
                : "Rất tiếc :("
            }
        </Text>
        <Text fontSize={"18px"} color="white">Điểm số của bạn là {result} / 4</Text>
        <Text color={"white"} fontSize="20px">Đây là phần quà của bạn :)</Text>
        { result === 4 && <Image mt={"10px"} src={imageGlory} />}
        <Button mt={"10px"} onClick={handleBackMainScreen}>Quay lại màn hình chính</Button>
        </Box>
    )
}