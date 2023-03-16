import "./App.css";
import SignIn from "./components/signIn/SignIn";
import Footer from "./components/footer/Footer";
import SignUp from "./components/signUp/SignUp";
import SignLayout from "./components/signLayout/SignLayout";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import LandingPage from "./components/landing/LandingPage";
import UserProfile from "./components/userProfile/UserProfile";
import SendMoney from "./components/sendMoney/SendMoney";
import AddMoney from "./components/addMoney/AddMoney";
import RootLayout from "./components/rootLayout/RootLayout";
import WithdrawMoney from "./components/widthdrawMoney/WithdrawMoney";
import ThemeDashboard from "./components/dashboard/ThemeDashboard";
import ThemeTransaction from "./components/history/ThemeTransaction";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Router,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route exact path="/" element={<h1>haii</h1>}>

    <Route>
      <Route path="/" element={<LandingPage />} />

      <Route exact path="/transaction" element={<ThemeTransaction/>}/>


      <Route exact path="/dashboard" element={<ThemeDashboard />} />

      <Route exact path="/updateUser" element={<UpdateUser />} />
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
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  );
}

export default App;
