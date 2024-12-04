import "./App.css";
import Nav from "./components/Nav";
import Hackernews from "./components/Hackernews";
import MemoryGame from "./components/MemoryGame";
import Timer from "./components/Timer";
import { images } from "./lib/constants";
import ShoppingList from "./components/ShoppingList";
import ContactBook from "./components/ContactBook";

function App() {
  return (
    <Nav>
      <ContactBook />
      <ShoppingList />
      <Timer />
      <MemoryGame images={images} />
      <Hackernews />
    </Nav>
  );
}

export default App;
