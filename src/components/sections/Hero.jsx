import React from 'react'
import Image from '../../assets/images/hero-img.png'

const Hero = () => {
    return (
        <section className='flex items-center justify-between'>
            <div className="w-[719px]">
                <h1 className='text-[96px] leading-[120%] text-white'>FITNESS AND<span className='bg-[#A4D65E] text-[#063835] font-bold p-2 rounded-lg transform rotate-2'>HEALTH</span>TRAINING</h1>
            </div>
            <img src={Image} alt="image" width={753} height={1268} className=''/>
        </section>
    )
}

export default Hero