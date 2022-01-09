// @ts-ignore
import { useEffect, useMemo, useState } from "react";
import { eases } from "./eases";
import useScrollPosition from "@react-hooks/use-scroll-position";

// linear interpolation
// https://mattdesl.svbtle.com/linear-interpolation
function lerp(startValue, endValue, t) {
  return startValue * (1 - t) + endValue * t;
}

/**
 * maps curr value to a value 0-1
 * @param from
 * @param curr
 * @param to
 */
function mapScrollPos(from: number, curr: number, to: number): number {
  if (curr <= from) return 0;
  if (curr >= to) return 1;
  return (curr - from) / (to - from);
}

function useScrollLerp(
  startValue: number,
  endValue: number,
  fromScrollPos: number,
  toScrollPos: number,
  easingFunction: (t: number) => number = eases.linear
): number {
  const currScrollPos = useScrollPosition();

  return useMemo(() => {
    const mappedPos = mapScrollPos(fromScrollPos, currScrollPos, toScrollPos);
    const easedValue = easingFunction(mappedPos);
    return lerp(startValue, endValue, easedValue);
  }, [fromScrollPos, currScrollPos, toScrollPos, startValue, endValue]);
}

export default useScrollLerp;
