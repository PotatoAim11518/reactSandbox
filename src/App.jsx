import "./App.css";
import Hackernews from "./components/Hackernews";
import MemoryGame from "./components/MemoryGame";
import Nav from "./components/Nav";
import { images } from "./lib/constants";

function App() {
  return (
    <Nav>
      <Hackernews />
      <MemoryGame images={images} />
    </Nav>
  );
}

export default App;
