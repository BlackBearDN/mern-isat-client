import React from "react";
import {Link} from "react-router-dom";

const Group_1 = () => {
    return (
        <div className="tableList__days">
            <Link to="/tableList/group_1/Monday" className="tableList__days_day">Понедельник</Link>
            <Link to="/tableList/group_1/Tuesday" className="tableList__days_day">Вторник</Link>
            <Link to="/tableList/group_1/Wednesday" className="tableList__days_day">Среда</Link>
            <Link to="/tableList/group_1/Thursday" className="tableList__days_day">Четверг</Link>
            <Link to="/tableList/group_1/Friday" className="tableList__days_day">Пятница</Link>
            <Link to="/tableList/group_1/Saturday" className="tableList__days_day">Суббота</Link>
        </div>
    )
};

export default Group_1;