import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BiKey } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import { login } from '../../store/actions/authAction';
import './Login.scss';

const Login = () => {
    const [user, setUser] = useState({});
    const { authenticate } = useSelector((state) => state.auth);
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();

    const { from } = location.state || { from: { pathname: '/' } };

    const inputHandler = (event) => {
        const { name, value } = event.target;
        setUser((data) => ({
            ...data,
            [name]: value,
        }));
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        dispatch(login(user, history, from));
    };

    if (authenticate) {
        return <Redirect to="/" />;
    }

    return (
        <section
            className="login-section d-flex justify-content-between align-items-center"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)), url(https://raw.githubusercontent.com/rakibshakib/login-form-react/main/src/components/LoginForm/bg.jpg)`,
            }}
        >
            <div className="container">
                <div className="border border-secondary  col-md-6 col-lg-5 mx-auto py-5 from-body text-white">
                    <form onSubmit={submitHandler} className="py-3">
                        <div className="input-field border border-secondary w-75 mx-auto py-2">
                            <span className="input-icon">
                                <AiOutlineMail />
                            </span>
                            <input
                                type="text"
                                name="email"
                                className="border-0"
                                placeholder="Email"
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="input-field border border-secondary w-75 mx-auto mt-4 py-2">
                            <span className="input-icon">
                                <BiKey />
                            </span>
                            <input
                                type="password"
                                className="border-0"
                                name="password"
                                placeholder="Password"
                                onChange={inputHandler}
                            />
                        </div>
                        <div className="w-75 mt-3 mx-auto">
                            <div className="login-footer d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <input type="checkbox" name="" id="remember" />
                                    <label htmlFor="remember" className="ms-1">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <input
                                type="submit"
                                value="Login"
                                className="mt-3 w-75 mx-auto py-2 login-btn"
                            />
                        </div>
                    </form>
                </div>
                <div className=" text-center mx-auto py-3 text-white">
                    Don't Have an Account? <Link to="/sign-up"> Sign Up </Link>
                </div>
            </div>
        </section>
    );
};

export default Login;
