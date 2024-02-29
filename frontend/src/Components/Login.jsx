import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Login() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [data, setData] = useState();
    const [sub, setSub] = useState(false);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/users")
            .then((res) => {
                setUserData(res.data);
            })
            .catch((err) => {
                console.log("Error while fetching the data of Users", err);
            });
    }, []);

    const onSubmit = async (data) => {
        setData(data);

        const user = userData.find(
            (user) => user.Email === data.email && user.Password === data.password && user.Username === data.username);

        if (user) {
            console.log(user);
            user.password = undefined;
            Cookies.set("userData", JSON.stringify(user));
            console.log("Login successful!");
            setSub(true);
            navigate("/");
        } else {
            console.log("Invalid email or password");
        }
    };

    return (
        <>
            <div className="w-screen justify-center bg-white h-lvh">
                <div className="grid justify-center">
                    <h1 className="text-center text-3xl text-white font-medium p-10">
                        LOGIN
                    </h1>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex justify-center items-center p-10 h-fit bg-white w-fit flex-col  text-white border border-black rounded"
                    >
                        {sub && !Object.keys(errors).length && (
                            <h2 className="text-green-600 font-semibold text-lg border py-4 px-24">
                                Login Successful!
                            </h2>
                        )}
                        <div className="form-group">
                            <input
                                className="duration-500 hover:border hover:border-cyan-700 hover:shadow-2xl border mt-6 w-96 py-2 pl-4 rounded-sm bg-white text-cyan-900"
                                {...register("username", {
                                    required: "Username is required",
                                })}
                                placeholder="Enter your username"
                            />
                            <p className="text-red-500 text-xs ">
                                {errors.username && (
                                    <span className="error-message">
                                        {errors.username.message}
                                    </span>
                                )}
                            </p>
                        </div>

                        <div className="form-group">
                            <input
                                className="duration-500 hover:border hover:border-cyan-700 hover:shadow-2xl border mt-6 w-96 py-2 pl-4 rounded-sm bg-white text-cyan-900"
                                {...register("email", {
                                    required: "email is required",
                                })}
                                placeholder="Enter your email"
                            />
                            <p className="text-red-500 text-xs ">
                                {errors.email && (
                                    <span className="error-message">
                                        {errors.email.message}
                                    </span>
                                )}
                            </p>
                        </div>
                        <div className="form-group">
                            <input
                                className="duration-500 hover:border hover:border-cyan-700 hover:shadow-2xl border mt-6 w-96 py-2 pl-4 rounded-sm bg-white text-cyan-900"
                                {...register("password", {
                                    required: "Password is required",
                                })}
                                placeholder="Enter your Password"
                                type="password"
                            />
                            <p className="text-red-500 text-xs">
                                {errors.password && (
                                    <span className="error-message">
                                        {errors.password.message}
                                    </span>
                                )}
                            </p>
                        </div>

                        <button
                            type="submit"
                            className="rounded bg-cyan-700 duration-500 mt-10 px-10 py-2 hover:bg-cyan-900 text-white p-10-15 border-none border-radius-4px cursor-pointer text-base"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
