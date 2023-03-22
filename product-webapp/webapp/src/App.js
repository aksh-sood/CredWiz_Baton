import "./App.css";
import SignIn from "./components/signIn/SignIn";
import Footer from "./components/footer/Footer";
import SignUp from "./components/signUp/SignUp";
// import SignLayout from "./components/signLayout/SignLayout";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import LandingPage from "./components/landing/LandingPage";
import UserProfile from "./components/userProfile/UserProfile";
import SendMoney from "./components/sendMoney/SendMoney";
import AddMoney from "./components/addMoney/AddMoney";
import RootLayout from "./components/rootLayout/RootLayout";
import WithdrawMoney from "./components/widthdrawMoney/WithdrawMoney";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/navbar/Navbar"
import Transaction from "./components/history/Transaction";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Router,
} from "react-router-dom";
import Home from "./components/mui/Home";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Navsample from "./components/sampleNav/sampleNav";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage />} />

      <Route exact path="/transaction" element={<Transaction />} />

      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/test" element={<Home />} />

      <Route exact path="/updateUser" element={<UpdateUser />} />
      <Route exact path="/signIn" element={<SignIn />} />
      <Route exact path="/signUp" element={<SignUp />} />
      <Route exact path="/userProfile" element={<UserProfile />} />
      <Route exact path="/sendMoney" element={<SendMoney />} />
      <Route exact path="/addMoney" element={<AddMoney />} />
      <Route exact path="/withdrawMoney" element={<WithdrawMoney />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <div className="App">
        {/* <Navbar/> */}
        {/* <Navsample></Navsample> */}
        <RouterProvider router={router} />
        <Footer />
      </div>
    </>
  );
}

export default App;
