import React from 'react'
import Image from '../../assets/images/hero-img.png'
import BottomImage from '../../assets/images/fitness.png'
import Button from '../ui/Button'

const Hero = () => {
    return (
        <>
            <section className='flex items-center justify-between hero mx-[80px]'>
                <div className="w-[719px]">
                    <h1 className='text-[96px] leading-[120%] text-white'>FITNESS AND<span className='bg-[#A4D65E] text-[#063835] font-bold p-2 rounded-lg transform rotate-2 inline-block mb-[16px]'>HEALTH</span>TRAINING</h1>
                    <p className='w-[522px] text-[18px] leading-[150%] font-medium text-[#E5E4E4]'>Join a community of thousands transforming their lives through expert-guided fitness programs, personalized nutrition, and holistic wellness</p>
                    <Button extraStyle={'!w-[183px] !px-[31px] text-white bg-[#FE4F31] border-none mt-[32px] inline-block '} title={"Get Started Now"} />
                </div>
                <img src={Image} alt="image" width={753} height={1268} />
            </section>
        </>
    )
}

export default Hero