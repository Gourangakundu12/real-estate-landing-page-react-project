import React from 'react'

const EstateService = () => {
    return (
        <div className="bg-[#FDF3EE] my-7 lg:my-14 ">
            <section className="w-11/12  mx-auto">
                {/* Main Container */}
                <div className="flex flex-col lg:flex-row items-center justify-between py-12 gap-6 lg:gap-44">
                    {/* Left Content */}
                    <div className="lg:w-full">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                            Discover the range of real <br /> estate{" "}
                            <span className="text-orange-500">services</span> we offer
                        </h2>
                        <div className="mt-10">
                            <img
                                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732468633/Image_14_yfgnzw.png"
                                alt="Professional Real Estate Agent"
                                className=" w-[70%] rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full">
                        {/* Service List */}
                        <div className="relative flex justify-center">
                            <img
                                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732469788/Vector_1_tq2mwl.png"
                                className=""
                                alt="Vector Graphic"
                            />
                        </div>
                        {/* Service 1 */}
                        <div className="flex items-start  space-x-4">
                            <h3 className="text-3xl font-bold text-gray-800">01</h3>
                            <div className='w-[400px] ' >
                                <h4 className="text-lg font-bold text-[#0F0E0E]">Buy a home</h4>
                                <p className="text-sm text-[#2D2D2D] my-2 ">
                                    Find your ideal home effortlessly with our expert guidance &
                                    extensive property listings, ensuring a smooth and satisfying
                                    home-buying experience.
                                </p>
                                <div className='border-t-2 my-3 ' >
                                </div>
                            </div>



                        </div>

                        {/* Service 2 */}
                        <div className="flex items-start space-x-4">
                            <h3 className="text-3xl font-bold text-gray-800">02</h3>
                            <div className='w-[400px] ' >
                                <h4 className="text-lg font-bold text-[#0F0E0E] ">Rent a home</h4>
                                <p className="text-sm text-[#2D2D2D] my-2 ">
                                    Find your perfect rental home with ease. Our service offers personalized options and expert support to help you secure a comfortable and ideal living space.
                                </p>
                                <div className='border-t-2 my-3 ' ></div>
                            </div>
                        </div>
                        {/* service 3 */}
                        <div className="flex items-start space-x-4">
                            <h3 className="text-3xl font-bold text-gray-800">03</h3>
                            <div className='w-[400px] ' >
                                <h4 className="text-lg font-bold text-[#0F0E0E] ">Property management</h4>
                                <p className="text-sm text-[#2D2D2D] my-3 ">
                                    Expert property management to handle maintenance, tenant relations, and financials, ensuring your property runs smoothly and remains profitable.
                                </p>
                                <div className='border-t-2 my-3 ' ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EstateService
