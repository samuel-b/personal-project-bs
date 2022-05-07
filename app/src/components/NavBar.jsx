import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";

const Link = styled.a`
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
                    <Link href="#">Home</Link>
                    <Link href="#">About</Link>
                    <Link href="#">Projects</Link>
                    <Link href="#">Contact</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
