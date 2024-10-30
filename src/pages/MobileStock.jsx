import React from 'react'
import Stock from '../assets/stock.png'
import Card from '../components/Card'

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const MobileStock = () => {
    return (
        <section className='container mx-auto p-4'>
            <div>
                <div className='flex flex-col items-center mt-10'>
                    <img className='sm:w-[400px] w-[200px]' src={Stock} alt="" />
                    <p className='text-center sm:text-[20px] sm:text-[18] font-semibold mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia totam quo quisquam mollitia <br />      exercitationem dolor? Iste at atque enim vitae.</p>
                </div>
                <div className='mt-16 flex sm:justify-between justify-center gap-2 flex-wrap'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div>
                    <div className='flex gap-3 items-center justify-center mt-10'>
                        <button className='border-2 border-green-600 rounded-full w-[30px] h-[30px] flex justify-center items-center text-green-500'>
                            <FaAngleLeft />
                        </button>
                        <div className='bg-green-500 rounded-full w-[60px] h-[15px]'>
                        </div>
                        <div className='bg-gray-300 rounded-full w-[15px] h-[15px]'>
                        </div>
                        <div className='bg-gray-300 rounded-full w-[15px] h-[15px]'>
                        </div>
                        <button className='border-2 border-green-600 rounded-full w-[30px] h-[30px] flex justify-center items-center text-green-500'>
                            <FaAngleRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MobileStock
