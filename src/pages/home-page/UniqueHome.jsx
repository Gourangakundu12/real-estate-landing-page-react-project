import React from 'react'

import cardImg1 from "../../assets/property/card-1.png"
import cardImg2 from "../../assets/property/card-2.png"
import cardImg3 from "../../assets/property/card-3.png"
import cardImg4 from "../../assets/property/card-4.png"
import cardImg5 from "../../assets/property/card-5.png"
import cardImg6 from "../../assets/property/card-6.png"

import arrowIcon from "../../assets/arrow.png"

const UniqueHome = () => {
    return (
        <section className="bg-white mb-10 py-28" id='properties'>
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
                                    src={cardImg1}
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
                                    src={cardImg2}
                                    alt="cardImg2"
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
                                    src={cardImg3}
                                    alt="cardImg3"
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
                                        src={cardImg4}
                                        alt="cardImg4"
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
                                        src={cardImg5}
                                        alt="cardImg5"
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
                                        src={cardImg6}
                                        alt="cardImg6"
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
                                View All Product <span> <img src={arrowIcon} alt="arrow icon" /> </span>
                            </button>
                        </div>
                    </div>
                </section>
    )
}

export default UniqueHome
