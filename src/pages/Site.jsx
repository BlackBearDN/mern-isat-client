import React from "react";
import { Route } from "react-router-dom";

import Heading from "../components/header";
import Info from "../components/Info/Info";
import Chat from "../components/Chat/Chat";
import TableList from "../components/TablelList/TableList";
import Map from "../components/Map/Map";

const Site = () => {
    return (
        <div className="Site">
            <Heading/>
            <Route exact path="/site" component={Info}/>
            <Route path="/chat" component={Chat}/>
            <Route path="/tableList" component={TableList}/>
            <Route path="/map" component={Map}/>
        </div>
    );
};

export default Site;