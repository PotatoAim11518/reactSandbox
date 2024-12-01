import "./App.css";
import Nav from "./components/Nav";
import Hackernews from "./components/Hackernews";
import MemoryGame from "./components/MemoryGame";
import Timer from "./components/Timer";
import { images } from "./lib/constants";

function App() {
  return (
    <Nav>
      <Hackernews />
      <MemoryGame images={images} />
      <Timer />
    </Nav>
  );
}

export default App;
