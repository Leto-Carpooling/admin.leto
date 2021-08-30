import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { ProtectedRoute } from "./util/ProtectedRoute";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VerifyEmail from "./screens/VerifyEmail";
import Navbar from "./components/Navbar";
import Simulator from "./screens/Simulator";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <ProtectedRoute exact path="/verifyemail">
                    <VerifyEmail />
                </ProtectedRoute>
            </Switch>
            <Switch>
                <ProtectedRoute exact path="/">
                    <Navbar />
                    <Home />
                </ProtectedRoute>
                <ProtectedRoute exact path="/simulator">
                    <Navbar />
                    <Simulator />
                </ProtectedRoute>
                <ProtectedRoute exact path="/approveadmins">
                    <Navbar />
                </ProtectedRoute>
            </Switch>
        </Router>
    );
}

export default App;
