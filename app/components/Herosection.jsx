"use client";
import Image from 'next/image';
import Kost from '../../public/images/kost.jpg';

const Herosection = () => {
    return (
        <section id="home">
            <div className="p-5 bg-sky-700 grid grid-cols-1 xl:grid-cols-2 h-fit">
                <div className="order-2 xl:order-none xl:my-auto mx-10 space-y-4">
                    <div className="border-white border-b-2 p-1">
                        <h1 className="text-lg xl:text-4xl text-left text-white font-bold">Kost Murah Area Strategis</h1>
                        <h1 className="text-xs xl:text-2xl text-left text-white font-semibold">Hunian nyaman & murah area USM,STIE, dan PUPR</h1>
                    </div>
                    <div className='bg-green-500 shadow-2xl rounded-full w-full text-center'>
                        <div className='grid grid-cols-3 p-4 xl:p-6 bg-white rounded-2xl'>
                            <div className=''>
                                <h1 className='xl:text-7xl font-bold text-sky-900'>10</h1>
                                <h1 className='font-base text-center shadow-xl p-2 xl:text-2xl'>Kamar</h1>
                            </div>
                            <div className=''>
                            <h1 className='xl:text-7xl font-bold text-sky-900'>12</h1>
                                <h1 className='font-base text-center shadow-xl p-2 xl:text-2xl'>Penghuni</h1>
                            </div>
                            <div className=''>
                            <h1 className='xl:text-7xl font-bold text-sky-900'>350K++</h1>
                                <h1 className='font-base text-center shadow-xl p-2 xl:text-2xl'>Price</h1>
                            </div>
                        </div>
                        <div className='p-4'>
                            <a className='xl:text-3xl font-xs font-semibold text-white hover:underline' href="">Cari Kamar</a>
                        </div>
                    </div>
                </div>
                <div className="order-1 xl:order-none xl:p-16 my-auto rounded-xl bg-white">
                    <Image className='h-3/4 w-full'
                        src={Kost} alt="Kost Image" />
                </div>
            </div>
        </section>
    )
}

export default Herosection