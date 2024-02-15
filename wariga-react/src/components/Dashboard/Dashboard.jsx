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
                <div className="flex flex-col-reverse gap-2 lg:grid lg:grid-cols-12 text-black mb-14">
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
                        <img src={WayangDungulan} alt="Your Company" />
                    </div>
                </div>

                <div className="flex flex-col-reverse gap-6 lg:grid lg:grid-cols-12 text-black ">
                    <div className="col-span-12 rounded lg:col-span-8 bg-[#1F1B46] rounded-t-2xl ">
                        <div className="bg-[#10398E] text-[#E2A000] text-4xl m-w-full px-8 py-2 font-bold  rounded-t-2xl">
                            <p>Ramalan Harian</p>
                        </div>
                        <div className="mx-8 text-white">
                            <div className="my-5 font-light">
                                <p>
                                    Ramalan ini dibuat berdasarkan sumber lontar
                                    dari bali sesuai dengan ilmu yang bernama
                                    wariga. Ilmu wariga di Bali sesungguhnya
                                    mengajarkan kepada umat manusia di muka bumi
                                    ini bahwa benda-benda bersinar di langit
                                    memengaruhi jagar raya. Benda-benda tersebut
                                    menjadi daasar perhitungan wariga, sebab
                                    unsur-unsur yang membangun sistem wariga
                                    tersebut merupakan simbol benda - benda
                                    langit tersebut
                                </p>
                            </div>
                            <div className="my-8">
                                <h3 className="text-xl font-bold">
                                    Riwayat Ramalan
                                </h3>
                                <div className="flex my-4 gap-8">
                                    <div className="flex flex-col items-center">
                                        <div className="w-14 bg-[#10398E] text-xl rounded-lg text-center p-2">
                                            <p>04 Feb</p>
                                        </div>
                                        <p className="font-thin text-sm mt-2">
                                            2 Hari lalu
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-14 bg-[#10398E] text-xl rounded-lg text-center p-2">
                                            <p>05 Feb</p>
                                        </div>
                                        <p className="font-thin text-sm mt-2">
                                            1 Hari lalu
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-14 bg-[#FFB400] text-xl rounded-lg text-center p-2 shadow-xl shadow-blue-400/75">
                                            <p>06 Feb</p>
                                        </div>
                                        <p className="font-thin text-sm mt-2">
                                            Hari Ini
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-14 bg-[#10398E] text-xl rounded-lg text-center p-2">
                                            <p>07 Feb</p>
                                        </div>
                                        <p className="font-thin text-sm mt-2">
                                            Besok
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-14 bg-[#10398E] text-xl rounded-lg text-center p-2">
                                            <p>08 Feb</p>
                                        </div>
                                        <p className="font-thin text-sm mt-2">
                                            Lusa
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div>
                                    <h3 className="text-xl font-bold">
                                        Hasil Perhitungan Ramalan Hari Ini
                                    </h3>
                                    <div className="flex flex-wrap my-4 gap-3">
                                        <div className="flex flex-col items-center w-14 bg-[#10398E] text-xl font-thin rounded-lg text-center px-16 py-10">
                                            <p>Guru</p>
                                        </div>
                                        <div className="flex flex-col items-center w-14 bg-[#FFB400] text-xl font-bold rounded-lg text-center px-16 py-10 shadow-xl shadow-blue-400/50">
                                            <p>Ratu</p>
                                        </div>
                                        <div className="flex flex-col items-center w-14 bg-[#10398E] text-xl font-thin rounded-lg text-center px-16 py-10">
                                            <p>Lara</p>
                                        </div>
                                        <div className="flex flex-col items-center w-14 bg-[#10398E] text-xl font-thin rounded-lg text-center px-16 py-10">
                                            <p>Pati</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-6">
                                    <h4 className="text-lg font-medium">
                                        Ratu
                                    </h4>
                                    <p className="font-light">
                                        Ratu adalah kondisi dimana anda sedang
                                        begini dan begitu. Saya perlu teks yang
                                        menjelaskan mengenai ratu ini mungkin
                                        disini akan diberikan penjelasan yang
                                        singkat mengenai bagaimana maksud dari
                                        ratu ini dan juga memberikan user
                                        pengertian.
                                    </p>
                                </div>
                                <div className="my-6">
                                    <h4 className="text-lg font-medium">
                                        Hal yang baik untuk dilakukan:
                                    </h4>
                                    <ul className="flex flex-wrap list-disc mx-6 w-80 gap-2 font-light">
                                        <li className="m-w-full w-40">
                                            Bercocok Tanam
                                        </li>
                                        <li>Berlibur</li>
                                        <li className="m-w-full w-40">
                                            Bersih-bersih
                                        </li>
                                        <li>Memotong rambut</li>
                                        <li className="m-w-full w-40">
                                            Belajar
                                        </li>
                                        <li>Berkompetisi</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium">
                                        Hal yang baik untuk dilakukan:
                                    </h4>
                                    <ul className="flex flex-wrap list-disc mx-6 w-80 gap-2 font-light">
                                        <li className="m-w-full w-40">
                                            Bercocok Tanam
                                        </li>
                                        <li>Berlibur</li>
                                        <li className="m-w-full w-40">
                                            Bersih-bersih
                                        </li>
                                        <li>Memotong rambut</li>
                                        <li className="m-w-full w-40">
                                            Belajar
                                        </li>
                                        <li>Berkompetisi</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 rounded lg:col-span-4 bg-[#1F1B46] rounded-t-2xl">
                        <div className="bg-[#E2A000] text-[#10398E] text-4xl m-w-full px-8 py-2 font-bold  rounded-t-2xl">
                            <p className="text-4xl">Segitiga Ramalan</p>
                        </div>
                        <div className="mx-8 text-white">
                            {/* Judul side bar segitiga */}
                            <div className="my-5 font-light">
                                <p>
                                    Mungkin bisa diberikan sedikit penjelaasan
                                    dan asal dari teori perhitungan ini. Berikan
                                    juga output yang akan diterima user dengan
                                    perhitungan ini.
                                </p>
                            </div>
                            {/* gambar segitiga */}
                            <div className="grid grid-cols-4 bg-white content-center grid-row-3 gap-x-2 gap-y-2">
                                <div className="bg-gray-400 w-full h-14 relative">
                                    {/* <div className="absolute top-0 left-[40%] w-full h-full border-l-4 border-red-400 skew-x-[45deg]"></div> */}
                                </div>
                                <div className="bg-gray-400 w-full h-14 relative"></div>
                                <div className="bg-gray-400 w-full h-14 relative"></div>
                                <div className="bg-gray-400 w-full h-14 relative">
                                    {/* <div className="absolute top-0 left-[60%] w-full h-full border-l-4 border-red-400 -skew-x-[45deg]"></div> */}
                                </div>
                                <div className="col-span-2 bg-gray-400 w-full h-14 relative">
                                    {/* <div className="absolute  top-[-20%] right-[45.2%]  h-24 border-l-4 border-red-400 skew-x-[45deg]"></div> */}
                                </div>
                                <div className="col-span-2 bg-gray-400 w-full h-14 relative">
                                    {/* <div className="absolute  top-[-20%] left-[47.3%]  h-24 border-l-4 border-red-400 -skew-x-[45deg]"></div> */}
                                    {/* <div className="absolute  bottom-[-42%]  h-12 border-l-7 border-red-400 rotate-[90deg]"></div> */}
                                </div>
                                <div className="col-span-4 bg-gray-400 w-full h-14 relative text-center pt-3">
                                    5
                                    {/* <div className="absolute  top-0 right-[37.5%]  h-full border-l-4 border-red-400 -skew-x-[45deg]"></div> */}
                                    {/* <div className="absolute  top-0 left-[38.5%]  h-full border-l-4 border-red-400 skew-x-[45deg]"></div> */}
                                    {/* <div className="absolute  bottom-[-42%] left-[50%] h-12 border-l-2 border-red-400 rotate-[90deg]"></div> */}
                                </div>
                            </div>
                            {/* gambar segitiga */}
                            <div className="grid grid-cols-4 bg-white content-center grid-row-3 gap-x-2 gap-y-2 my-8    ">
                                <div className="bg-gray-400 w-full h-14 relative">
                                    {/* <div className="absolute top-0 left-[40%] w-full h-full border-l-4 border-red-400 skew-x-[45deg]"></div> */}
                                </div>
                                <div className="bg-gray-400 w-full h-14 relative"></div>
                                <div className="bg-gray-400 w-full h-14 relative"></div>
                                <div className="bg-gray-400 w-full h-14 relative">
                                    {/* <div className="absolute top-0 left-[60%] w-full h-full border-l-4 border-red-400 -skew-x-[45deg]"></div> */}
                                </div>
                                <div className="col-span-2 bg-gray-400 w-full h-14 relative">
                                    {/* <div className="absolute  top-[-20%] right-[45.2%]  h-24 border-l-4 border-red-400 skew-x-[45deg]"></div> */}
                                </div>
                                <div className="col-span-2 bg-gray-400 w-full h-14 relative">
                                    {/* <div className="absolute  top-[-20%] left-[47.3%]  h-24 border-l-4 border-red-400 -skew-x-[45deg]"></div> */}
                                    {/* <div className="absolute  bottom-[-42%]  h-12 border-l-7 border-red-400 rotate-[90deg]"></div> */}
                                </div>
                                <div className="col-span-4 bg-gray-400 w-full h-14 relative text-center pt-3">
                                    5
                                    {/* <div className="absolute  top-0 right-[37.5%]  h-full border-l-4 border-red-400 -skew-x-[45deg]"></div> */}
                                    {/* <div className="absolute  top-0 left-[38.5%]  h-full border-l-4 border-red-400 skew-x-[45deg]"></div> */}
                                    {/* <div className="absolute  bottom-[-42%] left-[50%] h-12 border-l-2 border-red-400 rotate-[90deg]"></div> */}
                                </div>
                            </div>
                            {/* Penjelasan hasil segitiga */}
                            <div className="grid grid-cols-2 lg:flex lg:flex-col w-full gap-y-8 gap-x-4 mb-12">
                                <div className="flex w-full lg:w-full">
                                    <div className="mr-3">
                                        <p className="border-2 border-[#00FFF0] p-2.5 font-bold text-lg text-[#00FFF0]">
                                            8
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold">
                                            Mental Block
                                        </h4>
                                        <p className="font-thin font-md">
                                            Disini bisa dijelaskan arti dari
                                            setiap angka yang ada dan dijelaskan
                                            juga makna mental block
                                        </p>
                                    </div>
                                </div>
                                <div className="flex w-full lg:w-full">
                                    <div className="mr-3">
                                        <p className="border-2 border-[#F25CFF] p-2.5 font-bold text-lg text-[#F25CFF]">
                                            6
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold">
                                            Mental
                                        </h4>
                                        <p className="font-thin font-md">
                                            Disini bisa dijelaskan arti dari
                                            setiap angka yang ada dan dijelaskan
                                            juga makna mental block
                                        </p>
                                    </div>
                                </div>
                                <div className="flex w-full lg:w-full">
                                    <div className="mr-3">
                                        <p className="border-2 border-[#FFB400] p-2.5 font-bold text-lg text-[#FFB400]">
                                            5
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold">
                                            Core Number
                                        </h4>
                                        <p className="font-thin font-md">
                                            Disini bisa dijelaskan arti dari
                                            setiap angka yang ada dan dijelaskan
                                            juga makna mental block
                                        </p>
                                    </div>
                                </div>
                                <div className="flex w-full lg:w-full">
                                    <div className="mr-3">
                                        <p className="border-2 border-[#37BA15] p-2.5 font-bold text-lg text-[#37BA15] ">
                                            6
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold">
                                            Future Number
                                        </h4>
                                        <p className="font-thin font-md">
                                            Disini bisa dijelaskan arti dari
                                            setiap angka yang ada dan dijelaskan
                                            juga makna mental block
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
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
                                Hari ini adalah: {pancaWaraTodayDate.name}{" "}
                                dengan urip {pancaWaraTodayDate.urip},
                                {saptaWaraTodayDate.name} dengan urip{" "}
                                {saptaWaraTodayDate.urip}, {wukuTodayDate}{" "}
                            </p>
                            <br />
                            <p>{bekelKahuripan}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
