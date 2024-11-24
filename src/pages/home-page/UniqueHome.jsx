import React from 'react'

const UniqueHome = () => {
    return (
        <div>
            <div>
                <section className="bg-white mb-10 ">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                                Find your home with  <span className="text-orange-500">unique preferences</span>
                            </h2>
                            <div className="max-w-2xl mx-auto">
                                <p className="text-[#0F0E0E] mt-4">
                                    Explore a curated selection of homes designed to match your unique preferences, making it effortless to find the ideal property that perfectly fits your lifestyle and needs.
                                </p>
                            </div>
                        </div>

                        {/* Cards Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="  relative overflow-hidden ">
                                <img
                                    src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732466333/Image_9_gfy6xi.png"
                                    alt="First-time home buyers"
                                    className="w-full  object-cover"
                                />
                                <div className=" mt-4 flex  justify-between items-center ">
                                    <p className=" text-[#0F0E0E] font-bold md:text-[20px]  mb-2">Luxury waterfront</p>
                                    <h3 className=" text-[#0F0E0E] font-bold ">
                                        $235,000
                                    </h3>
                                </div>
                                <div>
                                    <p className='text-[#2D2D2D] ' >505 Oceanview Avenue, Miami, FL</p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className=" lg:-mb-16 lg:mt-16  overflow-hidden ">
                                <img
                                    src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732466333/image_21_ktaife.png"
                                    alt="Rental market tips"
                                    className="w-full  object-cover"
                                />
                                <div className=" mt-4 flex  justify-between items-center ">
                                    <p className=" text-[#0F0E0E] font-bold md:text-[20px]  mb-2">Lakeside retreat</p>
                                    <h3 className=" text-[#0F0E0E] font-bold ">
                                        $625,000
                                    </h3>
                                </div>
                                <div>
                                    <p className='text-[#2D2D2D] ' >789 Lake Road, Greenfield, MI</p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className=" relative overflow-hidden  ">
                                <img
                                    src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732466333/Image_10_l5lk9o.png"
                                    alt="Choosing neighborhoods"
                                    className="w-full object-cover"
                                />
                                <div className=" mt-4 flex  justify-between items-center ">
                                    <p className=" text-[#0F0E0E] font-bold md:text-[20px]  mb-2">Charming cottage</p>
                                    <h3 className=" text-[#0F0E0E] font-bold ">
                                        $845,000
                                    </h3>
                                </div>
                                <div>
                                    <p className='text-[#2D2D2D] ' >101 Oak Lane, Hillsboro, OR</p>
                                </div>
                            </div>
                        </div>


                        <div className='mt-20' >
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Card 4 */}
                                <div className="  relative overflow-hidden ">
                                    <img
                                        src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732466333/Image_11_tzcnj2.png"
                                        alt="First-time home buyers"
                                        className="w-full  object-cover"
                                    />
                                    <div className=" mt-4 flex  justify-between items-center ">
                                        <p className=" text-[#0F0E0E] font-bold md:text-[20px]  mb-2">Grand view haven</p>
                                        <h3 className=" text-[#0F0E0E] font-bold ">
                                        $540,000
                                        </h3>
                                    </div>
                                    <div>
                                        <p className='text-[#2D2D2D] ' >202 Ridge Drive, Beverly Hills, CA</p>
                                    </div>
                                </div>

                                {/* Card 5 */}
                                <div className=" lg:-mb-16 lg:mt-16  overflow-hidden ">
                                    <img
                                        src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732466333/Image_12_nb2qaf.png"
                                        alt="Rental market tips"
                                        className="w-full  object-cover"
                                    />
                                    <div className=" mt-4 flex  justify-between items-center ">
                                        <p className=" text-[#0F0E0E] font-bold md:text-[20px]  mb-2">Sunny view manor</p>
                                        <h3 className=" text-[#0F0E0E] font-bold ">
                                        $430,000
                                        </h3>
                                    </div>
                                    <div>
                                        <p className='text-[#2D2D2D] ' >123 Maple Street, Sunnyvale, CA</p>
                                    </div>
                                </div>

                                {/* Card 6 */}
                                <div className=" relative overflow-hidden  ">
                                    <img
                                        src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732466332/Image_13_j1elck.png"
                                        alt="Choosing neighborhoods"
                                        className="w-full object-cover"
                                    />
                                    <div className=" mt-4 flex  justify-between items-center ">
                                        <p className=" text-[#0F0E0E] font-bold md:text-[20px]  mb-2">Ocean breeze villa</p>
                                        <h3 className=" text-[#0F0E0E] font-bold ">
                                        $420,000
                                        </h3>
                                    </div>
                                    <div>
                                        <p className='text-[#2D2D2D] ' >456 Elm Avenue, Downtown, NY</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Button Section */}
                        <div className="text-center  mt-9 lg:mt-24">
                            <button
                                className="px-6 py-3 border mx-auto text-[#0F0E0E] border-orange-600  flex items-center gap-2 text-sm font-medium rounded-md  transition-transform transform hover:scale-105"
                            >
                                View All Product <span> <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732385450/Vector_qbkpq8.png" alt="" /> </span>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default UniqueHome
