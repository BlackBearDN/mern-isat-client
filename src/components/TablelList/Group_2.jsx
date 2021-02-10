import React from "react";
import {Link} from "react-router-dom";

const Group_2 = () => {
    return (
        <div className="tableList__days">
            <Link to="/tableList/group_2/Monday" className="tableList__days_day">Понедельник</Link>
            <Link to="/tableList/group_2/Tuesday" className="tableList__days_day">Вторник</Link>
            <Link to="/tableList/group_2/Wednesday" className="tableList__days_day">Среда</Link>
            <Link to="/tableList/group_2/Thursday" className="tableList__days_day">Четверг</Link>
            <Link to="/tableList/group_2/Friday" className="tableList__days_day">Пятница</Link>
            <Link to="/tableList/group_2/Saturday" className="tableList__days_day">Суббота</Link>
        </div>
    )
};

export default Group_2;