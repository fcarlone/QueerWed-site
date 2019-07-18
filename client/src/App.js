import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/layout/Nav";
import GuestState from "./context/guest/GuestState";

// Planning Pages
import Loading from "./components/pages/Loading";
import Events from "./components/pages/planning/event/Events";
import GuestList from "./components/pages/planning/GuestList";
import Todos from "./components/pages/planning/todo/Todos";
import myVendors from "./components/pages/planning/myVendors";

// Registry Pages
import Registry from "./components/pages/registry/Registry";

// Website Pages
import Website from "./components/pages/website/Website";
import WebsiteComplete from "./components/pages/websitecomplete/WebsiteComplete";

// Team Pages
import Team from "./components/pages/team/Team";

// Join Pages
import Signup from "./components/pages/join/Signup";
import Login from "./components/pages/join/Login";
import VendorSignup from "./components/pages/join/VendorSignup";
import VendorLogin from "./components/pages/join/VendorLogin";

// Vendor Pages
import Vendor from "./components/pages/vendor/Vendor";
// import VendorTest from "./components/pages/vendor/VendorTest"

class App extends Component {
  state = {
    currentPath: "/planning"
  };
  readPath = path => {
    this.setState({
      currentPath: path
    });
  };
  render() {
    return (
      <GuestState>
        <Router>
          <div>
            {/* <Nav readPath={this.readPath} /> */}
            <Switch>
              <Route exact path="/" component={Loading} />

              <Route exact path="/planning" component={Events} />
              <Route exact path="/planning/calendar" component={Events} />
              <Route exact path="/planning/checklist" component={Todos} />
              <Route exact path="/planning/guestlist" component={GuestList} />
              <Route exact path="/planning/team" component={myVendors} />
              {/* <Route exact path="/planning/vendor" component={Vendors} /> */}

              <Route exact path="/registry" component={Registry} />
              <Route exact path="/website" component={Website} />
              {/* <Route exact path="/website/find" component={VendorTest} /> */}
              <Route exact path="/team" component={Team} />

              <Route exact path="/signup" component={Signup} />
              <Route
                exact
                path="/login"
                component={() => <Login currentPath={this.state.currentPath} />}
              />
              <Route exact path="/login/vendor" component={VendorLogin} />
              <Route exact path="/signup/vendor" component={VendorSignup} />

              <Route exact path="/vendor" component={Vendor} />
              
            </Switch>
            <Route exact path="/website/user/:id" component={WebsiteComplete} />
          </div>
        </Router>
      </GuestState>
    );
  }
}

export default App;
