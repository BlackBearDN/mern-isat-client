import React from "react";
import {Link} from "react-router-dom";

const InfoCarusel = () => {
    return (
        <div className="infoPage__carousel">
            <Link to="/info/vsuet" className="infoPage__carousel_link">
                <div id="vsuetInfo" className="infoPage__carousel_link_img"></div>
                <div className="infoPage__carousel_link_text">ВГУИТ</div>
            </Link>
            <Link to="/info/pods_vsuet" className="infoPage__carousel_link">
                <div id="podsVsuetInfo" className="infoPage__carousel_link_img"></div>
                <div className="infoPage__carousel_link_text">Подслушано ВГУИТ</div>
            </Link>
        </div>
    )
};

export default InfoCarusel;
