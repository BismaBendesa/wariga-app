// eslint-disable-next-line no-unused-vars
import React from "react";
import logoWariga from "../../webp-img/logoWariga.webp";

export default function ForgotPassword() {
    return (
        <>
            <div className="flex h-screen flex-col justify-center mx-[48px] ">
                <div className="sm:mx-auto sm:w-full text-white mt-[-100px]">
                    <img
                        className="mx-auto h-10 w-auto"
                        src={logoWariga}
                        alt="Your Company"
                    />
                    <h2 className="mt-8 text-center text-3xl md:text-5xl font-bold tracking-tight">
                        Lupa Password
                    </h2>
                    <p className="md:mt-8 mt-4 text-center font-light text-md md:text-xl">
                        Tolong tuliskan alamat email anda di form dibawah, Kami
                        akan mengirimkan kode verifikasi ke email anda.
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
                            <button
                                type="submit"
                                className="flex w-full mt-8 justify-center rounded-md bg-[#0056D7] py-3 px-5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-[#0056D7]/60  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Kirim Email
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
