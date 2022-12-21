import { ReactElement, useState } from "react";

export function useMultiform(steps: ReactElement[]) {
  const [current, setCurrent] = useState(0);

  function nextPage() {
    setCurrent((prevVal) => {
      if (prevVal >= steps.length - 1) return prevVal;
      return prevVal + 1;
    });
  }

  function backPage() {
    setCurrent((preVal) => {
      if (preVal <= 0) return preVal;
      return preVal - 1;
    });
  }

  return {
    current,
    step: steps[current],
    nextPage,
    backPage,
    steps,
    isFirstPage: current !== 0,
    isLastPage: current === steps.length - 1,
  };
}
