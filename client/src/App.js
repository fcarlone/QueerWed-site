import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Loading from "./components/pages/Loading";
import Planning from "./components/pages/planning/Planning";
import Registry from "./components/pages/registry/Registry";
import Vendor from "./components/pages/vendor/Vendor";
import Website from "./components/pages/website/Website";
import Signup from "./components/pages/join/Signup";
import Login from "./components/pages/join/Login";
import VendorSignup from "./components/pages/join/VendorSignup";
import VendorLogin from "./components/pages/join/VendorLogin";

import GuestState from "./context/guest/GuestState";


function App() {
  return (
<<<<<<< HEAD
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Loading} />+
          <Route exact path="/planning" component={Planning} />
          <Route exact path="/registry" component={Registry} />
          <Route exact path="/vendor" component={Vendor} />
          <Route exact path="/website" component={Website} />
          
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup/vendor" component={VendorSignup}/>
          <Route exact path="/login/vendor" component={VendorLogin}/>


        </Switch>
      </div>
    </Router>
=======
    <GuestState>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Loading} />+
            <Route exact path="/planning" component={Planning} />
            <Route exact path="/registry" component={Registry} />
            <Route exact path="/vendor" component={Vendor} />
            <Route exact path="/website" component={Website} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/login/vendor" component={VendorLogin} />
          </Switch>
        </div>
      </Router>
    </GuestState>
>>>>>>> 785ee651ccd8de114e3a85d7aaadacabdf5a0011
  );
}

export default App;
