import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhone } from "react-icons/md";

const Navbar = () => {
  return (
    <React.Fragment>
      <section className='w-[100%] bg-[#388FCB]'>
        <div className='text-white container mx-auto p-4'>
          <div className='items-center flex justify-between'>
            <div className='flex gap-10'>
              <h1 className='flex items-center gap-2'>
                <HiOutlineMail className='text-[22px]' />
                info@abc.com
              </h1>
              <h1 className='flex items-center gap-2'>
                <MdOutlinePhone className='text-[22px]' />
                +123 456 789
              </h1>
            </div>
            <div>
              <h1>Privacy Policy | Terms and Condition</h1>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Navbar
