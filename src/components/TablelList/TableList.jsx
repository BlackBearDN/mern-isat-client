import React from "react";
import { Link, Route } from "react-router-dom";
import Group_1 from "./Group_1";
import Group_2 from "./Group_2";
import {
    Friday_1, Friday_2,
    Monday_1, Monday_2,
    Saturday_1, Saturday_2,
    Thursday_1, Thursday_2,
    Tuesday_1, Tuesday_2,
    Wednesday_1, Wednesday_2
} from "./Days";

const TableList = () => {
    return (
        <div className="tableList">
            <div className="tableList__groups">
                <Link to="/tableList/group_1"  className="tableList__groups_group">Подгруппа 1</Link>
                <Link to="/tableList/group_2" className="tableList__groups_group">Подгруппа 2</Link>
            </div>
            <Route path="/tableList/group_1" component={Group_1}/>
            <Route path="/tableList/group_2" component={Group_2}/>
            <Route path="/tableList/group_1/Monday" component={Monday_1}/>
            <Route path="/tableList/group_1/Tuesday" component={Tuesday_1}/>
            <Route path="/tableList/group_1/Wednesday" component={Wednesday_1}/>
            <Route path="/tableList/group_1/Thursday" component={Thursday_1}/>
            <Route path="/tableList/group_1/Friday" component={Friday_1}/>
            <Route path="/tableList/group_1/Saturday" component={Saturday_1}/>
            <Route path="/tableList/group_2/Monday" component={Monday_2}/>
            <Route path="/tableList/group_2/Tuesday" component={Tuesday_2}/>
            <Route path="/tableList/group_2/Wednesday" component={Wednesday_2}/>
            <Route path="/tableList/group_2/Thursday" component={Thursday_2}/>
            <Route path="/tableList/group_2/Friday" component={Friday_2}/>
            <Route path="/tableList/group_2/Saturday" component={Saturday_2}/>
        </div>
    )
};

export default TableList;