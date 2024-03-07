// eslint-disable-next-line no-unused-vars
import React from "react";
import NavigasiBar from "../../components/Navbar/NavigasiBar";
import Bintang from "../../webp-img/bintang/bintang_3x.webp";

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
                        <div className="bg-[#0056D6] max-w-[48px] w-full text-white rounded-full p-3.5 sm:p-2.5 text-center">
                            1
                        </div>
                        <p>Biodata</p>
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
                        <div className="bg-white max-w-[48px] w-full text-[#13101F] rounded-full p-3.5 sm:p-2.5 text-center">
                            3
                        </div>
                        <a href="/konsultasi/booking/3">Pembayaran</a>
                    </div>
                </div>
                <div>
                    <div className="text-[#BFBFBF] w-full mx-auto">
                        <h3 className="text-white text-xl font-bold mb-7">
                            Pengisian Data Profil
                        </h3>
                        <form
                            className="space-y-6"
                            action="/konsultasi/booking/2"
                            method="POST"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="namaLengkap"
                                        className="block text-sm font-medium leading-6"
                                    >
                                        Nama Lengkap
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="namaLengkap"
                                            name="namaLengkap"
                                            type="text"
                                            required
                                            className="block w-full rounded-md border-0 py-3 px-5 shadow-sm ring-1 ring-[#BFBFBF] text-white focus:ring-2 focus:ring-[#E2A000] sm:text-sm sm:leading-6 transparent bg-transparent"
                                            placeholder="I Wayan Teja"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="pekerjaan"
                                        className="block text-sm font-medium leading-6"
                                    >
                                        Pekerjaan
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="pekerjaan"
                                            name="pekerjaan"
                                            required
                                            className="block w-full rounded-md border-0 py-3 px-5 shadow-sm ring-1 ring-[#BFBFBF] text-gray focus:ring-2 focus:ring-[#E2A000] sm:text-sm sm:leading-6 transparent bg-transparent"
                                        >
                                            <option
                                                value="pegawaiSwasta"
                                                className="bg-pink"
                                            >
                                                Pegawai Swasta
                                            </option>
                                            <option value="wirausaha">
                                                Wirausaha
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="jenisKelamin"
                                        className="block text-sm font-medium leading-6"
                                    >
                                        Jenis Kelamin
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="jenisKelamin"
                                            name="jenisKelamin"
                                            required
                                            className="block w-full rounded-md border-0 py-3 px-5 shadow-sm ring-1 ring-[#BFBFBF] text-gray focus:ring-2 focus:ring-[#E2A000] sm:text-sm sm:leading-6 transparent bg-transparent"
                                        >
                                            <option
                                                value="pegawaiSwasta"
                                                className="bg-pink"
                                            >
                                                Laki-laki
                                            </option>
                                            <option value="wirausaha">
                                                Perempuan
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="nomorTelepon"
                                        className="block text-sm font-medium leading-6"
                                    >
                                        Nomor Telepoin (WA)
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="nomorTelepon"
                                            name="nomorTelepon"
                                            type="tel"
                                            required
                                            className="block w-full rounded-md border-0 py-3 px-5 shadow-sm ring-1 ring-[#BFBFBF] text-white focus:ring-2 focus:ring-[#E2A000] sm:text-sm sm:leading-6 transparent bg-transparent"
                                            placeholder="08123456789"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1">
                                <div>
                                    <label
                                        htmlFor="alamat"
                                        className="block text-sm font-medium leading-6"
                                    >
                                        Alamat
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="alamat"
                                            name="alamat"
                                            type="text"
                                            required
                                            className="block w-full rounded-md border-0 py-3 px-5 shadow-sm ring-1 ring-[#BFBFBF] text-gray focus:ring-2 focus:ring-[#E2A000] sm:text-sm sm:leading-6 transparent bg-transparent"
                                            placeholder="Alamat Domisili"
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
