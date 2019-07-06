import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./pages/Loading";
import Planning from "./pages/Planning";
import Registry from "./pages/Registry";
import Vendor from "./pages/Vendor";
import Website from "./pages/Website";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Loading} />
          <Route exact path="/planning" component={Planning} />
          <Route exact path="/registry" component={Registry} />
          <Route exact path="/vendor" component={Vendor} />
          <Route exact path="/website" component={Website} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
