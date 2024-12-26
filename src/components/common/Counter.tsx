import { FunctionComponent, useState } from "react";

const Counter: FunctionComponent = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <div>You've clicked {counter} times!</div>
      <button onClick={handleClick}>click me</button>
    </>
  );

  function handleClick(): void {
    setCounter((old: number) => (old += 1));
  }
};

export default Counter;
