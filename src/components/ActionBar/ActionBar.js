import React, { Component } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { scrollTo, actionTo } from "../../redux/action";
import { connect } from "react-redux";
import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import "./ActionBar.scss";

class ActionBar extends Component {
  // state = {
  //   visibleLeft: false,
  // };

  // toggleSideBar = () => {
  //   this.setState({ visibleLeft: !this.state.visibleLeft });
  //   !this.state.visibleLeft
  //     ? (document.getElementById("container-id").style.marginLeft = "280px")
  //     : (document.getElementById("container-id").style.marginLeft = "0px");
  // };

  render() {
    console.log("props in act bar", this.props);
    return (
      <div>
        <Sidebar
          className="actionbar"
          visible={this.props.visibleLeft}
          modal={false}
          showCloseIcon={false}
        >
          <div className="contentslist">
            <h1>Contents</h1>
            <br />
            <br />
            <Button
              onClick={() => this.props.scrollTo(0)}
              className="button p-button-secondary"
              label="00 - BACK TO TOP"
            />
            <br />
            <Button
              onClick={() => this.props.scrollTo(1)}
              className="button p-button-secondary"
              label="01 - CAROUSEL"
            />
            <br />
            <Button
              onClick={() => this.props.scrollTo(2)}
              className="button p-button-secondary"
              label="02 - INSHOTS"
            />
            <br />
            <Button
              onClick={() => this.props.scrollTo(3)}
              className="button p-button-secondary"
              label="03 - PROFILES"
            />
          </div>
        </Sidebar>
        <Button
          className={
            this.props.visibleLeft ? "actionbaropen" : "actionbarclose"
          }
          icon={
            this.props.visibleLeft ? "pi pi-caret-left" : "pi pi-caret-right"
          }
          onClick={() => this.props.actionTo()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { activeIndex: state.activeIndex, visibleLeft: state.visibleLeft };
};

const mapDispatchToProps = (dispatch) => {
  console.log("in dispatch");
  return {
    scrollTo: (id) => dispatch(scrollTo(id)),
    actionTo: () => dispatch(actionTo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar);
