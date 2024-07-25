import { Equal, Expect } from "../test-utils";

const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
const spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT",
] as const;

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<"hello world">
];

type result = typeof tesla;

// ============= Your Code Here =============
type Length<T extends readonly unknown[]> = T extends { length: infer L }
  ? L extends number
    ? L
    : never
  : never;
