// eslint-disable-next-line no-unused-vars
import React from "react";
import NavigasiBar from "../../components/Navbar/NavigasiBar";
import Bintang from "../../webp-img/bintang/bintang_3x.webp";

export default function BookingKonsulPertama() {
    return (
        <>
            <NavigasiBar />
            <div className="flex flex-col gap-8 max-w-7xl w-full mx-auto text-black text-white px-8 py-16">
                {/* Judul Pemesanan Konsultasi */}
                <div className="flex flex-col gap-3 items-center">
                    <img
                        src={Bintang}
                        alt="Gambar Bintang"
                        className="fixed -z-10 mt-[-100px]"
                    />
                    <h3 className="font-bold text-transparent text-xl bg-clip-text bg-gradient-to-b from-[#0056D7] to-[#FFB400] ">
                        <a href="/konsultasi">Konsultasi</a> / Pemesanan
                        Konsultasi
                    </h3>
                    <h1 className="text-4xl font-bold">
                        Pemesanan Sesi Konsultasi
                    </h1>
                    <p className="text-lg font-light">
                        Tolong isikan data dibawah ini untuk melakukan pemesanan
                    </p>
                </div>
                {/* Tahapan Konsultasi */}
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-2 items-center text-xl font-bold text-center">
                        <div className="inline-block bg-white max-w-[48px] w-full max-h-[48px] h-full text-[#13101F] rounded-full p-2.5 text-center">
                            1
                        </div>
                        <a href="/konsultasi/booking/1">Data Dasar</a>
                    </div>
                    <div className="w-[300px] h-[10px] bg-gradient-to-r from-white/0 to-white/80 rounded-full "></div>
                    <div className="flex flex-col gap-2 items-center text-xl font-bold">
                        <div className="inline-block bg-[#0056D6] max-w-[48px] w-full max-h-[48px] h-full text-white rounded-full p-2.5 text-center ">
                            2
                        </div>
                        <p>Keluhan</p>
                    </div>
                    <div className="w-[300px] h-[10px] bg-gradient-to-r from-white/0 to-white/80 rounded-full "></div>
                    <div className="flex flex-col gap-2 items-center text-xl font-bold">
                        <div className="inline-block bg-white max-w-[48px] w-full max-h-[48px] h-full text-[#13101F] rounded-full p-2.5 text-center">
                            3
                        </div>
                        <a href="/konsultasi/booking/3">Pembayaran</a>
                    </div>
                </div>
                {/* Kontainer Penngisian Waktu dan Keluhan */}
                <div>
                    <div className="text-[#BFBFBF] w-full mx-auto">
                        <h3 className="text-white text-xl font-bold mb-7">
                            Pengisian Keluhan
                        </h3>
                        <form className="space-y-6" action="#" method="POST">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="namaLengkap"
                                        className="block text-sm font-medium leading-6"
                                    >
                                        Waktu Konsultasi (WITA)
                                    </label>
                                    <div className="mt-2 grid grid-cols-4 md:grid-cols-6 gap-4 text-center">
                                        <div
                                            id="waktuKonsultasi"
                                            className="rounded-md border-0 py-3 px-5 shadow-sm ring-1 ring-[#BFBFBF] text-white sm:text-sm sm:leading-6 hover:bg-[#E2A000] hover:ring-[#E2A000] cursor-pointer"
                                        >
                                            13:00
                                        </div>
                                        <div
                                            id="waktuKonsultasi"
                                            className="rounded-md border-0 py-3 px-5 shadow-sm ring-1 ring-[#BFBFBF] text-white sm:text-sm sm:leading-6 hover:bg-[#E2A000] hover:ring-[#E2A000] cursor-pointer"
                                        >
                                            15:00
                                        </div>
                                        <div
                                            id="waktuKonsultasi"
                                            className="rounded-md border-0 py-3 px-5 shadow-sm ring-1 ring-[#BFBFBF] text-white sm:text-sm sm:leading-6 hover:bg-[#E2A000] hover:ring-[#E2A000] cursor-pointer"
                                        >
                                            17:00
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="namaLengkap"
                                        className="block text-sm font-medium leading-6"
                                    >
                                        Pelaksanaan
                                    </label>
                                    <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                                        <div
                                            id="waktuKonsultasi"
                                            className="rounded-md border-0 py-3 px-5 shadow-sm ring-1 ring-[#BFBFBF] text-white sm:text-sm sm:leading-6 hover:bg-[#E2A000] hover:ring-[#E2A000] cursor-pointer"
                                        >
                                            Online (Daring)
                                        </div>
                                        <div
                                            id="waktuKonsultasi"
                                            className="rounded-md border-0 py-3 px-5 shadow-sm ring-1 ring-[#BFBFBF] text-white sm:text-sm sm:leading-6 hover:bg-[#E2A000] hover:ring-[#E2A000] cursor-pointer"
                                        >
                                            Offline (Luring)
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="jenisKelamin"
                                        className="block text-sm font-medium leading-6"
                                    >
                                        Kategori Keluhan
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="jenisKelamin"
                                            name="jenisKelamin"
                                            required
                                            className="block w-full rounded-md border-0 py-3 px-5 shadow-sm ring-1 ring-[#BFBFBF] text-gray focus:ring-2 focus:ring-[#E2A000] sm:text-sm sm:leading-6 transparent bg-transparent"
                                        >
                                            <option value="Kesehatan">
                                                Kesehatan
                                            </option>
                                            <option value="Asmara">
                                                Asmara
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium leading-6"
                                    >
                                        Tanggal Konsultasi
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
                            </div>
                            <div className="grid grid-cols-1">
                                <div>
                                    <label
                                        htmlFor="deskripsiKeluhan"
                                        className="block text-sm font-medium leading-6"
                                    >
                                        Deskripsi Keluhan
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="deskripsiKeluhan"
                                            name="deskripsiKeluhan"
                                            type="text"
                                            required
                                            className="block w-full rounded-md border-0 py-3 px-5 shadow-sm ring-1 ring-[#BFBFBF] text-gray focus:ring-2 focus:ring-[#E2A000] sm:text-sm sm:leading-6 transparent bg-transparent max-h-[140px] h-full "
                                            placeholder="Deskripsikan keluhan yang anda alami..."
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="rounded-md bg-[#0056D7] py-3 px-5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-[#0056D7]/60  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Lanjut {">"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
