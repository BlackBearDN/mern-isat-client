import React from "react";

import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContext";

const Auth = () => {

    const auth = React.useContext(AuthContext);
    const message = useMessage();
    const {loading, error, request, clearError} = useHttp();
    const [form, setForm] = React.useState({
        userName: "", password: ""
    });

    React.useEffect(() => {
        message(error);
        clearError()
    }, [error, message, clearError]);

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value });
    };

    const registerHandler = async () => {
        try {
            const data = await request("/api/auth/register", "POST", {...form});
            message(data.message);
        } catch (e) {}
    };

    const loginHandler = async () => {
        try {
            const data = await request("/api/auth/login", "POST", {...form});
            auth.login(data.token, data.userId, form.userName);
        } catch (e) {}
    };

    return (
        <div className="auth">
            <div className="auth__window">
                <div className="auth__window_title">Авторизация</div>
                <div className="auth__window_input">
                    <label htmlFor="userName">Имя пользователя</label>
                    <input
                        placeholder="Введите имя пользователя"
                        id="userName"
                        type="text"
                        name="userName"
                        onChange={changeHandler}
                    />
                </div>
                <div className="auth__window_input">
                    <label htmlFor="password">Пароль</label>
                    <input
                        placeholder="Введите пароль"
                        id="password"
                        type="password"
                        name="password"
                        onChange={changeHandler}
                        style={{marginBottom: "2.5vh"}}
                    />
                </div>
                <hr style={{color: "#000", width: "100%"}}/>
                <div className="auth__window_buttons">
                    <button
                        className="buttonAuth"
                        onClick={loginHandler}
                        disabled={loading}
                    >
                        Войти
                    </button>
                    <button
                        className="buttonReg"
                        onClick={registerHandler}
                        disabled={loading}
                    >
                        Регистрация
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Auth;
