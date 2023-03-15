import "./App.css";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import SignLayout from "./components/signLayout/SignLayout";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import LandingPage from "./components/landing/LandingPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Router,
} from "react-router-dom";
import UserProfile from "./components/UserProfile/UserProfile";
import SendMoney from "./components/SendMoney/SendMoney";
import AddMoney from "./components/AddMoney/AddMoney";
import WithdrawMoney from "./components/WidthdrawMoney/WithdrawMoney";
import Dashboard from "./components/dashboard/dashboard";
import Transaction from "./components/history/transaction";

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route exact path="/" element={<h1>haii</h1>}>
    <Route>

      <Route exact path="/transaction" element={<Transaction/>}/>
      <Route exact path="/dashboard" element={<Dashboard/>}/>
      <Route exact path="/userProfile" element={<UserProfile></UserProfile>}/>
      <Route exact path="/updateUser" element={<UpdateUser></UpdateUser>}/>
      <Route
        exact
        path="/signIn"
        element={<SignLayout comp={<SignIn />} path="/signIn" />}
      />
      <Route
        exact
        path="/signUp"
        element={<SignLayout comp={<SignUp />} path="/signUp" />}
      />
      <Route
        exact
        path="/"
        element={<LandingPage/>}
      />
      <Route exact path="/userProfile" element={<UserProfile></UserProfile>} />
      <Route exact path="/sendMoney" element={<SendMoney></SendMoney>} />
      <Route exact path="/addMoney" element={<AddMoney></AddMoney>} />
      <Route
        exact
        path="/withdrawMoney"
        element={<WithdrawMoney></WithdrawMoney>}
      />
    </Route>

  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
