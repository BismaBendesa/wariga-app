// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import { BalineseDate } from "balinese-date-js-lib";
import { useState } from "react";
import WayangDungulan from "../../webp-img/wayang-dungulan/wayang-dungulan_1x.webp";
import MataAngin from "../../webp-img/mata-angin/mata-angin_3x.webp";
import RamalanHarian from "../RamalanHarian/RamalanHarian";
import Bintang from "../../webp-img/bintang/bintang_3x.webp";
import RamalanSegitiga from "../SideBarSegitiga/Segitiga";
import { getTanggalLahirAll } from "../../service/tanggal_lahir.js";

export default function Dashboard() {
    //deklarasi beberapa useHook 'useState'
    const [selectedDate, setSelectedDate] = useState("");
    const [showDate, setShowDate] = useState(false);
    const [resultIndonesia, setResultIndonesia] = useState("");
    const [resultBalinese, setResultBalinese] = useState("");
    const [bekelKahuripan, setBekelKahuripan] = useState("");

    const [wewaran, setWewaran] = useState([]);

    async function funcGetTanggalLahir() {
        try {
            const result = await getTanggalLahirAll();
            setWewaran(result.data.data[0]);
        } catch (error) {
            console.error("Error Fetching Data:", error);
        }
    }

    useEffect(() => {
        funcGetTanggalLahir();
        console.log(wewaran);
    }, []);

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
            const balineseDateUser = {
                dwiWara: {
                    name: userDate.dwiWara.name,
                    urip: userDate.dwiWara.urip,
                },
                triWara: {
                    name: userDate.ekaWara.name,
                    urip: userDate.ekaWara.name,
                },
                caturWara: {
                    name: userDate.caturWara.name,
                    urip: userDate.caturWara.urip,
                },
                pancaWara: {
                    name: userDate.pancaWara.name,
                    urip: userDate.pancaWara.urip,
                },
                sadWara: {
                    name: userDate.sadWara.name,
                    urip: userDate.sadWara.urip,
                },
                saptaWara: {
                    name: userDate.saptaWara.name,
                    urip: userDate.saptaWara.urip,
                },
                astaWara: {
                    name: userDate.astaWara.name,
                    urip: userDate.astaWara.urip,
                },
                sangaWara: {
                    name: userDate.sangaWara.name,
                    urip: userDate.sangaWara.urip,
                },
                dasaWara: {
                    name: userDate.dasaWara.name,
                    urip: userDate.dasaWara.urip,
                },
                lintang: userDate.lintang.name,
                sasih: userDate.sasih.name,
                wukuUser: userDate.wuku.name,
                saka: userDate.saka,
            };
            console.log(balineseDateUser);

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
            const resultBalinese = `Hari lahir anda ${balineseDateUser.pancaWara.name} dengan urip ${saptaWaraUser.urip} disertai Panca Wara anda: ${pancaWaraUser.name} dengan urip  ${pancaWaraUser.urip}, dan Wuku anda ${wukuUser}`;
            setResultBalinese(resultBalinese);

            // Menampilkan hasil dalam bentuk bahasa indonesia
            const resultIndonesia = `Anda memilih tanggal: ${day} ${month} ${year}`;
            setResultIndonesia(resultIndonesia);
            console.log(resultIndonesia);

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
                {/* section dashboard */}
                <div>
                    <h1 className="py-6 text-center sm:text-left text-[#0056D7] text-xl lg:text-2xl lg:pb-12 ">
                        Dashboard
                    </h1>
                    <img
                        src={Bintang}
                        alt="Gambar Bintang"
                        className="fixed -z-10 mt-[-100px]"
                    />
                </div>
                {/* Balinese Date User */}
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
                                        {wewaran.asta_wara}
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
                            src={WayangDungulan}
                            alt="Gambar Wayang Dungulan"
                            className="relative z-10"
                        />
                    </div>
                </div>
                {/* section ramalan harian dan segitiga */}
                <div className="flex flex-col-reverse gap-6 lg:grid lg:grid-cols-12 text-black">
                    <div className="col-span-12 rounded lg:col-span-8 bg-[#1F1B46] rounded-t-2xl ">
                        <RamalanHarian />
                    </div>
                    <div className="col-span-12 rounded lg:col-span-4 bg-[#1F1B46] rounded-t-2xl">
                        <RamalanSegitiga />
                    </div>
                </div>
                {/* section penentuan karakter */}
                <div className="my-8 bg-[#1F1B46] rounded-t-2xl">
                    <div className="bg-[#10398E] text-[#E2A000] text-2xl px-8 py-4 font-bold rounded-t-2xl">
                        <p>Penentuan Karakter</p>
                    </div>
                    <div className="flex flex-col-reverse gap-6 lg:grid lg:grid-cols-6 text-white px-8 py-12 ">
                        <div className="col-span-3">
                            <div className="flex gap-6 w-full m-auto">
                                <div className="flex flex-col items-center bg-[#10398E] text-xl font-thin rounded-lg text-center px-24 py-10">
                                    <p>Tis</p>
                                </div>
                                <div className="flex flex-col items-center bg-[#FFB400] text-xl font-bold rounded-lg text-center px-24 py-10">
                                    <p>Anget</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <h4 className="text-lg font-medium">Tis</h4>

                                <p className="font-light mb-6">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Soluta unde officiis odit
                                    ut tempora aspernatur est asperiores
                                    ratione, voluptatem eius repudiandae rem
                                    iste quod itaque illum dignissimos velit
                                    atque aperiam accusantium ea! Nesciunt
                                    eveniet nostrum explicabo, at officiis
                                    natus, exercitationem hic mollitia saepe
                                    enim aperiam ratione quis deleniti beatae
                                    quasi illum eligendi esse velit culpa. Fugit
                                    similique, mollitia ipsum excepturi incidunt
                                </p>
                                <p className="font-light">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. A consequuntur reiciendis
                                    deserunt odio similique ipsum perferendis
                                    recusandae voluptas atque accusantium
                                    dolorum repellat illo debitis, doloremque
                                    aliquid voluptatum nihil minima neque modi
                                    ducimus! Nam, mollitia officiis? Quibusdam,
                                    laboriosam! Nisi dicta at, consequuntur hic
                                </p>
                            </div>
                        </div>
                        <div className="col-span-3 m-auto w-4/5">
                            <img src={MataAngin} alt="" />
                        </div>
                    </div>
                </div>
                {/* section watak dan penyakit */}
                <div className="gap-6 lg:grid lg:grid-cols-12 text-black mb-12 my-8 rounded-t-2xl">
                    <div className="col-span-12 lg:col-span-6 ">
                        <div className="bg-[#10398E] text-[#E2A000] text-2xl px-8 py-4 font-bold rounded-t-2xl">
                            <p>Watak</p>
                        </div>
                        <div className="bg-[#1F1B46] px-8 py-4 text-white">
                            <div className="py-4">
                                <h4 className="text-lg">Keras Kepala</h4>
                                <p className="text-base font-thin">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Aperiam nobis corrupti
                                    nesciunt eos fugiat fuga asperiores quis!
                                    Doloribus sequi nemo labore laborum
                                    voluptatibus iusto ea illum. Commodi placeat
                                    repudiandae totam?
                                </p>
                            </div>
                            <div className="py-4">
                                <h4 className="text-lg">Keras Kepala</h4>
                                <p className="text-base font-thin">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Aperiam nobis corrupti
                                    nesciunt eos fugiat fuga asperiores quis!
                                    Doloribus sequi nemo labore laborum
                                    voluptatibus iusto ea illum. Commodi placeat
                                    repudiandae totam?
                                </p>
                            </div>
                            <div className="py-4">
                                <h4 className="text-lg">Keras Kepala</h4>
                                <p className="text-base font-thin">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Aperiam nobis corrupti
                                    nesciunt eos fugiat fuga asperiores quis!
                                    Doloribus sequi nemo labore laborum
                                    voluptatibus iusto ea illum. Commodi placeat
                                    repudiandae totam?
                                </p>
                            </div>
                            <div className="py-4">
                                <h4 className="text-lg">Keras Kepala</h4>
                                <p className="text-base font-thin">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Aperiam nobis corrupti
                                    nesciunt eos fugiat fuga asperiores quis!
                                    Doloribus sequi nemo labore laborum
                                    voluptatibus iusto ea illum. Commodi placeat
                                    repudiandae totam?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 ">
                        <div className="bg-[#10398E] text-[#E2A000] text-2xl px-8 py-4 font-bold rounded-t-2xl">
                            <p>Penyakit</p>
                        </div>
                        <div className="bg-[#1F1B46] px-8 py-4 text-white">
                            <div className="py-4">
                                <h4 className="text-lg">Keras Kepala</h4>
                                <p className="text-base font-thin">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Aperiam nobis corrupti
                                    nesciunt eos fugiat fuga asperiores quis!
                                    Doloribus sequi nemo labore laborum
                                    voluptatibus iusto ea illum. Commodi placeat
                                    repudiandae totam?
                                </p>
                            </div>
                            <div className="py-4">
                                <h4 className="text-lg">Keras Kepala</h4>
                                <p className="text-base font-thin">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Aperiam nobis corrupti
                                    nesciunt eos fugiat fuga asperiores quis!
                                    Doloribus sequi nemo labore laborum
                                    voluptatibus iusto ea illum. Commodi placeat
                                    repudiandae totam?
                                </p>
                            </div>
                            <div className="py-4">
                                <h4 className="text-lg">Keras Kepala</h4>
                                <p className="text-base font-thin">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Aperiam nobis corrupti
                                    nesciunt eos fugiat fuga asperiores quis!
                                    Doloribus sequi nemo labore laborum
                                    voluptatibus iusto ea illum. Commodi placeat
                                    repudiandae totam?
                                </p>
                            </div>
                            <div className="py-4">
                                <h4 className="text-lg">Keras Kepala</h4>
                                <p className="text-base font-thin">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Aperiam nobis corrupti
                                    nesciunt eos fugiat fuga asperiores quis!
                                    Doloribus sequi nemo labore laborum
                                    voluptatibus iusto ea illum. Commodi placeat
                                    repudiandae totam?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* section kesimpulan */}
                <div className="gap-6 lg:grid lg:grid-cols-12 text-black mb-14 my-8 rounded-t-2xl">
                    <div className="col-span-12 ">
                        <div className="bg-[#10398E] text-[#E2A000] text-2xl px-8 py-4 font-bold rounded-t-2xl">
                            <p>Kesimpulan</p>
                        </div>
                        <div className="bg-[#1F1B46] px-8 py-4 text-white">
                            <p className="text-base font-thin">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Aperiam nobis corrupti
                                nesciunt eos fugiat fuga asperiores quis!
                                Doloribus sequi nemo labore laborum voluptatibus
                                iusto ea illum. Commodi placeat repudiandae
                                totam?
                            </p>
                        </div>
                    </div>
                </div>
                <div>
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
