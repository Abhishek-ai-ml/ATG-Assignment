import React from 'react'
import bImg from '../assets/Rectangle 2.png'
import bImg2 from '../assets/bannerImg2.png'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {useState} from 'react'

const Banner = () => {
  const [joined, setJoined] = useState(false);
  return (
    <div className='w-full relative'>
      <img src={bImg} className=' lg:flex hidden w-full brightness-50'/>
      <img src={bImg2} className='lg:hidden inline w-full brightness-50'/>
      <div className='absolute lg:left-48 lg:bottom-16 left-8 bottom-5 text-[#FFFFFF]'>
        <p className=' font-bold lg:text-4xl text-base'>Computer Engineering</p>
        <p className='font-normal lg:text-lg text-[12px]'>142,765 Computer Engineers follow this</p>
      </div>

      <div className='lg:hidden absolute top-5 left-5 text-[#fff] font-bold'><AiOutlineArrowLeft/></div>
      <div>
        {
          !joined && <div className='lg:hidden absolute top-5 right-5 py-1 px-3 border-2 rounded-xl text-[#fff] text-[12px] font-medium' onClick={() => setJoined(!joined)}>Join Group</div>
        }
      </div>

      <div>
        {
          joined && <div className='lg:hidden absolute top-5 right-5 py-1 px-3 border-2 rounded-xl text-[#fff] text-[12px] font-medium' onClick={() => setJoined(!joined)}>Leave Group</div>
        }
      </div>
      
    </div>
  )
}

export default Banner
