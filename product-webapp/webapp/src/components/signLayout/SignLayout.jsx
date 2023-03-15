import "../../styles/signStyle.css";
import react from "react";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import HomeIll from "../../assets/home.png";
import Logo from "../../assets/logo.png";
const SignLayout = (props) => {
  return (
    <div class="container">
      {props.comp}

      <div class="panels-container">
        <div class="panel left-panel">
          {props.path === "/signIn" ? (
            <>
              <div class="content">
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <a href="/">
                    <img src={Logo} alt="logo" class="image" />
                  </a>
                </ButtonBase>
                <h3>New here ?</h3>
                <p>
                  Join us to have the best expereince in digital wallet
                  platforms
                </p>

                <Button
                  href="/signUp"
                  class="btn transparent bubble"
                  id="sign-in-btn"
                >
                  Sign Up
                </Button>
              </div>
              <ButtonBase sx={{ width: 450, height: 450 }}>
                <img src={HomeIll} class="image" alt="" />
              </ButtonBase>
            </>
          ) : (
            <>
              <div class="content">
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <a href="/">
                    <img src={Logo} alt="logo" class="image" />
                  </a>
                </ButtonBase>
                <h3>One of us ?</h3>
                <p>
                  Click the button below to login and continue your journey with
                  us
                </p>

                <Button
                  href="/signIn"
                  class="btn transparent bubble"
                  id="sign-in-btn"
                >
                  Sign In
                </Button>
              </div>
              <ButtonBase sx={{ width: 450, height: 450 }}>
                <img src={HomeIll} class="image" alt="" />
              </ButtonBase>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignLayout;
