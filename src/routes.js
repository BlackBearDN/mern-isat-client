import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';

import Auth from './pages/Auth';

import Info from "./components/Info/Info";
import Chat from "./components/Chat/Chat";
import TableList from "./components/TablelList/TableList";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/info">
                    <Info/>
                </Route>
                <Route path="/chat" exact>
                    <Chat/>
                </Route>
                <Route path="/tableList">
                    <TableList/>
                </Route>

                <Redirect to="/info"/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <Auth />
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
};
