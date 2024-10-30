import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhone } from "react-icons/md";



const Navbar = () => {
  return (
    <section className='bg-[#388FCB] w-[100%]'>
      <div className='container mx-auto p-4 text-white'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-10'>
                    <h1 className='flex items-center gap-2'><HiOutlineMail  className='text-[22px]'/> info@abc.com</h1>
                    <h1 className='flex items-center gap-2'><MdOutlinePhone  className='text-[22px]'/> +123 456 789</h1>
                </div>
                <div>
                    <h1>Privacy Policy | Terms and Condition</h1>
                </div>
            </div>
      </div>
    </section>
  )
}

export default Navbar
