// eslint-disable-next-line no-unused-vars
import React from "react";
import NavigasiBar from "../../components/Navbar/NavigasiBar";
import Bintang from "../../webp-img/bintang/bintang_3x.webp";
import LogoBCA from "../../webp-img/BCA.png";
import LogoBNI from "../../webp-img/BNI.png";
import LogoBPD from "../../webp-img/BPD.png";

export default function BookingKonsulPertama() {
    return (
        <>
            <NavigasiBar />
            <div className="flex flex-col gap-8 max-w-7xl w-full mx-auto text-black text-white px-4 sm:px-6 lg:px-16 py-16">
                {/* Judul Pemesanan Konsultasi */}
                <div className="flex flex-col gap-3 items-center text-center sm:text-left">
                    <img
                        src={Bintang}
                        alt="Gambar Bintang"
                        className="fixed -z-10 mt-[-100px]"
                    />
                    <h3 className="font-bold text-transparent text-lg sm:text-xl bg-clip-text bg-gradient-to-b from-[#0056D7] to-[#FFB400] ">
                        <a href="/konsultasi">Konsultasi</a> / Pemesanan
                        Konsultasi
                    </h3>
                    <h1 className="text-2xl sm:text-4xl font-bold">
                        Pemesanan Sesi Konsultasi
                    </h1>
                    <p className="text-sm sm:text-lg font-light">
                        Tolong isikan data dibawah ini untuk melakukan pemesanan
                    </p>
                </div>
                {/* Tahapan Konsultasi */}
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-2 items-center text-sm sm:text-xl font-bold text-center">
                        <div className="bg-white max-w-[48px] w-full text-[#13101F]  rounded-full p-3.5 sm:p-2.5 text-center">
                            1
                        </div>
                        <a href="/konsultasi/booking/1">Biodata</a>
                    </div>
                    <div className="hidden md:block max-w-[300px] w-full h-[10px] bg-gradient-to-r from-white/0 to-white/80 rounded-full "></div>
                    <div className="flex flex-col gap-2 items-center text-sm sm:text-xl font-bold">
                        <div className="bg-white max-w-[48px] w-full text-[#13101F] rounded-full p-3.5 sm:p-2.5 text-center">
                            2
                        </div>
                        <a href="/konsultasi/booking/2">Keluhan</a>
                    </div>
                    <div className="hidden md:block max-w-[300px] w-full h-[10px] bg-gradient-to-r from-white/0 to-white/80 rounded-full "></div>
                    <div className="flex flex-col gap-2 items-center text-sm sm:text-xl font-bold">
                        <div className="bg-[#0056D6] max-w-[48px] w-full text-white rounded-full p-3.5 sm:p-2.5 text-center">
                            3
                        </div>
                        <p>Pembayaran</p>
                    </div>
                </div>
                {/* Kontainer Pemilihan Pembayaran */}
                <div>
                    <div className="text-[#BFBFBF] w-full mx-auto">
                        <h3 className="text-white text-base sm:text-xl font-bold mb-7 text-center">
                            Silahkan Pilih Metode Pembayaran
                        </h3>
                        <div className="flex flex-col gap-7 items-center">
                            <div className="grid grid-cols-3 items-center justify-center gap-8">
                                <div>
                                    <img
                                        src={LogoBNI}
                                        alt="Gambar-Logo-BNI"
                                        className="bg-white rounded-md p-2 md:p-5 brightness-50"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={LogoBPD}
                                        alt="Gambar-Logo-BPD"
                                        className="bg-white rounded-md p-2 md:p-5 border-4 border-[#019966]"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={LogoBCA}
                                        alt="Gambar-Logo-BCA"
                                        className="bg-white rounded-md p-2 md:p-5 brightness-50"
                                    />
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <p className="text-3xl text-white font-bold ">
                                    1938432432
                                </p>
                                <p>BCA | I Wayan Arjuna Satya Puja</p>
                            </div>
                            <div className="text-center max-w-[700px] w-full ">
                                <p>
                                    Silahkan lakukan pembayaran sesuai rekening
                                    yang tertera di atas. Setelah lakukan
                                    pembayaran harap melakukan konfirmasi
                                    pembayaran melalui whatsapp dengan nomor
                                    +6204819xx932. Atau bisa konfirmasi dengan
                                    klik tombol dibawah.
                                </p>
                            </div>
                            <div>
                                <p className="mb-4 text-white text-center font-bold text-lg">
                                    Biaya konsultasi : 50.000
                                </p>
                                <div className="flex gap-6">
                                    <a
                                        className="rounded-md bg-[#37BA15] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#6C93CD] text-center "
                                        href="https://wa.me/6181529371494"
                                    >
                                        Konfirmasi melalui whatsapp
                                    </a>
                                    <a
                                        className="rounded-md bg-[#0056D7] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#6C93CD] text-center "
                                        href="/konsultasi/booking/1"
                                    >
                                        Konfirmasi Pembayaran
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
