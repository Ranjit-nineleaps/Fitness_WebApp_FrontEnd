import Homepage from "../src/Pages/Homepage";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SignupVendor from "./Pages/Signup/SignupVendor";
import Login from "../src/Pages/Login/Login";
import VendorDashboard from "./Components/Vendor/Dashboard/VendorDashboard";
import VendorEditCenter from "./Pages/Vendor/VendorEditGym/VendorEditCenter";
import VendorAddCenter from "./Pages/Vendor/VendorAddCenter/VendorAddCenter";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signupvendor" component={SignupVendor} />
        <Route exact path="/VendorDashboard" component={VendorDashboard} />
        <Route exact path="/VendorAddCenter" component={VendorAddCenter} />
        <Route exact path="/VendorEditCenter" component={VendorEditCenter} />
      </Switch>
    </Router>
  );
}

export default App;
