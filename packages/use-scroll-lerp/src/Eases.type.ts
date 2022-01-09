type EasingFunction = (t: number) => number;

type Eases = {
  backInOut: EasingFunction;
  backIn: EasingFunction;
  backOut: EasingFunction;
  bounceInOut: EasingFunction;
  bounceIn: EasingFunction;
  bounceOut: EasingFunction;
  circInOut: EasingFunction;
  circIn: EasingFunction;
  circOut: EasingFunction;
  cubicInOut: EasingFunction;
  cubicIn: EasingFunction;
  cubicOut: EasingFunction;
  elasticInOut: EasingFunction;
  elasticIn: EasingFunction;
  elasticOut: EasingFunction;
  expoInOut: EasingFunction;
  expoIn: EasingFunction;
  expoOut: EasingFunction;
  linear: EasingFunction;
  quadInOut: EasingFunction;
  quadIn: EasingFunction;
  quadOut: EasingFunction;
  quartInOut: EasingFunction;
  quartIn: EasingFunction;
  quartOut: EasingFunction;
  quintInOut: EasingFunction;
  quintIn: EasingFunction;
  quintOut: EasingFunction;
  sineInOut: EasingFunction;
  sineIn: EasingFunction;
  sineOut: EasingFunction;
};

export type { Eases };