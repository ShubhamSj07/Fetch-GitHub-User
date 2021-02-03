import React from "react";
import { Card, CardBody } from "reactstrap";

const UserCard = ({ user }) => {
    return (
        <Card
            className="text-center mt-3 mb-4 bg-dark text-white"
            style={{ height: "auto" }}
        >
            <img
                src={user.avatar_url}
                className="rounded-circle img-thumbnail  border-warning mx-auto d-block"
                style={{
                    height: "250px",
                    width: "250px",
                }}
            />
            <CardBody>
                <div className="text-warning">Name : {user.name}</div>
                <div className="text-secondary">Bio : {user.bio}</div>
                <div className="text-white">Location : {user.location}</div>
                <div className="text-info">
                    Available for hire : {user.hireable ? "YES" : "NOPE"}
                </div>
            </CardBody>
        </Card>
    );
};

export default UserCard;
