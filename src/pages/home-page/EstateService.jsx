import React from 'react';

const EstateService = () => {
    return (
        <div className="bg-[#FDF3EE] my-5 lg:my-14">
            <section className="w-11/12 mx-auto">
                {/* Main Container */}
                <div className="flex flex-col lg:flex-row items-center justify-between py-3 lg:py-12 gap-10 lg:gap-20">
                    {/* Left Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className=" lg:text-4xl font-bold text-gray-800">
                            Discover the range of real <br /> estate{" "}
                            <span className="text-orange-500">services</span> we offer
                        </h2>
                        <div className=" mt-4 lg:mt-10 flex justify-center lg:justify-start">
                            <img
                                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732468633/Image_14_yfgnzw.png"
                                alt="Professional Real Estate Agent"
                                className="w-[80%] md:w-[70%] lg:w-[65%] h-[65vh] rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:w-1/2">
                        {/* Vector Image */}
                        <div className="relative flex justify-center mb-3 lg:mb-10">
                            <img
                                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732469788/Vector_1_tq2mwl.png"
                                className="  "
                                alt="Vector Graphic"
                            />
                        </div>

                        {/* Service 1 */}
                        <div className="flex items-start space-x-4 lg:mb-6">
                            <h3 className="lg:text-3xl  font-bold text-gray-800">01</h3>
                            <div className="w-full md:w-[400px]">
                                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">Buy a home</h4>
                                <p className="text-sm text-[#2D2D2D] lg:my-2">
                                    Find your ideal home effortlessly with our expert guidance &
                                    extensive property listings, ensuring a smooth and satisfying
                                    home-buying experience.
                                </p>
                                <div className="border-t-2 lg:my-3"></div>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="flex items-start space-x-4 lg:mb-6">
                            <h3 className="lg:text-3xl font-bold text-gray-800">02</h3>
                            <div className="w-full md:w-[400px]">
                                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">Rent a home</h4>
                                <p className="text-sm text-[#2D2D2D] lg:my-2">
                                    Find your perfect rental home with ease. Our service offers
                                    personalized options and expert support to help you secure a
                                    comfortable and ideal living space.
                                </p>
                                <div className="border-t-2 my-1 lg:my-3"></div>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="flex items-start space-x-4">
                            <h3 className="lg:text-3xl font-bold text-gray-800">03</h3>
                            <div className="w-full md:w-[400px]">
                                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">
                                    Property management
                                </h4>
                                <p className="text-sm text-[#2D2D2D] lg:my-3">
                                    Expert property management to handle maintenance, tenant
                                    relations, and financials, ensuring your property runs smoothly
                                    and remains profitable.
                                </p>
                                <div className="border-t-2 my-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EstateService;
