// eslint-disable-next-line no-unused-vars
import React from "react";

export default function RamalanHarian() {
    return (
        <>
            <div className="bg-[#10398E] text-[#E2A000] text-xl sm:text-2xl text-center sm:text-left m-w-full px-4 sm:px-8 py-4 font-bold rounded-t-2xl">
                <p>Ramalan Harian</p>
            </div>
            <div className="mx-4 sm:mx-8 text-white text-center sm:text-left my-5">
                <div className="font-light text-base leading-[164%]">
                    <p>
                        Ramalan ini dibuat berdasarkan sumber lontar dari bali
                        sesuai dengan ilmu yang bernama wariga. Ilmu wariga di
                        Bali sesungguhnya mengajarkan kepada umat manusia di
                        muka bumi ini bahwa benda-benda bersinar di langit
                        memengaruhi jagar raya. Benda-benda tersebut menjadi
                        daasar perhitungan wariga, sebab unsur-unsur yang
                        membangun sistem wariga tersebut merupakan simbol benda
                        - benda langit tersebut
                    </p>
                </div>
                <div className="my-8">
                    <h3 className="text-lg sm:text-xl font-bold">
                        Riwayat Ramalan
                    </h3>
                    <div className="flex my-4 gap-4 sm:gap-8 justify-center sm:justify-start">
                        <div className="flex flex-col items-center">
                            <div className="max-w-14 w-full bg-[#10398E] text-lg sm:text-xl rounded-lg text-center p-2">
                                <p>04 Feb</p>
                            </div>
                            <p className="font-thin text-sm mt-2">
                                2 Hari lalu
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="max-w-14 w-full bg-[#10398E] text-lg sm:text-xl rounded-lg text-center p-2">
                                <p>05 Feb</p>
                            </div>
                            <p className="font-thin text-sm mt-2">
                                1 Hari lalu
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="max-w-14 w-full bg-[#FFB400] text-lg sm:text-xl rounded-lg text-center p-2 shadow-xl shadow-blue-400/75">
                                <p>06 Feb</p>
                            </div>
                            <p className="font-thin text-sm mt-2">Hari Ini</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="max-w-14 w-full bg-[#10398E] text-lg sm:text-xl rounded-lg text-center p-2">
                                <p>07 Feb</p>
                            </div>
                            <p className="font-thin text-sm mt-2">Besok</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-14 bg-[#10398E] text-lg sm:text-xl rounded-lg text-center p-2">
                                <p>08 Feb</p>
                            </div>
                            <p className="font-thin text-sm mt-2">Lusa</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold">
                            Hasil Perhitungan Ramalan Hari Ini
                        </h3>
                        <div className="flex flex-wrap justify-center sm:justify-start my-4 gap-3 ">
                            <div className="flex flex-col items-center max-w-14 w-full bg-[#10398E] text-xl font-thin rounded-lg text-center px-16 py-10">
                                <p>Guru</p>
                            </div>
                            <div className="flex flex-col items-center max-w-14 w-full bg-[#FFB400] text-xl font-bold rounded-lg text-center px-16 py-10 shadow-xl shadow-blue-400/50">
                                <p>Ratu</p>
                            </div>
                            <div className="flex flex-col items-center max-w-14 w-full bg-[#10398E] text-xl font-thin rounded-lg text-center px-16 py-10">
                                <p>Lara</p>
                            </div>
                            <div className="flex flex-col items-center max-w-14 w-full bg-[#10398E] text-xl font-thin rounded-lg text-center px-16 py-10">
                                <p>Pati</p>
                            </div>
                        </div>
                    </div>
                    <div className="my-6">
                        <h4 className="text-base sm:text-lg font-medium">
                            Ratu
                        </h4>
                        <p className="text-sm sm:text-base font-light leading-[164%]">
                            Ratu adalah kondisi dimana anda sedang begini dan
                            begitu. Saya perlu teks yang menjelaskan mengenai
                            ratu ini mungkin disini akan diberikan penjelasan
                            yang singkat mengenai bagaimana maksud dari ratu ini
                            dan juga memberikan user pengertian.
                        </p>
                    </div>
                    <div className="my-6">
                        <h4 className="text-base sm:text-lg font-medium mb-2">
                            Hal yang baik untuk dilakukan:
                        </h4>
                        <ul className="flex flex-wrap list-disc mx-6 w-80 gap-2 text-sm sm:text-base font-light text-left">
                            <li className="w-40 max-w-full">Bercocok Tanam</li>
                            <li>Berlibur</li>
                            <li className="w-40 max-w-full">Bersih-bersih</li>
                            <li>Memotong rambut</li>
                            <li className="w-40 max-w-full">Belajar</li>
                            <li>Berkompetisi</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-base sm:text-lg font-medium mb-2">
                            Hal yang tidak baik untuk dilakukan:
                        </h4>
                        <ul className="flex flex-wrap list-disc mx-6 w-80 gap-2 text-sm sm:text-base font-light text-left">
                            <li className="w-40 max-w-full">Bercocok Tanam</li>
                            <li>Berlibur</li>
                            <li className="w-40 max-w-full">Bersih-bersih</li>
                            <li>Memotong rambut</li>
                            <li className="w-40 max-w-full">Belajar</li>
                            <li>Berkompetisi</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
