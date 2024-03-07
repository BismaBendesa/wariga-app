// eslint-disable-next-line no-unused-vars
import React from "react";
import NavigasiBarUnRegis from "../components/Navbar/NavigasiBarUnregis";
import Bintang from "../webp-img/bintang/bintang_3x.webp";
import Angkasa from "../webp-img/gambar-hero.png";
import WayangDungulan from "../webp-img/landep_sanghyang_mahadewa/landep_sanghyang_mahadewa_3x.webp";
import RamalanHarian from "../components/RamalanHarian/RamalanHarian";
import LogoWariga from "../webp-img/logoWariga.webp";

export default function LandingPage() {
    return (
        <>
            <NavigasiBarUnRegis />
            {/* Section 1 / Herro */}
            <div className="mx-auto max-w-8xl px-3 sm:px-6 lg:px-16 text-white">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 py-8 md:mb-[102px]">
                    <div className="text-center sm:text-left col-span-12 md:col-span-7 flex flex-col gap-5 md:gap-9">
                        <h1 className="text-[#0056D7] text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#0056D7] to-[#FFB400]">
                            Landing Page
                        </h1>
                        <img
                            src={Bintang}
                            alt="Gambar Bintang"
                            className="fixed -z-10"
                        />
                        <p className="text-4xl md:text-6xl md:pr-6 font-bold">
                            <span className="text-[#E2A000] ">Wariga : </span>
                            Sistem perhitungan waktu masyarakat bali.
                        </p>
                        <p className="leading-[164%] ">
                            Kalender Bali mengikuti sistem wariga dimana
                            perhitungannya dihitung berdasarkan matahari, bulan,
                            bintang, dan sistem hukum . Unsur dasarnya
                            matematis, sistematis, geografis, dan religius.
                        </p>
                    </div>
                    <div className="col-span-12 md:col-span-5 flex justify-center">
                        <img
                            src={Angkasa}
                            alt=""
                            className="max-w-[80%] md:max-w-full "
                        />
                    </div>
                </div>
                {/* Section 2  */}
                <div className="flex flex-col gap-8 mx-auto text-center max-w-[800px]">
                    {/* Apa itu wariga? */}
                    <div className="flex flex-col gap-4 md:gap-8 ">
                        <h1 className="text-3xl md:text-5xl font-bold">
                            Apa itu Wariga?
                        </h1>
                        <p className="text-base leading-[164%] ">
                            “Wariga adalah sistem perhitungan waktu oleh
                            masyarakat bali. Wariga di Bali dimanfaatkan untuk
                            berbagai keperluan terutama berkaitan dengan ritual
                            keagamaan,
                            <span className="text-[#FFB400] "> ramalan </span>,
                            hari baik dan hari buruk untuk melakukan sesuatu.”
                        </p>
                        <p className="text-sm text-[#ffffff]/50 ">
                            Sumber: Buku Wariga Siddhi
                        </p>
                    </div>
                    {/* Mari kita lihat ramalan */}
                    <div className="flex flex-col gap-3.5">
                        <h1 className="text-2xl md:text-3xl font-bold">
                            Mari Kita Lihat Ramalanmu Berdasarkan Wariga
                        </h1>
                        <p className="text-sm md:text-base">
                            Masukan tanggal lahir untuk melihat ramalanmu
                        </p>
                        {/* form input tanggal */}
                        <div>
                            <label
                                htmlFor="password"
                                className="text-sm text-[#ffffff]/50"
                            >
                                Tanggal Lahir
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="date"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-3 px-5 shadow-sm ring-1 ring-[#BFBFBF] text-gray focus:ring-2 focus:ring-[#E2A000] sm:text-sm sm:leading-6 transparent bg-transparent"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-[#0056D7] py-3 px-5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-[#0056D7]/60  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Konfirmasi
                            </button>
                        </div>
                    </div>
                    <div>
                        {/* Wayang dungulan */}
                        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 mb-12">
                            <div className="flex flex-col items-center text-center sm:text-left sm:items-start gap-6 text-left">
                                <div>
                                    <h3 className="text-base text-[#FFB400] ">
                                        Tanggal Lahir:
                                    </h3>
                                    <p className="text-lg font-bold text-white ">
                                        Senin, 09 Oktober 2004
                                    </p>
                                </div>
                                <div className="grid grid-cols-3 gap-x-3 gap-y-8">
                                    <div className="w-32">
                                        <h3 className="text-base text-[#FFB400] ">
                                            Panca Wara:
                                        </h3>
                                        <p className="text-lg font-bold text-white ">
                                            Umanis
                                        </p>
                                    </div>
                                    <div className="w-32">
                                        <h3 className="text-base text-[#FFB400] ">
                                            Sapta Wara:
                                        </h3>
                                        <p className="text-lg font-bold text-white ">
                                            Redite
                                        </p>
                                    </div>
                                    <div className="w-32">
                                        <h3 className="text-base text-[#FFB400] ">
                                            Wuku:
                                        </h3>
                                        <p className="text-lg font-bold text-white ">
                                            Landep
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <img
                                    src={WayangDungulan}
                                    alt="Gambar Wayang Dungulan"
                                    width={100}
                                />
                                <figcaption className="text-center">
                                    Wayang Dungulan
                                </figcaption>
                            </div>
                        </div>
                        {/* Ramalan Harian */}
                        <div className="mb-12 md:mb-24">
                            <div className="text-left bg-[#1F1B46] h-[150vh] sm:h-screen overflow-hidden">
                                <RamalanHarian />
                            </div>
                            {/* Bg blur */}
                            <div className="flex flex-col gap-8 justify-center items-center w-full h-64 bg-[#fff]/10 backdrop-blur-md mt-[-100px] px-4">
                                <div>
                                    <p className="text-xl sm:text-2xl font-bold mb-2">
                                        Ingin tahu lebih banyak? Ayo buat akun
                                        terlebih dahulu
                                    </p>
                                    <p>
                                        Dengan membuat akun anda akan mendapat
                                        ramalan tiap harinya
                                    </p>
                                </div>
                                <a
                                    className="flex justify-center rounded-md bg-[#10398E] px-12 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#6C93CD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    href="/Register"
                                >
                                    Buat Akun
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* SubFooter */}
            <div className="flex flex-col items-center text-center md:text-left gap-4 md:flex-row md:justify-between bg-[#13101F] py-12 px-2 sm:px-6 lg:px-16 text-white">
                <div className="">
                    <p className="text-base sm:text-xl md:text-2xl font-bold mb-2">
                        Mari Kita lihat Ramalanmu Setiap Harinya.
                    </p>
                    <p className="text-xs sm:text-sm font-light">
                        Kami membantu anda untuk mengetahui kondisi anda.
                    </p>
                </div>
                <div>
                    <a
                        className="flex justify-center rounded-md bg-[#10398E] px-20 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#6C93CD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        href="/Register"
                    >
                        Buat Akun
                    </a>
                </div>
            </div>
            {/* Footer */}
            <div className="flex flex-col gap-12 sm:gap-24 mx-auto max-w-8xl pb-12 px-2 sm:px-6 lg:px-16 text-white bg-gradient-to-b from-[#120F1D] to-[#201C4A] ">
                <div className="flex flex-col gap-8 items-center md:items-start ">
                    <div>
                        <img src={LogoWariga} alt="" width={132} />
                    </div>
                    <div>
                        <ul className="flex gap-8">
                            <li>Ramalan</li>
                            <li>Konsultasi</li>
                            <li>Tentang Wariga</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between flex-col items-center gap-2 text-center md:flex-row">
                    <p className="font-bold">Call Center : +6283 9302 xx93</p>
                    <p className="text-xs font-light">
                        ©️Copyright 2024 Wariga. All Rights Reserved.
                    </p>
                </div>
            </div>
        </>
    );
}
