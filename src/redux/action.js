import { SCROLL_TO, ACTION_TO } from "./actionTypes";

export const scrollTo = (id) => {
  return { type: SCROLL_TO, id };
};
export const actionTo = () => {
  return { type: ACTION_TO };
};
