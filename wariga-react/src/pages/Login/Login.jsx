// eslint-disable-next-line no-unused-vars
import React from "react";
import logoWariga from "../../webp-img/logoWariga.webp";

export default function Login() {
    return (
        <>
            <div className="flex h-screen flex-col justify-center mx-8 my-4 sm:my-0">
                <div className="sm:mx-auto sm:w-full text-white">
                    <a href="/wariga">
                        <img
                            className="mx-auto h-10 w-auto"
                            src={logoWariga}
                            alt="Your Company"
                        />
                    </a>
                    <h2 className="mt-8 text-center text-3xl md:text-5xl font-bold tracking-tight">
                        Masuk Ke Akunmu
                    </h2>
                    <p className="md:mt-8 mt-2 text-center font-light text-md md:text-xl">
                        Anda belum Punya akun?{" "}
                        <span className="text-[#FFB400] font-bold">
                            <a href="/Register">Ayo daftar</a>
                        </span>
                    </p>
                </div>

                <div className="mt-10 text-[#BFBFBF] max-w-3xl w-full mx-auto">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium "
                            >
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-3 px-5 shadow-sm ring-1 ring-[#BFBFBF] text-gray focus:ring-2 focus:ring-[#E2A000] sm:text-sm sm:leading-6 transparent bg-transparent"
                                    placeholder="YourEmail@gmail.com"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a
                                        href="#"
                                        className="font-semibold text-[#E2A000] hover:text-[#FFCC00]"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-3 px-5 shadow-sm ring-1 ring-[#BFBFBF] text-gray focus:ring-2 focus:ring-[#E2A000] sm:text-sm sm:leading-6 transparent bg-transparent"
                                    placeholder="********"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full mt-8 justify-center rounded-md bg-[#0056D7] py-3 px-5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-[#0056D7]/60  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Masuk
                            </button>
                        </div>
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex justify-center items-center gap-4 w-full rounded-md border-0 py-2.5 px-5 shadow-sm ring-1 ring-[#BFBFBF] text-white font-bold focus:ring-2 focus:ring-[#E2A000] sm:text-sm sm:leading-6 transparent bg-transparent cursor-pointer ">
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            width="28"
                                            height="28"
                                            viewBox="0 0 48 48"
                                        >
                                            <path
                                                fill="#FFC107"
                                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                            ></path>
                                            <path
                                                fill="#FF3D00"
                                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                            ></path>
                                            <path
                                                fill="#4CAF50"
                                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                            ></path>
                                            <path
                                                fill="#1976D2"
                                                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <p>Masuk dengan Google</p>
                                </div>
                                <div className="flex justify-center items-center gap-4 w-full rounded-md border-0 py-2.5 px-5 shadow-sm ring-1 ring-[#BFBFBF] text-white font-bold focus:ring-2 focus:ring-[#E2A000] sm:text-sm sm:leading-6 transparent bg-transparent cursor-pointer">
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            width="28"
                                            height="28"
                                            viewBox="0 0 30 30"
                                        >
                                            <path
                                                fill="#3C5A99"
                                                d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <p>Masuk dengan Facebook</p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
