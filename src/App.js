import { BrowserRouter, Route, Routes} from "react-router-dom"
import { Box } from "@chakra-ui/react"
import { Topic } from "./components/Topic";
import { Quiz } from "./components/Quiz"
import { Result } from "./components/Result"

const getData = () => {
  const res = require("./database/db.json")
  return res
}

function App() {
  const data = getData()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Box ml={"50px"} mt="100px">
            <Topic bgColor="#40DFEF" data={data.animal} numberTopic="Động vật" />
            <Topic bgColor="#F55353" data={data.history} numberTopic="Khoa học"/>
            <Topic bgColor="#FD5D5D" data={data.culture} numberTopic="Văn hóa"/>
          </Box>
        } />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
