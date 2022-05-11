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

const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="sm" variant="light">
            <Container fluid>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link1 as={Link} to="/">
                            Home
                        </Link1>
                        <Link1 as={Link} to="/projects">
                            Projects
                        </Link1>
                    </Nav>
                    <Nav>
                        <IconWrapper>
                            <div>
                                <img src="https://img.icons8.com/material-outlined/24/0c63e4/github.png" />
                                samuel-b
                            </div>
                            <div>
                                <img
                                    src="https://img.icons8.com/ios-filled/22/0c63e4/linkedin.png"
                                    alt=""
                                />
                                samuel-w-brooker
                            </div>
                            <div>
                                <img src="https://img.icons8.com/ios-glyphs/24/0c63e4/new-post.png" />
                                samuel@samuelb.dev
                            </div>
                        </IconWrapper>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
