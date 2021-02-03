import React from "react";
import { Container } from "reactstrap";
import "../App.css";
const Footer = () => {
    return (
        <Container
            fluid
            tag="footer"
            className="text-center text-white fixed-bottom p-3 footerText"
            style={{ backgroundColor: "#212121" }}
        >
            <a
                href="https://www.linkedin.com/in/shubham-jadhav-77a588192"
                style={{ textDecoration: "none", color: "#fff" }}
            >
                Shubham Jadhav @ GitHub FireBase App 2021
            </a>
        </Container>
    );
};

export default Footer;
