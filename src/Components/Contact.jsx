import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaFileContract, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaMobile, FaPhone } from 'react-icons/fa'
import { FaEarthAfrica } from 'react-icons/fa6'
const Contact = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.2 }}
                id='contact'
                className='py-20 bg-dark-200'
            >
                <div className=' container mx-auto px-6 text-center'>
                    <h2 className='text-3xl font-bold mb-4'>Get In <span className='text-yellow-300'>Touch</span></h2>
                    <p className='text-gray-400 max-w-2xl mx-auto '>Have an idea or opportunity? Let’s connect and build something great together.</p>

                    <div className='grid grid-cols-1 lg:grid-cols-2 text-start gap-12 max-w-5xl mx-auto '>

                        {/* contact form start */}
                        <div>
                            <form className='space-y-6' action="">
                                <div>
                                    <label htmlFor="name" className='block text-start text-gray-300 mb-2 mt-6'>Your Name <span className='text-red-600'>*</span> </label>
                                    <input type="text" className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />


                                    <label htmlFor="name" className='block text-start text-gray-300 mb-2 mt-6'>Email Address <span className='text-red-600'>*</span>  </label>
                                    <input type="text" className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />

                                    <label htmlFor="name" className='block text-start text-gray-300 mb-2 mt-6'>Message <span className='text-red-600'>*</span>  </label>
                                    <textarea type="text" className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />

                                    <button className='mt-4 w-full  bg-yellow-300 text-lg px-8 py-2 rounded-lg hover:bg-yellow-500 cursor-pointer transition duration-300'>Send</button>
                                </div>
                            </form>
                        </div>

                        {/* contact information start  */}

                        <div className='space-y-8 mt-8 ml-12'>
                            <div className='flex items-center'>
                                <div className='text-yellow-300 text-2xl mr-4'>
                                    <FaMapMarkerAlt />
                                </div>
                                <div >
                                    <h3 className='font-semibold  text-lg '> Location</h3>
                                    <p className='text-gray-400 font-sm'>Ahmedabad , Gujarat</p>
                                </div>
                            </div>


                            <div className='flex items-center'>
                                <div className='text-yellow-300 text-2xl mr-4'>
                                    <FaEnvelope />
                                </div>
                                <div >
                                    <h3 className='font-semibold  text-lg '> Email </h3>
                                    <p className='text-gray-400 font-sm'>kunalgohil576@gmail.com</p>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <div className='text-yellow-300 text-2xl mr-4'>
                                    <FaPhone />
                                </div>
                                <div >
                                    <h3 className='font-semibold  text-lg '>Phone</h3>
                                    <p className='text-gray-400 font-sm'>+91 6352841914</p>
                                </div>
                            </div>


                            <div className='pt-4'>
                                
                                    <h3 className='font-semibold  text-lg '>Follow Me</h3>
                                <div className='flex space-x-4'>
                                    <a href="" className='p-3 bg-dark-400 rounded-full mt-4 hover:bg-black text-xl text-white transition duration-300'><FaGithub/></a>


                                    <a href="https://www.linkedin.com/in/gohil-krunal-37070a289/" className='p-3 bg-dark-400 rounded-full mt-4 hover:bg-white hover:text-blue text-xl text-blue transition duration-300'><FaLinkedin/></a>


                                    <a href="https://www.instagram.com/gohil_krunal_000/" className='p-3 bg-dark-400 rounded-full mt-4 hover:bg-gradient-to-r hover:text-white hover:from-pink-600 hover:to-red-600 text-xl text-red-400 transition duration-300'><FaInstagram/></a>


                                    <a href="" className='p-3 bg-dark-400 rounded-full mt-4 hover:bg-black text-xl text-white transition duration-300'><FaEarthAfrica/></a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Contact