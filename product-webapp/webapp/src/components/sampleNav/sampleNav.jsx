import Container from "react-bootstrap/Container";
import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from '../../assets/logo.png'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const Navsample = () => {
    return (
        <Navbar collapseOnSelect expand="lg" style={{ background: "#241c2c", position: "fixed", width: "100%" }} variant="dark">
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{
                     mr: 2,
                     color: "white", 
                    }}
            >
                <MenuIcon />
            </IconButton>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={Logo}
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                        alt="Credwiz logo"
                    />
                    <b>Credwiz</b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="/signin">
                            About
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/signup">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navsample;
