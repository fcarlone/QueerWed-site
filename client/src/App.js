import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./pages/Loading";
import Planning from "./pages/Planning";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Loading} />
          <Route exact path="/Planning" component={Planning} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
