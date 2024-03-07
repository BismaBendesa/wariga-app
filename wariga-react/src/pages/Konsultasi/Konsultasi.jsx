// eslint-disable-next-line no-unused-vars
import React from "react";
import NavigasiBar from "../../components/Navbar/NavigasiBar";
import Tokoh from "../../webp-img/tokoh-konsultasi.png";
import Bintang from "../../webp-img/bintang/bintang_3x.webp";

export default function Konsultasi() {
    return (
        <>
            <NavigasiBar />
            <div className="px-4 sm:px-6 lg:px-16 text-white grid grid-cols-1 md:grid-cols-2 pt-16 gap-4 sm:gap-16 mb-12 md:mb-20">
                <div>
                    <div className="flex flex-col gap-6">
                        <img
                            src={Bintang}
                            alt="Gambar Bintang"
                            className="fixed -z-10 top-20"
                        />
                        <h1 className="text-center sm:text-left text-[#0056D7] text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#0056D7] to-[#FFB400]">
                            Konsultasi
                        </h1>
                        <p className="text-4xl md:text-5xl text-center sm:text-left font-bold">
                            Konsultasikan Keluhan Anda Dengan Ahli
                        </p>
                        <p className="text-center sm:text-left text-base sm:text-lg leading-[164%] font-light">
                            Ingin mengetahui lebih lanjut mengenai ramalan dan
                            keadaan anda? Mari konsultasikan hal tersebut dengan
                            ahli kami. Kami siap membantu menjawab seluruh
                            pertanyaan anda.
                        </p>
                    </div>
                    <div className="my-8 flex justify-center sm:justify-start">
                        <a
                            className="rounded-md bg-[#0056D7] px-6 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#6C93CD] "
                            href="/konsultasi/booking/1"
                        >
                            Booking Konsultasi
                        </a>
                    </div>
                </div>
                <div className="">
                    <figure className="flex justify-center">
                        <img src={Tokoh} alt="gambar bapak" width={400} />
                    </figure>
                    <figcaption className="text-center">
                        <div className="mt-6">
                            <h3 className="text-base">
                                I Wayan Arjuna Satya Puja S.Kom., M.Kom.
                            </h3>
                            <p className="text-sm text-[#FFB400] mt-2">
                                Pengamat Wariga
                            </p>
                        </div>
                        <p className="text-xs sm:text-sm font-light mt-4 leading-[164%] ">
                            “Wariga itu ilmu yang leluhur kita miliki, sejatinya
                            alam semesta itu terus berputar dan akan
                            berubah-ubah setiap harinya. Manusia yang lahir juga
                            terlahir pada keadaan alam semesta yang beda.”
                        </p>
                    </figcaption>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-16 text-white mb-12">
                <div className="w-full">
                    <div className="mb-4 text-center sm:text-left">
                        <h1 className="text-xl sm:text-3xl font-bold mb-2">
                            Riwayat Konsultasi{" "}
                        </h1>
                        <p className="text-sm sm:text-base">
                            Anda dapat melihat beberapa riwayat konsultasi anda
                            disini.
                        </p>
                    </div>
                    <div className="mb-7">
                        <p className="mb-4 text-sm text-[#A6A6A6]">
                            Akan Datang
                        </p>
                        <div className="bg-[#1F1B46] p-5 rounded-lg">
                            {/* tabel akan datang */}
                            <table className=" w-full text-center text-sm sm:text-base">
                                <tr className="">
                                    <th className="pb-6">No</th>
                                    <th className="pb-6">Nama</th>
                                    <th className="pb-6">Waktu</th>
                                    <th className="pb-6">Tanggal</th>
                                    <th className="pb-6">Status</th>
                                </tr>
                                <tr className="bg-[#02205E]">
                                    <td className="py-5">1</td>
                                    <td>Konsultasi Kesehatan</td>
                                    <td>13:00 WITA</td>
                                    <td>12 Des 2023</td>
                                    <td>Warning</td>
                                </tr>
                                <tr className="bg-[#02205E]/40 ">
                                    <td className="py-5">1</td>
                                    <td>Konsultasi Kesehatan</td>
                                    <td>13:00 WITA</td>
                                    <td>12 Des 2023</td>
                                    <td>Warning</td>
                                </tr>
                                <tr className="bg-[#02205E]">
                                    <td className="py-5">1</td>
                                    <td>Konsultasi Kesehatan</td>
                                    <td>13:00 WITA</td>
                                    <td>12 Des 2023</td>
                                    <td>Warning</td>
                                </tr>
                                <tr className="bg-[#02205E]/40 ">
                                    <td className="py-5">1</td>
                                    <td>Konsultasi Kesehatan</td>
                                    <td>13:00 WITA</td>
                                    <td>12 Des 2023</td>
                                    <td>Warning</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div>
                        <p className="mb-4 text-sm text-[#A6A6A6]">Riwayat</p>
                        <div className="bg-[#1F1B46] p-5 rounded-lg">
                            {/* tabel akan datang */}
                            <table className=" w-full text-center text-sm sm:text-base">
                                <tr className="">
                                    <th className="pb-6">No</th>
                                    <th className="pb-6">Nama</th>
                                    <th className="pb-6">Waktu</th>
                                    <th className="pb-6">Tanggal</th>
                                    <th className="pb-6">Status</th>
                                </tr>
                                <tr className="bg-[#02205E]">
                                    <td className="py-5">1</td>
                                    <td>Konsultasi Kesehatan</td>
                                    <td>13:00 WITA</td>
                                    <td>12 Des 2023</td>
                                    <td>Warning</td>
                                </tr>
                                <tr className="bg-[#02205E]/40 ">
                                    <td className="py-5">1</td>
                                    <td>Konsultasi Kesehatan</td>
                                    <td>13:00 WITA</td>
                                    <td>12 Des 2023</td>
                                    <td>Warning</td>
                                </tr>
                                <tr className="bg-[#02205E]">
                                    <td className="py-5">1</td>
                                    <td>Konsultasi Kesehatan</td>
                                    <td>13:00 WITA</td>
                                    <td>12 Des 2023</td>
                                    <td>Warning</td>
                                </tr>
                                <tr className="bg-[#02205E]/40 ">
                                    <td className="py-5">1</td>
                                    <td>Konsultasi Kesehatan</td>
                                    <td>13:00 WITA</td>
                                    <td>12 Des 2023</td>
                                    <td>Warning</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="bg-[#1F1B46] rounded-t-2xl">
                    <div className="bg-[#10398E] px-8 py-4 rounded-t-2xl text-center sm:text-left">
                        <h1 className="text-xl sm:text-3xl font-bold mb-2">
                            Riwayat Konsultasi{" "}
                        </h1>
                        <p className="text-sm sm:text-base font-light">
                            Anda dapat melihat beberapa riwayat konsultasi anda
                            disini.
                        </p>
                    </div>
                    <div className="flex flex-col gap-8 mx-4 sm:mx-8 text-white  my-5 text-[#D9D9D9]">
                        <div>
                            <h4 className="text-sm text-[#FFB400]">
                                Konsultan
                            </h4>
                            <p>I Wayan Arjuna Satya Puja S.Kom., M.Kom.</p>
                        </div>
                        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
                            <div>
                                <h4 className="text-sm text-[#FFB400]">
                                    Kategori Keluhan
                                </h4>
                                <p>Kesehatan</p>
                            </div>
                            <div>
                                <h4 className="text-sm text-[#FFB400]">
                                    Tanggal
                                </h4>
                                <p>Kesehatan</p>
                            </div>
                            <div>
                                <h4 className="text-sm text-[#FFB400]">
                                    Waktu
                                </h4>
                                <p>14:00</p>
                            </div>
                            <div>
                                <h4 className="text-sm text-[#FFB400]">
                                    Pelaksanaan
                                </h4>
                                <p>Offline</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-sm text-[#FFB400]">Keluhan</h4>
                            <p className="text-sm sm:text-base leading-[164%] ">
                                Setiap kali sakit kepala datang, rasanya seperti
                                seluruh dunia berputar dan sulit untuk fokus.
                                Bahkan setelah istirahat yang cukup, rasanya
                                masih saja ada. Sudah mencoba berbagai jenis
                                obat, minum banyak air, bahkan mencoba teknik
                                relaksasi, tetapi tidak ada yang benar-benar
                                memberikan perbaikan yang signifikan. Apakah
                                mungkin ada penyebab yang lebih dalam atau
                                metode pengobatan alternatif yang bisa saya
                                coba?
                            </p>
                        </div>
                        <div>
                            <h4 className="text-sm text-[#FFB400]">
                                Konsultan
                            </h4>
                            <p className="text-sm sm:text-base leading-[164%] ">
                                Ditinjau dari kelahiran anda, anda memiliki
                                riwayat penyakit yang signifikan di bagiaan
                                kepala. karena karakter anda adalah Panes, Anda
                                harus bisa memanajemen stress anda. <br></br>{" "}
                                <br></br>
                                Selain itu anda juga harus berhati-hati ketika
                                hari sedang lara, Hindari melakukan hal-hal yang
                                terlalu berat. Anda bisa meningkatkan mood anda
                                dengan mendengarkan musik ceria ketika anda
                                mengalami lara. <br></br> <br></br>Terapi yang
                                cocok ketika sakit kepala anda adalah terapi
                                menggunakan es yang dingin. Kompres menggunakan
                                es, namun hindari kontak es langsung dengan
                                kulit. Anda bisa melapisi es dengan kain lalu
                                kompreskan. <br></br> <br></br>Sering-seringlah
                                keluar sesekali untuk menghirup udaraa segar
                                atau liburan bertemakan alam untuk mengurangi
                                stress. Dalam kelahiran anda, anda adalah teman
                                baik alam, jadi jangan lupakan alam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
