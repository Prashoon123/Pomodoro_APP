import { atom } from "recoil";

const globalWork = atom({
  key: "globalWork", // unique ID (with respect to other atoms/selectors)
  default: 1, // default value (aka initial value)
});

const globalRest = atom({
  key: "globalRest", // unique ID (with respect to other atoms/selectors)
  default: 1, // default value (aka initial value)
});

export { globalWork, globalRest };
