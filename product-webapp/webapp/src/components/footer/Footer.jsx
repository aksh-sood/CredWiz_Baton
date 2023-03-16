import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import Logo from "../../assets/logo.png";
import "../../styles/colors.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "none",
      width: "90%",
      padding: "0 0.4rem",
    },
  },
}));

export default function App() {
  return (
    <MDBFooter
      className="text-center text-lg-start text-muted"
      style={{ backgroundColor: "#241c2c" }}
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block ">
          <span className="secondary-color">
            Get connected with us on social networks:
          </span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon className="secondary-color" fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon className="secondary-color" fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon className="secondary-color" fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon className="secondary-color" fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon className="secondary-color" fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon className="secondary-color" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 secondary-color">
                CredWiz
              </h6>

              <a href="/">
                <img
                  src={Logo}
                  className="img-fluid hover-shadow h-75 w-50"
                  alt="..."
                />
              </a>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 secondary-color">
                Products
              </h6>
              <p>
                <a href="#!" className="secondary-color">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="secondary-color">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="secondary-color">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="secondary-color">
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 secondary-color">
                {" "}
                links
              </h6>
              <p>
                <a href="#!" className="secondary-color">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="secondary-color">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="secondary-color">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="secondary-color">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 secondary-color">
                Contact
              </h6>
              <p className="secondary-color">
                <MDBIcon
                  style={{ color: "#aeae50" }}
                  icon="home"
                  className="me-2"
                />
                New York, NY 10012, US
              </p>
              <p className="secondary-color">
                <MDBIcon className="me-3" icon="envelope" />
                info@example.com
              </p>
              <p className="secondary-color">
                <MDBIcon className="me-3" icon="phone" /> + 01 234 567 88
              </p>
              <p className="secondary-color">
                <MDBIcon className="me-3" icon="print" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4 secondary-color"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright :&nbsp;
        <a
          className="secondary-color fw-bold "
          href="https://batonsystems.com/"
        >
          CredWiz.com
        </a>
      </div>
    </MDBFooter>
  );
}
