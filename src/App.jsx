import "./App.css";
import Hackernews from "./components/Hackernews";
import MemoryGame from "./components/MemoryGame";
import { images } from "./lib/constants";

function App() {
  return (
    <>
      {/* <Hackernews /> */}
      <MemoryGame images={images} />
    </>
  );
}

export default App;
