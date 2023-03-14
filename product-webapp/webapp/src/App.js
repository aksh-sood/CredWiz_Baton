import "./App.css";
import SignIn from "./components/signIn/SignIn";
import SignLayout from "./components/signLayout/SignLayout";
import LandingPage from "./components/landing/LandingPage";
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
      <Route exact path="/signin" element={<SignLayout comp={<SignIn />} />} />
      <Route exact path="/" element={<LandingPage />}></Route>
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
