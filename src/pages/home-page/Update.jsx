import React from 'react';

import blogImg1 from "../../assets/blogs/blog-1.png"
import blogImg2 from "../../assets/blogs/blog-2.png"
import blogImg3 from "../../assets/blogs/blog-3.png"

import arrowIcon from "../../assets/arrow.png"

const Update = () => {
    return (
        <div>
            <section className="bg-white mb-10 py-28" id='blog'>
                <div className="max-w-screen-2xl container mx-auto px-5 sm:px-6 lg:px-8">
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
                                src={blogImg1}
                                alt="blogImg1"
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
                                src={blogImg2}
                                alt="blogImg2"
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
                                src={blogImg3}
                                alt="blogImg2"
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
                            View All Insights <span> <img src={arrowIcon} alt="" /> </span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Update;
