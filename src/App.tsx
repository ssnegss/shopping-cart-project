import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/store" element={<Store/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          </Routes>
      </Container>
    </div>
  );
}

export default App;
