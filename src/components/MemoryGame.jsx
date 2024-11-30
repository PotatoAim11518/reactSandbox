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
      <ul className="flex flex-wrap justify-center items-center gap-10 mt-10">
        {deck.current.map((image, i) => (
          <li key={image + i} onClick={() => handleClick(image, i)}>
            {!flipped[i] && (
              <div className="absolute hover:bg-slate-500 aspect-square w-64 rounded-2xl bg-black transition" />
            )}
            <img
              src={image}
              className="aspect-square w-64 rounded-2xl object-cover"
            />
          </li>
        ))}
      </ul>
      {allFlipped && (
        <div className="mt-10">
          <div className="font-extrabold">Congratulations!</div>
          <button
            onClick={handleReset}
            className="m-2 py-2 px-4 bg-slate-700 rounded-full hover:bg-white hover:text-black border-2 hover:border-2 transition"
          >
            Try again?
          </button>
        </div>
      )}
    </div>
  );
}
