import React from 'react'
import BottomImage from '../../assets/images/fitness.png'

const About = () => {
    return (
        <>
            <img src={BottomImage} alt="" width={1532} height={323} />
            <section className='bg-white'>
                <div className="mx-[80px]">
                    <div className='mt-[10px]'><About /></div>
                    <h1 className='text-[80px] leading-[140%] text-[#0C2E68]'>Empower Your Health Journey</h1>
                </div>
            </section>
        </>
    )
}

export default About