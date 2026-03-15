import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {
    const [ShowMenu, SetShowMenu] = useState(false)
    return (
        <>
            <nav className='fixed w-full z-50 bg-dark-100 backdrop-blur-3xl py-2 px-8 shadow-2xl'>
                <div className='container  mx-auto flex justify-between items-center'>
                    <div>
                        <a href="#" className='text-3xl font-bold text-white'>
                            Gohil
                            <span className='text-yellow-300'>Krunal</span>
                            <div className='w-4 h-4 bg-yellow-300 rounded-full'></div>
                        </a>
                    </div>
                    <div className='hidden md:flex space-x-10 '>
                        <a href="#home" className='relative text-white/80 transition duration-300 hover:text-yellow-300 group'>
                            <span>Home</span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full'></span>
                        </a>
                        <a href="#aboutme" className='relative text-white/80 transition duration-300 hover:text-yellow-300 group'>
                            <span>About Me </span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full'></span>
                        </a>
                        <a href="#skills" className='relative text-white/80 transition duration-300 hover:text-yellow-300 group'>
                            <span>Skills</span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full'></span>
                        </a>
                        <a href="#projects" className='relative text-white/80 transition duration-300 hover:text-yellow-300 group'>
                            <span>Projects</span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full'></span>
                        </a>
                        {/* <a href="#experience" className='relative text-white/80 transition duration-300 hover:text-yellow-300 group'>
                            <span>Experience</span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full'></span>
                        </a> */}
                        <a href="#contact" className='relative text-white/80 transition duration-300 hover:text-yellow-300 group'>
                            <span>Contact Me</span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full'></span>
                        </a>
                    </div>

                    {/* Mobile menus */}
                    
                    <div className='md:hidden'>
                        {
                            ShowMenu ? <FaXmark onClick={() => SetShowMenu(!ShowMenu)} className='text-2xl cursor-pointer' />
                                : <FaBars onClick={() => SetShowMenu(!ShowMenu)} className='text-2xl cursor-pointer' />
                        }
                    </div>
                </div>

                {/* Mobile menus */}

                {
                    ShowMenu && (
                        <div className='md-hidden mt-2 bg-dark-300  h-screen p-2 rounded-lg flex flex-col space-y-4 justify-center text-center'>
                            <a onClick={() => SetShowMenu(!ShowMenu)} href="#home" className='relative text-white/80 transition duration-300 hover:text-yellow-300 group'>
                            <span>Home</span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 '></span>
                        </a>
                        <a onClick={() => SetShowMenu(!ShowMenu)} href="# about me" className='relative text-white/80 transition duration-300 hover:text-yellow-300 group'>
                            <span>About Me </span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 '></span>
                        </a>
                        <a onClick={() => SetShowMenu(!ShowMenu)} href="#skills" className='relative text-white/80 transition duration-300 hover:text-yellow-300 group'>
                            <span>Skills</span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 '></span>
                        </a>
                        <a onClick={() => SetShowMenu(!ShowMenu)} href="#projects" className='relative text-white/80 transition duration-300 hover:text-yellow-300 group'>
                            <span>Projects</span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 '></span>
                        </a>
                        <a onClick={() => SetShowMenu(!ShowMenu)} href="#experience" className='relative text-white/80 transition duration-300 hover:text-yellow-300 group'>
                           <span>Experience</span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 '></span>
                        </a>
                        <a onClick={() => SetShowMenu(!ShowMenu)} href="#Ccontact" className='relative text-white/80 transition duration-300 hover:text-yellow-300 group'>
                            <span>Contact</span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 '></span>
                        </a>
                        </div>
                    )
                }

            </nav>
        </>
    )
}

export default Navbar