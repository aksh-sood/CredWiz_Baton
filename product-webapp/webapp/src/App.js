import "./App.css";
import SignIn from "./components/signIn/SignIn";
import SignLayout from "./components/signLayout/SignLayout";
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
      <Route exact path="/signin" element={<SignLayout comp={<SignIn />} />} />
      <Route exact path="/" element={<h1>haii</h1>}></Route>
      <Route exact path="/userProfile" element={<UserProfile></UserProfile>}/>
      <Route exact path="/sendMoney" element={<SendMoney></SendMoney>}/>
      <Route exact path="/addMoney" element={<AddMoney></AddMoney>}/>
      <Route exact path="/withdrawMoney" element={<WithdrawMoney></WithdrawMoney>}/>
      
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
