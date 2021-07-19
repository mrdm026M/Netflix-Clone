import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Category } from "./pages/Category/Category";
import { Home } from "./pages/Home/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category" component={Category} />
      </Switch>
    </Router>
  );
};

export default App;
