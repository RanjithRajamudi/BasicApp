import { SCROLL_TO, ACTION_TO } from "./actionTypes";
const IDVALUES = ["header-id", "carousel-id", "cards-id", "contacts-id"];
const initialState = {
  activeIndex: 0,
  visibleLeft: false,
};

const scrollReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCROLL_TO:
      const idIndex = action.id;
      const sectionId = IDVALUES[idIndex];
      const element = document.getElementById(sectionId);
      element.scrollIntoView({ behavior: "smooth" });
      return {
        ...state,
        idIndex,
      };
    case ACTION_TO:
      !state.visibleLeft
        ? (document.getElementById("container-id").style.marginLeft = "280px")
        : (document.getElementById("container-id").style.marginLeft = "0px");
      return {
        ...state,
        visibleLeft: !state.visibleLeft,
      };

    default:
      return state;
  }
};
export default scrollReducer;
