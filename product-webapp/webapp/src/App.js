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
import {  HashRouter, Route,Routes } from "react-router-dom";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import WalletRoute from "./components/walletRoute/WalletRoute";

function App() {
  return (
    <>
      <div className="App">
     
    <HashRouter>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route exact path="/signIn" element={<SignIn />} />
      <Route exact path="/signUp" element={<SignUp />} />
      <Route exact path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
      <Route exact path="/updateUser" element={<PrivateRoute> <UpdateUser /> </PrivateRoute>} />
      <Route exact path="/userProfile" element={<PrivateRoute> <UserProfile /> </PrivateRoute>} />
      <Route exact path="/sendMoney" element={<WalletRoute> <SendMoney /> </WalletRoute>} />
      <Route exact path="/addMoney" element={<WalletRoute> <AddMoney /> </WalletRoute>} />
      <Route exact path="/transaction" element={<WalletRoute> <Transaction /> </WalletRoute>} />

      </Routes>
    </HashRouter>
    
      </div>
    </>
  );
}
export default App;





