import React, { useState, useContext } from "react";
import {
    Container,
    Form,
    FormGroup,
    Label,
    Col,
    Input,
    Row,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
} from "reactstrap";
import { Button } from "@material-ui/core";

import firebase from "firebase/app";
import UserContext from "../context/UserContext";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
    const contextAPI = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
                // console.log(res.user.email);
                contextAPI.setUser({
                    email: res.user.email,
                    uid: res.user.uid,
                });
            })
            .catch((error) => {
                console.log(error);
                toast(error.message, {
                    type: "error",
                });
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignUp();
    };

    if (contextAPI.user?.uid) {
        return <Redirect to="/" />;
    }
    return (
        <Container className="text-center">
            <Row>
                <Col lg={6} className="offset-lg-3 mt-5">
                    <Card>
                        <Form onSubmit={handleSubmit}>
                            <CardHeader className="bg-dark text-white">
                                Sign In here
                            </CardHeader>
                            <CardBody>
                                <FormGroup row>
                                    <Label for="email" sm={3}>
                                        Email
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="provide your email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="password" sm={3}>
                                        Password
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="your password here"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                    </Col>
                                </FormGroup>
                            </CardBody>
                            <CardFooter className="bg-dark text-white">
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    disableElevation
                                >
                                    Sign In
                                </Button>
                            </CardFooter>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Signup;
