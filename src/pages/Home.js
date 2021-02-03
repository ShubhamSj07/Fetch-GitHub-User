import React, { useState, useContext } from "react";
import Axios from "axios";

import {
    Row,
    Container,
    Col,
    Input,
    InputGroup,
    InputGroupAddon,
} from "reactstrap";
import { Button } from "@material-ui/core";

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { Redirect } from "react-router-dom";
import UserContext from "../context/UserContext";
import { toast } from "react-toastify";

const Home = () => {
    const contextAPI = useContext(UserContext);
    const [query, setQuery] = useState("");
    const [user, setUser] = useState(null);

    const fetchDetails = async () => {
        try {
            const { data } = await Axios.get(
                `https://api.github.com/users/${query}`
            );
            setUser(data);
            // console.log({ data });
        } catch (eror) {
            toast("Not able to locate user", { type: "error" });
        }
    };

    //Put Anypage behind login

    if (!contextAPI.user?.uid) {
        return <Redirect to="/signin" />;
    }

    return (
        <Container>
            <Row className=" mt-3">
                <Col md="5">
                    <InputGroup>
                        <Input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Please provide the username"
                        />
                        <InputGroupAddon addonType="append">
                            <Button
                                onClick={fetchDetails}
                                className="p-2 ml-3 "
                                variant="contained"
                                color="secondary"
                            >
                                Fetch User
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                    {user ? <UserCard user={user} /> : null}
                </Col>
                <Col md="7">
                    {user ? <Repos repos_url={user.repos_url} /> : null}
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
