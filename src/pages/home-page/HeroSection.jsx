import React from 'react';

const HeroSection = () => {
    return (
        <div className='w-11/12 mx-auto relative z-10 ' >
            <div className="bg-[#fef6f3]  mx-auto p-8 flex flex-col md:flex-row items-center justify-between">
                {/* Text Section */}
                <div className="">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Find your <span className="text-orange-500">dream home</span> today!
                    </h1>
                    <p className="text-gray-700 mb-6">
                        Discover the perfect property tailored to your needs and preferences with our expert guidance.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center px-6 py-3 bg-white border border-black text-black font-medium rounded hover:bg-gray-100 transition"
                    >
                        Contact Us
                        <span className="ml-2 text-lg">➔</span>
                    </a>
                </div>

                {/* Illustration Section */}
                <div className="mt-8 md:mt-0">
                    <img
                        src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732462430/Vectors_2x_xietrz.png" // Replace with the actual illustration image link
                        alt="City Illustration"
                        className="w-full "
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
