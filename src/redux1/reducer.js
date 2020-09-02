import { SCROLL_TO } from "./action";
const IDVALUES = [
  "header-id",
  "carousel-id",
  "contacts-id",
  "cards-id",
  "footer-id",
];
const idState = {
  activeIndex: 0,
};

const idValueReducer = (state = idState, action) => {
  switch (action.type) {
    case SCROLL_TO:
      const activeIndex = action.id;
      const sectionId = IDVALUES[activeIndex];
      const element = document.getElementById(sectionId);
      element.scrollIntoView({ behavior: "smooth" });
      return {
        ...state,
        activeIndex,
      };
    default:
      return state;
  }
};
export default idValueReducer;
