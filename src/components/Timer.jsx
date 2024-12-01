import { useEffect, useState } from "react";

// const DEFAULT_TIME = 5 * 60 * 1_000;
const DEFAULT_TIME = 3 * 1_000;

export default function Timer() {
  const [time, setTime] = useState(DEFAULT_TIME);
  const [active, setActive] = useState(false);

  const twoDigitFormat = (number) =>
    number.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });

  const toMinuteFormat = (time) => {
    const minutes = Math.floor(time / (60 * 1_000));
    const seconds = Math.floor((time % (60 * 1_000)) / 1000);
    return `${twoDigitFormat(minutes)}:${twoDigitFormat(seconds)}`;
  };

  useEffect(() => {
    let interval;
    if (time <= 0) {
      setTime(0);
      setActive(false);
    }
    if (active === true) {
      interval = setInterval(() => {
        console.log("tick");
        setTime((prev) => prev - 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [active, time]);

  return (
    <>
      <h1>Timer</h1>
      <h2 className={time <= 10_000 && `text-red-700`}>
        {toMinuteFormat(time)}
      </h2>
      <section className="flex justify-center items-center gap-6">
        <Button onClick={() => setActive(true)}>Start</Button>
        <Button onClick={() => setActive(false)}>Stop</Button>
        <Button
          onClick={() => {
            setActive(false);
            setTime(DEFAULT_TIME);
          }}
        >
          Reset
        </Button>
      </section>
    </>
  );
}

function Button({ children, ...rest }) {
  return (
    <button
      className="uppercase px-7 py-2 rounded-lg border-2 border-slate-500/50 hover:bg-blue-500/50 bg-blue-900 transition active:scale-105 focus:bg-green-700"
      {...rest}
    >
      {children}
    </button>
  );
}
