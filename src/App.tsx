import {Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/home"
import { About } from "./pages/About"
import { Store } from "./pages/Store"



function App() {
  return (
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/store" element={<Store/>}/>
      </Routes>
    </Container>
  )
}

export default App
