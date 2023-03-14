import "./App.css";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import SignLayout from "./components/signLayout/SignLayout";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route exact path="/" element={<h1>haii</h1>}>
    <Route>
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
        element={<h1>haii i am vivekanandan and i am coollllll....</h1>}
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

    // </Route>
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
