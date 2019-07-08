import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./components/pages/Loading";
import Planning from "./components/pages/Planning";
import Registry from "./components/pages/Registry";
import Vendor from "./components/pages/Vendor";
import Website from "./components/pages/Website";



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
