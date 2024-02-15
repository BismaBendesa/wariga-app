// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import { BalineseDate } from "balinese-date-js-lib";
import { useState } from "react";
import WayangDungulan from "../../webp-img/wayang-dungulan/wayang-dungulan_1x.webp";

export default function Dashboard() {
    //deklarasi beberapa useHook 'useState'
    const [selectedDate, setSelectedDate] = useState("");
    const [showDate, setShowDate] = useState(false);
    const [resultIndonesia, setResultIndonesia] = useState("");
    const [resultBalinese, setResultBalinese] = useState("");
    const [bekelKahuripan, setBekelKahuripan] = useState("");

    //deklarasi tanggal hari ini dan menyesuaikan dengan waktu kalender bali
    const todayDate = new BalineseDate();
    const pancaWaraTodayDate = {
        name: todayDate.pancaWara.name,
        urip: todayDate.pancaWara.urip,
    };
    const saptaWaraTodayDate = {
        name: todayDate.saptaWara.name,
        urip: todayDate.saptaWara.urip,
    };
    const wukuTodayDate = todayDate.wuku.name;

    //fungsi untuk memilih tanggal
    const handleDateChange = (event) => {
        const dateValue = event.target.value;
        setSelectedDate(dateValue);
    };

    const handleTampilkanClick = () => {
        if (selectedDate) {
            // Membuat objek Date dari string tanggal yang dipilih
            const selectedDateObj = new Date(selectedDate);

            // Mendapatkan tanggal, bulan, dan tahun
            const day = selectedDateObj.getDate();
            const month = selectedDateObj.toLocaleDateString("id-ID", {
                month: "long",
            }); // Menampilkan nama bulan dalam Bahasa Indonesia
            const year = selectedDateObj.getFullYear();

            const userDate = new BalineseDate(new Date(selectedDate));
            // console.log(userDate);
            const pancaWaraUser = {
                name: userDate.pancaWara.name,
                urip: userDate.pancaWara.urip,
            };

            const saptaWaraUser = {
                name: userDate.saptaWara.name,
                urip: userDate.saptaWara.urip,
            };

            const wukuUser = userDate.wuku.name;

            // Menampilkan hasil dalam bentuk kalender bali
            const resultBalinese = `Hari lahir anda ${saptaWaraUser.name} dengan urip ${saptaWaraUser.urip} disertai Panca Wara anda: ${pancaWaraUser.name} dengan urip  ${pancaWaraUser.urip}, dan Wuku anda ${wukuUser}`;
            setResultBalinese(resultBalinese);

            // Menampilkan hasil dalam bentuk bahasa indonesia
            const resultIndonesia = `Anda memilih tanggal: ${day} ${month} ${year}`;
            setResultIndonesia(resultIndonesia);

            // const bekelKahuripan = pancaWaraUser.urip + saptaWaraUser.urip;
            const bekelKahuripan = (uripUser, uripHariIni) => {
                //index 0 untuk pancawara
                //index 1 untuk saptawara
                const totalUripUser = uripUser[0].urip + uripUser[1].urip;
                const totalUripHariIni =
                    uripHariIni[0].urip + uripHariIni[1].urip;

                const result = (totalUripUser + totalUripHariIni) % 4;
                if (result == 1) {
                    return `Bekel Kahuripan Anda hari ini adalah Guru`;
                } else if (result == 2) {
                    return `Bekel Kahuripan Anda hari ini adalah Ratu`;
                } else if (result == 3) {
                    return `Bekel Kahuripan Anda hari ini adalah Lara`;
                } else {
                    return `Bekel Kahuripan Anda hari ini adalah Pati`;
                }
            };
            bekelKahuripan(
                [pancaWaraUser, saptaWaraUser],
                [pancaWaraTodayDate, saptaWaraTodayDate]
            );

            setBekelKahuripan(() =>
                bekelKahuripan(
                    [pancaWaraUser, saptaWaraUser],
                    [pancaWaraTodayDate, saptaWaraTodayDate]
                )
            );
        } else {
            // console.log("Pilih tanggal terlebih dahulu.");
            setResultBalinese(`Anda belum memilih tanggal`);
            setResultIndonesia(`Anda belum memilih tanggal`);
        }
    };

    return (
        <>
            <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-16 text-white">
                <h1 className="py-6 text-center sm:text-left text-[#0056D7] text-xl lg:text-2xl lg:pb-12 ">
                    Dashboard
                </h1>
                <div className="flex flex-col-reverse gap-2 lg:grid lg:grid-cols-12 text-black">
                    <div className="col-span-12 rounded lg:col-span-8 ">
                        <div className="">
                            <div className="mb-6">
                                <h3 className="text-base text-[#FFB400] ">
                                    Tanggal Lahir:
                                </h3>
                                <p className="text-lg font-bold text-white ">
                                    Senin, 09 Oktober 2004
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-x-3 gap-y-8">
                                <div className="w-32">
                                    <h3 className="text-base text-[#FFB400] ">
                                        Tanggal Lahir:
                                    </h3>
                                    <p className="text-lg font-bold text-white ">
                                        Sinta
                                    </p>
                                </div>
                                <div className="w-32">
                                    <h3 className="text-base text-[#FFB400] ">
                                        Tanggal Lahir:
                                    </h3>
                                    <p className="text-lg font-bold text-white ">
                                        Sinta
                                    </p>
                                </div>
                                <div className="w-32">
                                    <h3 className="text-base text-[#FFB400] ">
                                        Tanggal Lahir:
                                    </h3>
                                    <p className="text-lg font-bold text-white ">
                                        Sinta
                                    </p>
                                </div>
                                <div className="w-32">
                                    <h3 className="text-base text-[#FFB400] ">
                                        Tanggal Lahir:
                                    </h3>
                                    <p className="text-lg font-bold text-white ">
                                        Sinta
                                    </p>
                                </div>
                                <div className="w-32">
                                    <h3 className="text-base text-[#FFB400] ">
                                        Tanggal Lahir:
                                    </h3>
                                    <p className="text-lg font-bold text-white ">
                                        Sinta
                                    </p>
                                </div>
                                <div className="w-32">
                                    <h3 className="text-base text-[#FFB400] ">
                                        Tanggal Lahir:
                                    </h3>
                                    <p className="text-lg font-bold text-white ">
                                        Sinta
                                    </p>
                                </div>
                                <div className="w-32">
                                    <h3 className="text-base text-[#FFB400] ">
                                        Tanggal Lahir:
                                    </h3>
                                    <p className="text-lg font-bold text-white ">
                                        Sinta
                                    </p>
                                </div>
                                <div className="w-32">
                                    <h3 className="text-base text-[#FFB400] ">
                                        Tanggal Lahir:
                                    </h3>
                                    <p className="text-lg font-bold text-white ">
                                        Sinta
                                    </p>
                                </div>
                                <div className="w-32">
                                    <h3 className="text-base text-[#FFB400] ">
                                        Tanggal Lahir:
                                    </h3>
                                    <p className="text-lg font-bold text-white ">
                                        Sinta
                                    </p>
                                </div>
                                <div className="w-32">
                                    <h3 className="text-base text-[#FFB400] ">
                                        Tanggal Lahir:
                                    </h3>
                                    <p className="text-lg font-bold text-white ">
                                        Sinta
                                    </p>
                                </div>
                                <div className="w-32">
                                    <h3 className="text-base text-[#FFB400] ">
                                        Tanggal Lahir:
                                    </h3>
                                    <p className="text-lg font-bold text-white ">
                                        Sinta
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="my-8">
                            <button className="flex justify-center rounded-md bg-[#0056D7] px-6 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#6C93CD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Pelajari lebih lanjut
                            </button>
                        </div>
                    </div>
                    <div className="col-span-12 rounded lg:col-span-4 m-auto">
                        <img
                            // className="h-8 w-auto"
                            src={WayangDungulan}
                            alt="Your Company"
                        />
                    </div>
                </div>

                <p className="text-2xl">Ini Dashboard</p>
                <p>Test</p>
                <label>Pilih Tanggal: </label>
                <input
                    type="date"
                    onChange={handleDateChange}
                    className="text-black"
                />
                <button
                    onClick={() => {
                        setShowDate(true), handleTampilkanClick();
                    }}
                    type="submit"
                    className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Tampilkan Tanggal
                </button>
                {showDate && (
                    <div>
                        <p>Indonesia: {resultIndonesia}</p>
                        <p>Bali: {resultBalinese}</p>
                        <br />
                        <p>
                            Hari ini adalah: {pancaWaraTodayDate.name} dengan
                            urip {pancaWaraTodayDate.urip},
                            {saptaWaraTodayDate.name} dengan urip{" "}
                            {saptaWaraTodayDate.urip}, {wukuTodayDate}{" "}
                        </p>
                        <br />
                        <p>{bekelKahuripan}</p>
                    </div>
                )}
            </div>
        </>
    );
}
