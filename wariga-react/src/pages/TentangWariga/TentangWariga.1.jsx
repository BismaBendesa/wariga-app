// eslint-disable-next-line no-unused-vars
import React from "react";
import NavigasiBar from "../../components/Navbar/NavigasiBar";
import KalenderSekarang from "../../webp-img/kalender-now.png";
import KalenderTika from "../../webp-img/kalender-tika.png";
import Lukisan from "../../webp-img/lukisan.png";

export default function TentangWariga() {
    return (
        <>
            <NavigasiBar />
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-16 text-white py-8">
                <h3 className="font-bold text-transparent text-xl bg-clip-text bg-gradient-to-b from-[#0056D7] to-[#FFB400] ">
                    Tentang Wariga
                </h3>
                {/* section 1 -> kalender bali */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-4">
                    <div className="flex flex-col gap-4 leading-[164%] text-md">
                        <h1 className="text-4xl font-bold">
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
                    <div className="flex justify-center gap-16 text-center">
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
                    <div className="flex flex-col gap-4 leading-[164%] text-md">
                        <h1 className="text-4xl font-bold">Kerangka Wariga</h1>
                        <p>
                            Wariga sendiri memiliki lima kerangka yang terdiri
                            dari wewaran, pawukon, pananggal atau pangelong,
                            sasih dan dawuh. Berikut adalah penjelasan
                            singkatnya:
                        </p>
                        <ul className="list-disc list-[#FFB400] px-5">
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
            </div>
        </>
    );
}
