import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Link1 = styled.a`
    color: ${(props) => props.theme.colors["primary"]};
    font-weight: 600;
    text-decoration: none;
    padding: 8px;
    &:hover {
        color: ${(props) => props.theme.colors["primary"]};
        text-decoration: underline;
        text-decoration-color: ${(props) => props.theme.colors["secondary"]};
        text-decoration-thickness: 15%;
    }
`;

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="sm" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Link1 as={Link} to="/">
                        Home
                    </Link1>
                    <Link1 href="#">About</Link1>
                    <Link1 as={Link} to="/projects">
                        Projects
                    </Link1>
                    <Link1 href="#">Contact</Link1>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
