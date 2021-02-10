import React from "react";
import {Route} from "react-router-dom";
import InfoCarusel from "./InfoCarusel";
import VsuetInfo from "./VsuetInfo";
import PodsVsuetInfo from "./PodsVsuetInfo";

const Info = () => {
    return (
        <div className="infoPage">
            <InfoCarusel/>
            <Route path="/info/vsuet" component={VsuetInfo}/>
            <Route path="/info/pods_vsuet" component={PodsVsuetInfo}/>
        </div>
    )
};

export default Info;
