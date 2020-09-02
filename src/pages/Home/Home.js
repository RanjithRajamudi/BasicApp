import React, { Component } from "react";
import { connect } from "react-redux";
import Cards from "../../components/Cards/Cards";
import Contacts from "../../components/ContactsCard/Contacts";
import Header from "../../components/Header/Header";
import ActionBar from "../../components/ActionBar/ActionBar";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import CarouselBar from "../../components/CarouselBar/CarouselBar";

import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div
        className={this.props.visibleLeft ? "containeropen" : "containerclose"}
        id="container-id"
      >
        <Header />
        <Banner />
        <CarouselBar />
        <Cards />
        <Contacts />
        {/* <ActionBar scroll={this.props.scrollTo} /> */}
        <ActionBar />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { activeIndex: state.activeIndex, visibleLeft: state.visibleLeft };
};

// export default Home;
export default connect(mapStateToProps)(Home);
