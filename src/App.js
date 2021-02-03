import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// firebase
import firebase from "firebase/app";
import "firebase/auth";

// components
import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import UserContext from "./context/UserContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import firebaseConfig from "./Config/firebaseConfig";

// init firebase
firebase.initializeApp(firebaseConfig);

function App() {
    const [user, setUser] = useState(null);

    return (
        <Router>
            <ToastContainer />
            <UserContext.Provider value={{ user, setUser }}>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="*" component={PageNotFound} />
                </Switch>

                <Footer />
            </UserContext.Provider>
        </Router>
    );
}

export default App;
