import React from 'react';
import Stock from '../assets/stock.png';
import Card from '../components/Card';

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const MobileStock = () => {
    return (
        <React.Fragment>
            <section className='container mx-auto p-4'>
                <div>
                    <div className='flex flex-col items-center mt-10'>
                        <img src={Stock} alt="" className='w-[200px] sm:w-[400px]' />
                        <p className='mt-5 text-center font-semibold sm:text-[20px] sm:text-[18]'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia totam quo quisquam mollitia <br />
                            exercitationem dolor? Iste at atque enim vitae.
                        </p>
                    </div>
                    <div className='flex gap-2 mt-16 justify-center sm:justify-between flex-wrap'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div>
                        <div className='flex items-center gap-3 justify-center mt-10'>
                            <button className='border-2 border-green-600 text-green-500 w-[30px] h-[30px] rounded-full flex justify-center items-center'>
                                <FaAngleLeft />
                            </button>
                            <div className='bg-green-500 w-[60px] h-[15px] rounded-full'></div>
                            <div className='bg-gray-300 w-[15px] h-[15px] rounded-full'></div>
                            <div className='bg-gray-300 w-[15px] h-[15px] rounded-full'></div>
                            <button className='border-2 border-green-600 text-green-500 w-[30px] h-[30px] rounded-full flex justify-center items-center'>
                                <FaAngleRight />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default MobileStock;
