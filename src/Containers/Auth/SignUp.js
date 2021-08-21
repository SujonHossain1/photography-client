// import axios from 'axios';
import { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BiKey } from 'react-icons/bi';
import { FaRegAddressBook } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

const SignUp = () => {
    const [user, setUser] = useState({});
    const { authenticate } = useSelector((state) => state.auth);

    const inputHandler = (event) => {
        const { name, value } = event.target;
        setUser((data) => ({
            ...data,
            [name]: value,
        }));
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log(user);
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
                                <MdPhoneIphone />
                            </span>
                            <input
                                type="text"
                                className="border-0"
                                name="phone"
                                placeholder="Phone"
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
                        <div className="input-field border border-secondary w-75 mx-auto mt-4 py-2">
                            <span className="input-icon">
                                <FaRegAddressBook />
                            </span>
                            <input
                                type="text"
                                className="border-0"
                                name="address"
                                placeholder="Address"
                                onChange={inputHandler}
                            />
                        </div>
                        <div className="text-center">
                            <input
                                type="submit"
                                value="Sign Up"
                                className="mt-3 w-75 mx-auto py-2 login-btn"
                            />
                        </div>
                    </form>
                </div>
                <div className=" text-center mx-auto py-3 text-white">
                    Have any Account? <Link to="/login"> Login </Link>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
