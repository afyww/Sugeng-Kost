
const Aboutsection = () => {
    return (
        <section id="about">
            <div className="p-5 bg-emerald-700 grid grid-cols-1 xl:grid-cols-2 h-fit">
                <div className="order-2 xl:order-none xl:p-32 my-auto rounded-xl bg-white">
                    <div className='p-8 border-black border-2 rounded-xl'>
                        <h1 className='text-black'>Yuk, temukan kenyamanan
                            dan kehangatan di tempat kost kami!
                            Dengan fasilitas lengkap dan lingkungan yang bersahabat,
                            mari bergabung bersama kami untuk pengalaman tinggal yang
                            menyenangkan dan nyaman.
                        </h1>
                    </div>
                </div>
                <div className="order-1 xl:order-none xl:my-auto mx-10">
                    <div>
                        <div className="border-white border-b-2 p-1">
                            <h1 className="text-xl xl:text-5xl text-center text-white font-bold"># About</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
}

export default Aboutsection