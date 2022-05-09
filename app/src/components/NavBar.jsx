import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

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

const Test = styled.div`
    display: flex;
    flex-direction: column;
`;

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="sm" variant="light">
            <Container fluid>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Test>
                            <div>
                                <img src="https://img.icons8.com/ios-glyphs/24/0c63e4/new-post.png" />
                                samuel@samuelb.dev
                            </div>

                            <div>
                                <img src="https://img.icons8.com/material-outlined/24/0c63e4/github.png" />
                                https://github.com/samuel-b
                            </div>
                            <div>
                                <img
                                    src="https://img.icons8.com/ios-filled/22/0c63e4/linkedin.png"
                                    alt=""
                                />
                                https://www.linkedin.com/in/samuel-w-brooker/
                            </div>
                        </Test>
                    </Nav>
                    <Nav className="ms-auto">
                        <Link1 as={Link} to="/">
                            Home
                        </Link1>
                        <Link1 as={Link} to="/about">
                            About
                        </Link1>
                        <Link1 as={Link} to="/projects">
                            Projects
                        </Link1>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
