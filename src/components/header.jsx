import React from "react";
import { Link, useHistory } from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

const Heading = () => {
    const history = useHistory();
    const auth = React.useContext(AuthContext);

    const logoutHandler = (event) => {
        event.preventDefault();
        auth.logout();
        history.push('/');
    };

  return (
      <header className="nav">
          <Link to="/info" className="nav__link" id="infoLink"><i className="fas fa-comment-alt"></i>Информация</Link>
          <Link to="/chat" className="nav__link"><i className="fas fa-comments"></i>Чат</Link>
          <Link to="/tableList" className="nav__link"><i className="fas fa-calendar-alt"></i>Расписание</Link>
          <Link to="/" onClick={logoutHandler} className="nav__link"><i className="fas fa-sign-out-alt"></i>Выйти</Link>
      </header>
  )
};

export default Heading;
