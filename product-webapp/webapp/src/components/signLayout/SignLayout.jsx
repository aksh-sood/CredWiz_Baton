import "../../styles/signStyle.css";
import react from "react";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import HomeIll from "../../assets/home.png";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
const SignLayout = (props) => {
  const navigate = useNavigate();

  return (
    <div className="s-container">
      {props.comp}

      <div className="panels-container">
        <div className="panel left-panel">
          {props.path === "/signIn" ? (
            <>
              <div className="content">
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <a href="/">
                    <img src={Logo} alt="logo" className="image img-fluid" />
                  </a>
                </ButtonBase>
                <h3>New here ?</h3>
                <p>
                  Join us to have the best expereince in digital wallet
                  platforms
                </p>

                <Button
                  onClick={() => {
                    navigate("/signup");
                  }}
                  // type="submit"
                  className="btn bubble "
                  id="sign-in-btn"
                  value="Sign up"
                  sx={{
                    marginX: "30%",
                    borderRadius: "20px",
                    backgroundColor: "#aeae50",
                    color: "#241c2c",
                    border: "2px solid #241c2c",
                    "&:hover": {
                      boxShadow: "none",
                      backgroundColor: "#241c2c",
                      color: "#aeae50",
                      border: "2px solid #aeae50",
                    },
                  }}
                >
                  Sign Up
                </Button>
              </div>
              <ButtonBase sx={{ width: 450, height: 450 }}>
                <img src={HomeIll} className="image img-fluid" alt="" />
              </ButtonBase>
            </>
          ) : (
            <>
              <div className="content">
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <a href="/">
                    <img src={Logo} alt="logo" className="image img-fluid" />
                  </a>
                </ButtonBase>
                <h3>One of us ?</h3>
                <p>
                  Click the button below to login and continue your journey with
                  us
                </p>
                <Button
                  onClick={() => {
                    navigate("/signin");
                  }}
                  type="submit"
                  className="btn bubble "
                  id="sign-in-btn"
                  value="Sign up"
                  sx={{
                    marginX: "30%",
                    borderRadius: "20px",
                    backgroundColor: "#aeae50",
                    color: "#241c2c",
                    border: "2px solid #241c2c",
                    "&:hover": {
                      boxShadow: "none",
                      backgroundColor: "#241c2c",
                      color: "#aeae50",
                      border: "2px solid #aeae50",
                    },
                  }}
                >
                  Sign In
                </Button>
              </div>
              <ButtonBase sx={{ width: 450, height: 450 }}>
                <img src={HomeIll} className="image img-fluid" alt="" />
              </ButtonBase>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignLayout;
