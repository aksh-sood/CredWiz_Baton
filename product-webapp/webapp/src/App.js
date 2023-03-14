import "./App.css";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import SignLayout from "./components/signLayout/SignLayout";
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
      ></Route>
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
