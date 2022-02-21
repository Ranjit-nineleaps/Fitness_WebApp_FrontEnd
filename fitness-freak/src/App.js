import Homepage from "../src/Pages/Homepage";
import {BrowserRouter as Router , Route , Switch , Link} from "react-router-dom";
import SignupVendor from './Pages/Signup/SignupVendor'
import Login from '../src/Pages/Login/Login';
import VendorDashboard from "./Components/Vendor/Dashboard/VendorDashboard";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/login" component ={Login}/>
        <Route exact path ="/" component ={Homepage}/>
        <Route exact path ="/Signupvendor" component = {SignupVendor}/>
        <Route exact path = "/VendorDashboard" component={VendorDashboard} />
      </Switch>
    </Router>
  );
}

export default App;