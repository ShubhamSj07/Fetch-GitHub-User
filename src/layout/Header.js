import React, { useState, useContext } from "react";
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    NavbarText,
    NavLink,
} from "reactstrap";
import { Button } from "@material-ui/core";

import { Link } from "react-router-dom";

import "../App.css";
import UserContext from "../context/UserContext";

const Header = () => {
    const contextAPI = useContext(UserContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar
            style={{ backgroundColor: "#212121", padding: "1.1rem" }}
            light
            expand="md"
        >
            <NavbarBrand>
                <Link
                    to="/"
                    className="text-white brand"
                    style={{ textDecoration: "none", fontSize: "1rem" }}
                >
                    <h4 className="brand">
                        Fetch Github User (
                        <span style={{ color: "#FFD755" }}>Firebase App</span>)
                    </h4>
                </Link>
            </NavbarBrand>
            <NavbarText className="text-white p-2" style={{ fontSize: "1rem" }}>
                {contextAPI.user?.email ? (
                    <span
                        style={{ paddingLeft: "0.8rem", textAlign: "center" }}
                    >
                        Welcome, {contextAPI.user.email}
                    </span>
                ) : (
                    ""
                )}
            </NavbarText>
            <NavbarToggler
                onClick={toggle}
                style={{ backgroundColor: "#FFD755" }}
            />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {contextAPI.user ? (
                        <NavItem>
                            <NavLink
                                onClick={() => contextAPI.setUser(null)}
                                className="text-white"
                            >
                                <Button variant="outlined" color="primary">
                                    Logout
                                </Button>
                            </NavLink>
                        </NavItem>
                    ) : (
                        <>
                            <NavItem>
                                <NavLink
                                    tag={Link}
                                    to="/signup"
                                    className="text-white"
                                >
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                    >
                                        Sign Up
                                    </Button>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    tag={Link}
                                    to="/signin"
                                    className="text-white"
                                >
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                    >
                                        Sign In
                                    </Button>
                                </NavLink>
                            </NavItem>
                        </>
                    )}
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;
