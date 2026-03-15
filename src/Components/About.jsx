import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets.js'
import { FaIcons } from 'react-icons/fa'

const About = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                id='aboutme'
                className='py-20 bg-dark-200'
            >
                <div className='container mx-0 px-6 '>
                    <h2 className='  font-bold text-3xl mb-4 text-center'>About <span className='text-yellow-300'>Me</span></h2>
                    <p className='text-gray-300 text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passion</p>
                </div>
                {/* about my section in details  */}
                <div className='flex flex-col md:flex-row items-center gap-12'>
                    {/* image section */}
                    <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.2 }}
                            className='w-full object-cover h-full'
                            src={assets.profileImg} alt="profileimg"
                        />
                    </div>

                    {/* text content  */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='md:w-1/2'
                    >

                        <div className='rounded-2xl p-8'>
                            <h3 className='text-2xl font-semibold mb-12'>My <span className='text-yellow-300'>Journey</span> </h3>
                            <p className='text-gray-300 mb-6 mt-4'>I am a passionate Full-Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). I enjoy building responsive and user-friendly web applications and continuously improving my skills in modern web technologies. I love solving problems through code and creating efficient digital solutions.</p>
                            <p className='text-gray-300 mb-6'>I have worked on several web development projects including a Virtual Assistant and an E-Commerce website, where I implemented both frontend and backend functionalities. Through these projects, I gained practical experience in developing dynamic applications and managing databases.</p>
                            

                            {/* cards */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                                {aboutInfo.map((data,index)=>(
                                    <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                                        <div className='text-yellow-300 text-4xl mb-4'>
                                            <data.icon/>
                                            </div>
                                        <h3 className='text-white text-xl font-semibold'>{data.title}</h3>
                                        <p className='text-gray-300'>{data.description}</p>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}

export default About