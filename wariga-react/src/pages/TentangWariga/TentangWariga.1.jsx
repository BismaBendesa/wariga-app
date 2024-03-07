// eslint-disable-next-line no-unused-vars
import React from "react";
import NavigasiBar from "../../components/Navbar/NavigasiBar";
import Bintang from "../../webp-img/bintang/bintang_3x.webp";
import KalenderSekarang from "../../webp-img/kalender-now.png";
import KalenderTika from "../../webp-img/kalender-tika.png";
import Lukisan from "../../webp-img/lukisan.png";

export default function TentangWariga() {
    return (
        <>
            <NavigasiBar />
            <div className="text-center sm:text-left mx-auto max-w-8xl px-4 sm:px-6 lg:px-16 text-white py-8">
                <h3 className="font-bold text-transparent text-xl bg-clip-text bg-gradient-to-b from-[#0056D7] to-[#FFB400] ">
                    Tentang Wariga
                </h3>
                <img
                    src={Bintang}
                    alt="Gambar Bintang"
                    className="fixed -z-10 top-20"
                />
                {/* section 1 -> kalender bali */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-4">
                    <div className="flex flex-col gap-4 leading-[164%] text-md">
                        <h1 className="text-4xl md:text-6xl md:pr-6 font-bold text-center sm:text-left">
                            Wariga : Kalender Bali
                        </h1>
                        <p>
                            Wariga di bali pada umumnya digunakan untuk
                            menentukan ala ayuning dewasa (hari baik & hari
                            buruk). Masyarakat bali menentukan hari baik dan
                            hari buruk untuk kegiatan upacara adat, seperti
                            pernikahan dan hari raya umat hindu.
                        </p>
                        <p>
                            Sebelum kelahiran kalender masa kini, masyarakat
                            bali menggunakan suatu alat yang dinamakan Tika.
                            Tika adalah petikan-petikan ajaran wariga yang
                            merupakan kalender tradisional yang bersifat
                            permanen yang menggunakan kode-kode tertentu sebagai
                            salah satu wewaran. Dengan Tika inilah masyarakat
                            bali mencari padewasan (hari baik, hari buruk).
                            Padewasan ini dijadikan pedoman ketika bertani,
                            mengawali suatu pekerjaan ataupun melaksanakan
                            yadnya (upacara adat).
                        </p>
                    </div>
                    <div className="flex justify-center gap-8 sm:gap-16 text-center mb-6">
                        <div>
                            <img
                                src={KalenderSekarang}
                                alt="gambar-kalender-saat-ini"
                                className="mb-4"
                            />
                            <figcaption className="text-sm">
                                Kalender bali masa kini
                            </figcaption>
                        </div>
                        <div>
                            <img
                                src={KalenderTika}
                                alt="gambar-kalender-tika"
                                className="mb-4"
                            />
                            <figcaption className="text-sm">
                                Tika: Kalender Tradisional Bali
                            </figcaption>
                        </div>
                    </div>
                </div>
                {/* section 2 -> kerangka wariga */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-4">
                    <div className="flex flex-col gap-2 sm:gap-4 leading-[164%] text-md">
                        <h1 className="text-2xl sm:text-4xl font-bold">
                            Kerangka Wariga
                        </h1>
                        <p>
                            Wariga sendiri memiliki lima kerangka yang terdiri
                            dari wewaran, pawukon, pananggal atau pangelong,
                            sasih dan dawuh. Berikut adalah penjelasan
                            singkatnya:
                        </p>
                        <ul className="list-disc list-[#FFB400] px-5 text-left">
                            <li>
                                <span className="text-[#FFB400] ">Wewaran</span>{" "}
                                berdasarkan siklus hari.
                            </li>
                            <li>
                                <span className="text-[#FFB400] ">Pawukon</span>{" "}
                                yang usianya 7 hari
                            </li>
                            <li>
                                <span className="text-[#FFB400] ">
                                    Pananggal
                                </span>{" "}
                                berdasarkan peredaran bulan 15 hari (bulan mati{" "}
                                {">"} hidup)
                            </li>
                            <li>
                                <span className="text-[#FFB400] ">
                                    Pangelong
                                </span>{" "}
                                berdasarkan peredaran bulan 15 hari (bulan hidup{" "}
                                {">"} mati)
                            </li>
                            <li>
                                <span className="text-[#FFB400] ">Sasih</span>{" "}
                                berdasarkan siklus tahun 12 bulan
                            </li>
                            <li>
                                <span className="text-[#FFB400] ">Dawuh</span>{" "}
                                pembagian waktu 1 hari (1 malam, 1 hari)
                                pergantian hari dimulai dari 05.30 saat matahari
                                terbit.
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center gap-16 text-center">
                        <div>
                            <img
                                src={Lukisan}
                                alt="gambar-lukisan-palelintangan"
                                className="mb-4"
                            />
                            <figcaption className="text-sm">
                                Lukisan Palelintangan (astrologi) kalender Bali.
                            </figcaption>
                        </div>
                    </div>
                </div>

                {/* Section 3 -> Daftar Kerangka Waeiga */}
                <div className="flex flex-col gap-8 mx-auto text-center max-w-[800px] mt-12 sm:mt-20">
                    <div className="flex flex-col gap-4 ">
                        <h1 className="text-2xl sm:text-4xl font-bold">
                            Daftar Kerangka Wariga
                        </h1>
                        <div>
                            <p className="text-base leading-8">
                                Daftar Wewaran
                            </p>
                            <p className="text-sm text-[#ffffff]/50 ">
                                <span className="text-[#E2A000] ">
                                    Wewaran{" "}
                                </span>
                                terdiri dari 10 Kelompok
                            </p>
                        </div>
                        <p className="text-sm leading-[164%] font-light ">
                            Wewaran mempunyai pengaruh paling kecil dalam
                            penentuan dewasa, sebab wewaran termasuk hari
                            pasaran dalam tahun wuku yang diterapkan di Bali.
                            Sistem wewaran juga penting dalam penentuan
                            padewasan dalam suatu kegiatan sebab integrasi
                            wewaran dengan unsur lain yang membangun sistem
                            wariga akan melahirkan padewasan baik untuk suatu
                            kegiatan dan tidak baik untuk kegiatan lain (ala
                            ayuning dewasa).
                        </p>
                        {/* 1-10 wewaran */}
                        <div className="flex flex-wrap md:grid grid-cols-5 gap-4 justify-center">
                            <div className="text-sm px-4 py-2 md:py-3 bg-[#0056D7] rounded-md hover:bg-[#E2A000] ">
                                1. Eka Wara
                            </div>
                            <div className="text-sm px-4 py-2 md:py-3 bg-[#0056D7] rounded-md hover:bg-[#E2A000] ">
                                2. Dwi Wara
                            </div>
                            <div className="text-sm px-4 py-2 md:py-3 bg-[#0056D7] rounded-md hover:bg-[#E2A000] ">
                                3. Tri Wara
                            </div>
                            <div className="text-sm px-4 py-2 md:py-3 bg-[#0056D7] rounded-md hover:bg-[#E2A000] ">
                                4. Catur Wara
                            </div>
                            <div className="text-sm px-4 py-2 md:py-3 bg-[#0056D7] rounded-md hover:bg-[#E2A000] ">
                                5. Panca Wara
                            </div>
                            <div className="text-sm px-4 py-2 md:py-3 bg-[#0056D7] rounded-md hover:bg-[#E2A000] ">
                                6. Sad Wara
                            </div>
                            <div className="text-sm px-4 py-2 md:py-3 bg-[#0056D7] rounded-md hover:bg-[#E2A000] ">
                                7. Sapta Wara
                            </div>
                            <div className="text-sm px-4 py-2 md:py-3 bg-[#0056D7] rounded-md hover:bg-[#E2A000] ">
                                8. Asta Wara
                            </div>
                            <div className="text-sm px-4 py-2 md:py-3 bg-[#0056D7] rounded-md hover:bg-[#E2A000] ">
                                9. Sanga Wara
                            </div>
                            <div className="text-sm px-4 py-2 md:py-3 bg-[#0056D7] rounded-md hover:bg-[#E2A000] ">
                                10. Dasa Wara
                            </div>
                        </div>
                    </div>
                    {/* Tabel Panca Wara */}
                    <div>
                        {/* Title tabel */}
                        <div>
                            <h3 className="text-2xl font-bold text-[#FFB400] ">
                                Panca Wara
                            </h3>
                            <p className="my-2 font-light">
                                Kelompok lima(5) dari sepuluh kelompok wewaran
                            </p>
                        </div>
                        <div className="bg-[#1F1B46] p-5 rounded-lg mt-8">
                            {/* Detail Tabel Panca Wara */}
                            <table className=" w-full text-center mb-4">
                                <tr className="">
                                    <th className="pb-4">No</th>
                                    <th className="pb-4">Nama</th>
                                    <th className="pb-4">Urip</th>
                                    <th className="pb-4">Arah</th>
                                </tr>
                                <tr className="bg-[#02205E]">
                                    <td className="py-5">1</td>
                                    <td>Umanis</td>
                                    <td>5</td>
                                    <td>Timur</td>
                                </tr>
                                <tr className="bg-[#02205E]/40 ">
                                    <td className="py-5">2</td>
                                    <td>Pahing</td>
                                    <td>9</td>
                                    <td>Selatan</td>
                                </tr>
                                <tr className="bg-[#02205E]">
                                    <td className="py-5">3</td>
                                    <td>Pon</td>
                                    <td>7</td>
                                    <td>Barat</td>
                                </tr>
                                <tr className="bg-[#02205E]/40 ">
                                    <td className="py-5">4</td>
                                    <td>Wage</td>
                                    <td>4</td>
                                    <td>Utara</td>
                                </tr>
                                <tr className="bg-[#02205E]">
                                    <td className="py-5">5</td>
                                    <td>Kliwon</td>
                                    <td>8</td>
                                    <td>Barat</td>
                                </tr>
                            </table>
                            <a
                                href="#"
                                className="text-[#FFB400] underline underline-offset-4"
                            >
                                Lihat Wewaran Selengkapnya
                            </a>
                        </div>
                    </div>
                    {/* Tabel Panca Wara */}
                    <div>
                        {/* Title tabel */}
                        <div>
                            <h3 className="text-2xl font-bold text-[#FFB400] ">
                                Panca Wara
                            </h3>
                            <p className="my-2 font-light">
                                Kelompok lima(5) dari sepuluh kelompok wewaran
                            </p>
                        </div>
                        <div className="bg-[#1F1B46] p-5 rounded-lg mt-8">
                            {/* Detail Tabel Panca Wara */}
                            <table className=" w-full text-center mb-4">
                                <tr className="">
                                    <th className="pb-4">No</th>
                                    <th className="pb-4">Nama</th>
                                    <th className="pb-4">Urip</th>
                                    <th className="pb-4">Arah</th>
                                </tr>
                                <tr className="bg-[#02205E]">
                                    <td className="py-5">1</td>
                                    <td>Umanis</td>
                                    <td>5</td>
                                    <td>Timur</td>
                                </tr>
                                <tr className="bg-[#02205E]/40 ">
                                    <td className="py-5">2</td>
                                    <td>Pahing</td>
                                    <td>9</td>
                                    <td>Selatan</td>
                                </tr>
                                <tr className="bg-[#02205E]">
                                    <td className="py-5">3</td>
                                    <td>Pon</td>
                                    <td>7</td>
                                    <td>Barat</td>
                                </tr>
                                <tr className="bg-[#02205E]/40 ">
                                    <td className="py-5">4</td>
                                    <td>Wage</td>
                                    <td>4</td>
                                    <td>Utara</td>
                                </tr>
                                <tr className="bg-[#02205E]">
                                    <td className="py-5">5</td>
                                    <td>Kliwon</td>
                                    <td>8</td>
                                    <td>Barat</td>
                                </tr>
                            </table>
                            <a
                                href="#"
                                className="text-[#FFB400] underline underline-offset-4"
                            >
                                Lihat Wewaran Selengkapnya
                            </a>
                        </div>
                    </div>
                    {/* Tabel Panca Wara */}
                    <div>
                        {/* Title tabel */}
                        <div>
                            <h3 className="text-2xl font-bold text-[#FFB400] ">
                                Panca Wara
                            </h3>
                            <p className="my-2 font-light">
                                Kelompok lima(5) dari sepuluh kelompok wewaran
                            </p>
                        </div>
                        <div className="bg-[#1F1B46] p-5 rounded-lg mt-8">
                            {/* Detail Tabel Panca Wara */}
                            <table className=" w-full text-center mb-4">
                                <tr className="">
                                    <th className="pb-4">No</th>
                                    <th className="pb-4">Nama</th>
                                    <th className="pb-4">Urip</th>
                                    <th className="pb-4">Arah</th>
                                </tr>
                                <tr className="bg-[#02205E]">
                                    <td className="py-5">1</td>
                                    <td>Umanis</td>
                                    <td>5</td>
                                    <td>Timur</td>
                                </tr>
                                <tr className="bg-[#02205E]/40 ">
                                    <td className="py-5">2</td>
                                    <td>Pahing</td>
                                    <td>9</td>
                                    <td>Selatan</td>
                                </tr>
                                <tr className="bg-[#02205E]">
                                    <td className="py-5">3</td>
                                    <td>Pon</td>
                                    <td>7</td>
                                    <td>Barat</td>
                                </tr>
                                <tr className="bg-[#02205E]/40 ">
                                    <td className="py-5">4</td>
                                    <td>Wage</td>
                                    <td>4</td>
                                    <td>Utara</td>
                                </tr>
                                <tr className="bg-[#02205E]">
                                    <td className="py-5">5</td>
                                    <td>Kliwon</td>
                                    <td>8</td>
                                    <td>Barat</td>
                                </tr>
                            </table>
                            <a
                                href="#"
                                className="text-[#FFB400] underline underline-offset-4"
                            >
                                Lihat Wewaran Selengkapnya
                            </a>
                        </div>
                    </div>
                    {/* Tabel Panca Wara */}
                    <div>
                        {/* Title tabel */}
                        <div>
                            <h3 className="text-2xl font-bold text-[#FFB400] ">
                                Panca Wara
                            </h3>
                            <p className="my-2 font-light">
                                Kelompok lima(5) dari sepuluh kelompok wewaran
                            </p>
                        </div>
                        <div className="bg-[#1F1B46] p-5 rounded-lg mt-8">
                            {/* Detail Tabel Panca Wara */}
                            <table className=" w-full text-center mb-4">
                                <tr className="">
                                    <th className="pb-4">No</th>
                                    <th className="pb-4">Nama</th>
                                    <th className="pb-4">Urip</th>
                                    <th className="pb-4">Arah</th>
                                </tr>
                                <tr className="bg-[#02205E]">
                                    <td className="py-5">1</td>
                                    <td>Umanis</td>
                                    <td>5</td>
                                    <td>Timur</td>
                                </tr>
                                <tr className="bg-[#02205E]/40 ">
                                    <td className="py-5">2</td>
                                    <td>Pahing</td>
                                    <td>9</td>
                                    <td>Selatan</td>
                                </tr>
                                <tr className="bg-[#02205E]">
                                    <td className="py-5">3</td>
                                    <td>Pon</td>
                                    <td>7</td>
                                    <td>Barat</td>
                                </tr>
                                <tr className="bg-[#02205E]/40 ">
                                    <td className="py-5">4</td>
                                    <td>Wage</td>
                                    <td>4</td>
                                    <td>Utara</td>
                                </tr>
                                <tr className="bg-[#02205E]">
                                    <td className="py-5">5</td>
                                    <td>Kliwon</td>
                                    <td>8</td>
                                    <td>Barat</td>
                                </tr>
                            </table>
                            <a
                                href="#"
                                className="text-[#FFB400] underline underline-offset-4"
                            >
                                Lihat Wewaran Selengkapnya
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
