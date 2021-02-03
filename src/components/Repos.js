import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

const Repos = ({ repos_url }) => {
    const [repos, setRepos] = useState([]);
    const fetchRepos = async () => {
        const { data } = await axios.get(repos_url);
        setRepos(data);
    };
    //when we get url, fetchRepos will get triggered which will further fetch data and store it in state(repos)
    useEffect(() => {
        fetchRepos();
    }, [repos_url]);

    return (
        <ListGroup>
            {repos.map((repo) => (
                <ListGroupItem
                    key={repo.id}
                    className="text-center p-3 bg-dark text-white"
                >
                    <div className="text-white">
                        Repo Name:
                        <span className="text-info pl-2">{repo.name}</span>
                    </div>
                    <div className="text-white">
                        Repo Owner:
                        <span className="text-warning pl-2 ">
                            {repo.owner?.url}
                        </span>
                    </div>
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};
export default Repos;
