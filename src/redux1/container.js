import { connect } from "react-redux";
import Home from "../pages/Home";
import { scrollTo } from "./action";

const mapStateToProps = (state) => {
  return { activeIndex: state.activeIndex };
};

const mapDispatchToProps = (dispatch) => {
  return {
    scrollTo: (id) => {
      dispatch(scrollTo(id));
    },
  };
};

const homeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default homeContainer;
