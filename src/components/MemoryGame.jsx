import { useState, useRef } from "react";
import * as _ from "lodash-es";

export default function MemoryGame({ images }) {
  const deck = useRef(_.shuffle(images.concat(images)));
  const [flipped, setFlipped] = useState(
    new Array(deck.current.length).fill(false)
  );
  const [lastIndex, setLastIndex] = useState(null);
  const allFlipped = flipped.every((x) => x === true);

  const handleClick = (image, idx) => {
    if (!flipped[idx]) {
      if (deck.current[lastIndex] === image) {
        setFlipped(flipped.map((_, index) => (index === idx ? true : _)));
      } else {
        setFlipped(
          flipped.map((_, index) => (lastIndex === index ? false : _))
        );
      }
      setLastIndex(null);
      if (lastIndex === null) {
        setFlipped(flipped.map((_, index) => (index === idx ? true : _)));
        setLastIndex(idx);
      }
    }
  };

  const handleReset = () => {
    deck.current = _.shuffle(deck.current);
    setFlipped(flipped.map((c) => false));
  };

  return (
    <div>
      <h1>Memory Game</h1>
      {/* <p>Last Index: {lastIndex}</p> */}
      <ul className="flex flex-wrap gap-10">
        {deck.current.map((image, i) => (
          <li key={image + i} onClick={() => handleClick(image, i)}>
            {!flipped[i] && (
              <div className="absolute aspect-square w-64 rounded-2xl bg-black" />
            )}
            <img
              src={image}
              className="aspect-square w-64 rounded-2xl object-cover"
            />
          </li>
        ))}
      </ul>
      {allFlipped && (
        <>
          <div>Congratulations!</div>
          <button onClick={handleReset}>Try again?</button>
        </>
      )}
    </div>
  );
}
