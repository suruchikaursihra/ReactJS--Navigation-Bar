import React from "react";
import * as routes from "../constants/routes";
import Home from "../components/home/home";
import Login from "../components/login/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/header/header";


class RouteComponent extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path={routes.HOME}>
                            <Home />
                        </Route>
                        <Route exact path={routes.LOGIN}>
                            <Login />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default RouteComponent;