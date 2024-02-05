// eslint-disable-next-line no-unused-vars
import React from "react";
import { BalineseDate } from "balinese-date-js-lib";
import { useState } from "react";

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
            <p className="text-2xl">Ini Dashboard</p>
            <p>Test</p>
            <label>Pilih Tanggal: </label>
            <input type="date" onChange={handleDateChange} />
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
                        Hari ini adalah: {pancaWaraTodayDate.name} dengan urip{" "}
                        {pancaWaraTodayDate.urip}, {saptaWaraTodayDate.name}{" "}
                        dengan urip {saptaWaraTodayDate.urip}, {wukuTodayDate}{" "}
                    </p>
                    <br />
                    <p>{bekelKahuripan}</p>
                </div>
            )}
        </>
    );
}
