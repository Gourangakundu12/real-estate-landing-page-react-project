import React from 'react';

const Update = () => {
    return (
        <div>
            <section className="bg-white mb-10 ">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                            Our newest updates and <span className="text-orange-500">insights</span>
                        </h2>
                        <div className="max-w-xl mx-auto">
                            <p className="text-gray-600 mt-4">
                                Stay up-to-date with our latest news and blog posts, offering
                                valuable insights and updates on industry trends and expert tips.
                            </p>
                        </div>
                    </div>

                    {/* Cards Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="border rounded-lg relative overflow-hidden shadow-lg">
                            <img
                                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732463491/Image_3_v7aokj.png"
                                alt="First-time home buyers"
                                className="w-full h-48 md:h-52 object-cover"
                            />
                            <div className="p-4">
                                <p className="text-sm text-[#2D2D2D] mb-2">Dec 20, 2024</p>
                                <h3 className="text-[#FF5B28] text-[23px] font-semibold mb-3">
                                    Essential tips for first-time home buyers: your complete guide
                                </h3>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="border lg:-mb-14 lg:mt-14 rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732464485/Image_4_rkxmla.png"
                                alt="Rental market tips"
                                className="w-full h-48 md:h-52 object-cover"
                            />
                            <div className="p-4">
                                <p className="text-sm text-gray-700 mb-2">Dec 25, 2024</p>
                                <h3 className="text-lg text-[23px]   text-gray-800 font-semibold mb-3">
                                    Navigating the rental market: tips for renters and landlords
                                </h3>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="border rounded-lg relative overflow-hidden shadow-lg">
                            <img
                                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732464522/Image_5_isiwmx.png"
                                alt="Choosing neighborhoods"
                                className="w-full h-48 md:h-52 object-cover"
                            />
                            <div className="p-4">
                                <p className="text-sm text-gray-700 mb-2">Dec 29, 2024</p>
                                <h3 className="text-lg text-[23px]   text-gray-800 font-semibold mb-3">
                                    Choosing the best neighborhood for your family: expert guide
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Button Section */}
                    <div className="text-center  mt-9 lg:mt-20">
                        <button
                            className="px-6 py-3 border mx-auto text-[#0F0E0E] border-orange-600  flex items-center gap-2 text-sm font-medium rounded-md  transition-transform transform hover:scale-105"
                        >
                            View All Insights <span> <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732385450/Vector_qbkpq8.png" alt="" /> </span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Update;
