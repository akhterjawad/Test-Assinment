import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import MobileImg from '../assets/mobile.png'
import mobile from '../assets/mobilepng.png'
import Logo from '../assets/Vector.png'
import Headphone from '../assets/headphone.png'
import Watch from '../assets/watch.png'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import MenuPopupState from '../components/Menu';



const Hero = () => {
    return (
        <section className='bg-background bg-[#F2FBFF] '>
            <div className='container mx-auto p-4'>
                <div className='flex sm:justify-center justify-between mt-6'>
                    <div className='sm:hidden flex'>
                        <img width={80} src={Logo} alt="" />
                    </div>
                    <div>
                        <ul className='gap-10 text-[20px] font-medium items-center hidden sm:flex'>
                            <li className='hover:cursor-pointer'>Home</li>
                            <li className='hover:cursor-pointer'>About Us</li>
                            <li className='hover:cursor-pointer'>Wholesale</li>
                            <li className='hover:cursor-pointer'><img width={80} src={Logo} alt="" /></li>
                            <li className='hover:cursor-pointer'>Services</li>
                            <li className='hover:cursor-pointer'>News</li>
                            <li className='hover:cursor-pointer'>How it Works</li>
                        </ul>
                    </div>
                    <div className='sm:hidden flex'>
                        <MenuPopupState />
                    </div>

                </div>
                <div className='flex justify-between mt-[140px] items-center flex-wrap'>
                    <div className='flex flex-col gap-10 slide-top'>
                        <h1 className='sm:text-[65px] text-[32px] font-bold'>Largest <span className='text-[#388FCB]'>Wholesalers</span> <br /> of <span className='text-[#388FCB]'>Mobiles Phones</span></h1>
                        <p className='text-[18px]'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias <br /> maiores harum eligendi, quibusdam impedit rerum?
                        </p>
                        <h1 className='text-[20px] flex items-center gap-2 text-[#388FCB]'>Learn More <FaArrowRight className='mt-1 hover:text-[25px] hover:cursor-pointer' /></h1>
                        <div className='flex gap-4 flex-wrap'>
                            <input className='h-[48px] bg-transparent w-[300px] rounded-full p-2 border border-blue-400 outline-none' type="text" placeholder='Email' />
                            <div className='flex gap-2'>
                                <button className='w-[120px] h-[48px] rounded-full bg-green-500 text-white hover:bg-white hover:boder hover:border-green-600 border hover:text-green-500 flex gap-2 justify-center items-center text-[14px]'>Subscribe <FaArrowRight /></button>
                                <button className='w-[120px] h-[48px] rounded-full bg-[#388FCB] text-white hover:bg-white hover:boder hover:border-[#388FCB] border hover:text-[#388FCB] flex gap-2 justify-center items-center text-[14px]'><FaArrowDown /> Stock list</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='slide-top' width={500} src={MobileImg} alt="" />
                    </div>
                </div>
                <div className='flex items-center gap-8 flex-wrap sm:justify-start justify-center'>
                    <div className='flex gap-3 flex-wrap mt-5'>
                        <div>
                            <div className=' w-[40px] h-[40px] rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex justify-center items-center text-white'>
                                <FaInstagramSquare />
                            </div>
                        </div>
                        <div>
                            <div className=' w-[40px] h-[40px] rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex justify-center items-center text-white'>
                                <FaFacebook />
                            </div>
                        </div>
                        <div>
                            <div className=' w-[40px] h-[40px] rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex justify-center items-center text-white'>
                                <FaLinkedin />
                            </div>
                        </div>
                        <div>
                            <div className=' w-[40px] h-[40px] rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex justify-center items-center text-white'>
                                <FaSquareXTwitter />
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FaUserFriends className='text-[30px] text-green-500' />
                        <p className='text-[18px] font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>400k People Registor</p>
                    </div>
                </div>
                <div className='mt-24 dotsBg'>
                    <marquee behavior="" direction="right">
                        <div className='flex gap-2'>
                            <img className='w-[50px] h-[60px]' src={Headphone} alt="" />
                            <img className='w-[50px] h-[60px]' src={Watch} alt="" />
                            <img className='w-[50px] h-[60px]' src={mobile} alt="" />
                            <img className='w-[50px] h-[60px]' src={Headphone} alt="" />
                            <img className='w-[50px] h-[60px]' src={Watch} alt="" />
                            <img className='w-[50px] h-[60px]' src={mobile} alt="" />
                            <img className='w-[50px] h-[60px]' src={Headphone} alt="" />
                            <img className='w-[50px] h-[60px]' src={Watch} alt="" />
                            <img className='w-[50px] h-[60px]' src={mobile} alt="" />
                            <img className='w-[50px] h-[60px]' src={Headphone} alt="" />
                            <img className='w-[50px] h-[60px]' src={Watch} alt="" />
                            <img className='w-[50px] h-[60px]' src={mobile} alt="" />
                            <img className='w-[50px] h-[60px]' src={Headphone} alt="" />
                            <img className='w-[50px] h-[60px]' src={Watch} alt="" />
                            <img className='w-[50px] h-[60px]' src={mobile} alt="" />
                            <img className='w-[50px] h-[60px]' src={Headphone} alt="" />
                            <img className='w-[50px] h-[60px]' src={Watch} alt="" />
                            <img className='w-[50px] h-[60px]' src={mobile} alt="" />
                            <img className='w-[50px] h-[60px]' src={Headphone} alt="" />
                            <img className='w-[50px] h-[60px]' src={Watch} alt="" />
                            <img className='w-[50px] h-[60px]' src={mobile} alt="" />
                        </div>
                    </marquee>
                </div>
            </div>
        </section>
    )
}

export default Hero
