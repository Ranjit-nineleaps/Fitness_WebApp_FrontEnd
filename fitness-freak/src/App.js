import Homepage from "../src/Pages/Homepage";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SignupVendor from "./Pages/Signup/SignupVendor";
import Login from "../src/Pages/Login/Login";
import VendorDashboard from "./Components/Vendor/Dashboard/VendorDashboard";
import VendorEditCenter from "./Pages/Vendor/VendorEditCenter";
import VendorAddCenter from "./Pages/Vendor/VendorAddCenter";
import VendorPayment from "./Pages/Vendor/VendorPaymentSection";
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
        <Route exact path="/VendorPayment" component={VendorPayment} />
      </Switch>
    </Router>
  );
}

export default App;
