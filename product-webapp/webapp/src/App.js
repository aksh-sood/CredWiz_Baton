import "./App.css";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import LandingPage from "./components/landing/LandingPage";
import UserProfile from "./components/userProfile/UserProfile";
import SendMoney from "./components/sendMoney/SendMoney";
import AddMoney from "./components/addMoney/AddMoney";
import Dashboard from "./components/dashboard/Dashboard";
import Transaction from "./components/history/Transaction";
import { Route, Routes, HashRouter } from "react-router-dom";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import WalletRoute from "./components/walletRoute/WalletRoute";

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Routes>
        <Route path="/" exact component={LandingPage} />
        <Route path="/signIn" exact component={SignIn} />
        <Route path="/signUp" exact component={SignUp} />

        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <PrivateRoute path="/updateUser" exact component={UpdateUser} />
        <PrivateRoute path="/userProfile" exact component={UserProfile} />

        <WalletRoute path="/sendMoney" exact component={SendMoney} />
        <WalletRoute path="/addMoney" exact component={AddMoney} />
        <WalletRoute path="/transaction" exact component={Transaction} />
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;





