import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Home />
        </div>
      </Provider>
    );
  }
}

export default App;
// coainer config
// import React, { Component } from "react";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import Home from "./pages/Home";

// import HomeContainer from "./redux/homeContainer";
// import { Route, Switch, BrowserRouter } from "react-router-dom";
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <BrowserRouter>
//           <Switch>
//             <Route exact path="/" component={HomeContainer} />
//           </Switch>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

// export default App;
