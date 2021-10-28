import React from "react";
import Header from "./component/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import NewActivity from "./pages/NewActivity";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/NewActivity/:id">
        <NewActivity />
      </Route>
      <Redirect from="*" to="/home" />
    </Router>
  );
}

export default App;
