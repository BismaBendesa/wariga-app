// eslint-disable-next-line no-unused-vars
import React from "react";
import NavigasiBar from "../../components/Navbar/NavigasiBar";
import Tokoh from "../../webp-img/tokoh-konsultasi.png";
import Bintang from "../../webp-img/bintang/bintang_3x.webp";

export default function Konsultasi() {
    return (
        <>
            <NavigasiBar />
            <div className="px-4 sm:px-6 lg:px-16 text-white grid grid-cols-1 md:grid-cols-2 pt-16 gap-16 mb-12 md:mb-20">
                <div>
                    <div className="flex flex-col gap-6">
                        <img
                            src={Bintang}
                            alt="Gambar Bintang"
                            className="fixed -z-10 top-20"
                        />
                        <h1>Konsultasi</h1>
                        <p className="text-5xl font-bold">
                            Konsultasikan Keluhan Anda Dengan Ahli
                        </p>
                        <p className="text-md font-light">
                            Ingin mengetahui lebih lanjut mengenai ramalan dan
                            keadaan anda? Mari konsultasikan hal tersebut dengan
                            ahli kami. Kami siap membantu menjawab seluruh
                            pertanyaan anda.
                        </p>
                    </div>
                    <div className="my-8">
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
                        <div className="mt-7">
                            <h3 className="text-md">
                                I Wayan Arjuna Satya Puja S.Kom., M.Kom.
                            </h3>
                            <p className="text-sm text-[#FFB400]">
                                Pengamat Wariga
                            </p>
                        </div>
                        <p className="text-sm font-light mt-4">
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
                    <div className="mb-7">
                        <h1 className="text-3xl mb-2">Riwayat Konsultasi </h1>
                        <p>
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
                            <table className=" w-full text-center ">
                                <tr className="">
                                    <th className="py-6">No</th>
                                    <th className="py-6">Nama</th>
                                    <th className="py-6">Waktu</th>
                                    <th className="py-6">Tanggal</th>
                                    <th className="py-6">Status</th>
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
                            <table className=" w-full text-center">
                                <tr className="">
                                    <th className="py-6">No</th>
                                    <th className="py-6">Nama</th>
                                    <th className="py-6">Waktu</th>
                                    <th className="py-6">Tanggal</th>
                                    <th className="py-6">Status</th>
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
                    <div className="bg-[#10398E] px-8 py-4  rounded-t-2xl">
                        <h1 className="text-3xl mb-2">Riwayat Konsultasi </h1>
                        <p className="font-light">
                            Anda dapat melihat beberapa riwayat konsultasi anda
                            disini.
                        </p>
                    </div>
                    <div className="flex flex-col gap-8 px-8 py-6 text-[#D9D9D9]">
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
                            <p>
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
                            <p>
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
