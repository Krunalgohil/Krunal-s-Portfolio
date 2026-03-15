import React from 'react'
import { easeInOut, motion } from 'framer-motion'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='home'
            className='min-h-screen items-center flex pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
        >
            <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>

                {/* left side frontend content  */}
                <div className='md:w-1/2 mb-10 md:mb-0'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4 '>
                        Hi I'm <span className='text-yellow-300'>Gohil Krunal</span>
                    </h1>
                    <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter' >Full Stack Developer</h2>
                    <p className='text-lg text-gray-300 mb-8'>I create stunning web experiences with modern technologies and innovative designs</p>
                    <div>
                        <a href="viewWork" className='px-6 py-3 bg-yellow-300 font-medium hover:bg-yellow-400 rounded-lg transition duratioon-300'> View work</a>
                        <a href="contact me" className='border border-yellow-300  rounded-lg px-6 py-3 ml-2 hover:bg-yellow-300 transition duration-300'> Contact me</a>
                    </div>
                </div>
                {/* right -side frontend image side  */}
                <div className='md:w-1/2 flex justify-center'>
                    <div className='relative w-64 h-64 md:w-80  md:h-80'>
                        <div className='absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-black-500 animate-pulse-slow opacity-70'>
                            <motion.img
                                animate={{ y: [0, -20, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                    ease: easeInOut
                                }}
                                src={assets.profileImg}
                                alt='profile'
                                className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover animate-float' />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Hero