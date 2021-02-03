import React, { useContext, useState } from "react";

// firebase
import firebase from "firebase/app";
import "firebase/auth";

// third party
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
} from "reactstrap";
import { Button } from "@material-ui/core";

import UserContext from "../context/UserContext";

const SignUp = () => {
    const contextAPI = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                // console.log(response.user);

                contextAPI.setUser({
                    email: response.user.email,
                    uid: response.user.uid,
                });
            })
            .catch((error) => {
                console.error(error);
                toast(error.message, {
                    type: "error",
                });
            });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSignup();
    };

    if (contextAPI.user?.uid) {
        return <Redirect to="/" />;
    }

    return (
        <Container className="text-center ">
            <Row>
                <Col lg={6} className="offset-lg-3 mt-5">
                    <Card>
                        <Form onSubmit={handleFormSubmit}>
                            <CardHeader className="bg-dark text-white">
                                Sign Up here
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
                            <CardFooter className="bg-dark text-white ">
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    disableElevation
                                >
                                    Register
                                </Button>
                            </CardFooter>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;
