import "./App.css";
import Footer from "./components/footer/Footer";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
// import SignLayout from "./components/signLayout/SignLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import AddMoney from "./components/addMoney/AddMoney";
import Dashboard from "./components/dashboard/Dashboard";
import Transaction from "./components/history/Transaction";
import LandingPage from "./components/landing/LandingPage";
import Home from "./components/mui/Home";
import SendMoney from "./components/sendMoney/SendMoney";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import UserProfile from "./components/userProfile/UserProfile";
import WithdrawMoney from "./components/widthdrawMoney/WithdrawMoney";
import AddBank from "./components/addBank/AddBank";

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route exact path="/" element={<h1>haii</h1>}>

    <Route>
      <Route path="/" element={<LandingPage />} />

      <Route exact path="/transaction" element={<Transaction />} />

      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/test" element={<Home />} />

      <Route exact path="/updateUser" element={<UpdateUser />} />
      {/* <Route
        exact
        path="/signIn"
        element={<SignLayout comp={<SignIn />} path="/signIn" />}
      /> */}
      <Route exact path="/signIn" element={<SignIn />} />
      <Route exact path="/signUp" element={<SignUp />} />
      {/* <Route
        exact
        path="/signUp"
        element={<SignLayout comp={<SignUp />} path="/signUp" />}
      /> */}
      <Route exact path="/userProfile" element={<UserProfile />} />
      <Route exact path="/sendMoney" element={<SendMoney />} />
      <Route exact path="/addMoney" element={<AddMoney />} />
      <Route exact path="/addbank" element={<AddBank></AddBank>}/>
      <Route exact path="/withdrawMoney" element={<WithdrawMoney />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
        <Footer />
      </div>
    </>
  );
}

export default App;
