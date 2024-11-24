import React from 'react'

const Banner = () => {
    return (
        <div>

            {/* main div */}
            <div className='flex justify-between items-center max-w-2xl mx-auto ' >
                {/* contect1 */}
                <div>
                    <img className='ml-10' src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732418957/Group_wjstae.png" alt="" />
                </div>
                {/* content2 */}
                <div className=' text-[45px]   ' >
                    <h1 className='text-center font-bold' >Transforming Spaces, Realizing <span className='text-[#ff5b28] ' >Dreams</span> </h1>
                </div>
                {/* contect3 */}
                <div>
                    <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1732419116/Elememnt_nukypq.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner
