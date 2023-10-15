import React, { useState } from 'react'
import first from '../assets/first.png'
import second from '../assets/second.png'
import third from '../assets/third.png'
import user1 from '../assets/sarthak.png'
import user2 from '../assets/sarah.png'
import user3 from '../assets/ronal.png'
import user4 from '../assets/joseph.png'
import rg1 from '../assets/leisure.png'
import rg2 from '../assets/activism.png'
import rg3 from '../assets/mba.png'
import rg4 from '../assets/philosophy.png'
import {BsFillCaretDownFill} from 'react-icons/bs'
import {HiUserGroup} from 'react-icons/hi'
import {BsShareFill} from 'react-icons/bs'
import {AiOutlineEye} from 'react-icons/ai'
import {CiLocationOn} from 'react-icons/ci'
import {MdModeEditOutline} from 'react-icons/md'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {BsCalendarEvent} from 'react-icons/bs'
import {PiSuitcaseSimpleThin} from 'react-icons/pi'
import {RiLoginBoxLine} from 'react-icons/ri'
import {BiSolidLike} from 'react-icons/bi'

const data = [
    {
        imgUrl: first,
        heading: 'What if famous brands had regular fonts? Meet RegulaBrands!',
        desc: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
        user: 'Sarthak Kamra',
        userImg: user1
    },

    {
        imgUrl: third,
        heading: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
        desc: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
        user: 'Sarah West',
        userImg: user2
    },

    {
        imgUrl: second,
        heading: 'Finance & Investment Elite Social Mixer @Lujiazui',
        user: 'Ronal Jones',
        userImg: user3,
        btnText: 'Visit Website',
        date: 'Fri, 12 Oct, 2018',
        location: 'Ahmedabad, India',
    },

    {
        heading: 'Software Developer',
        btnText: 'Apply on Timesjobs',
        user: 'Joseph Gray',
        userImg: user4,
        location: 'Noida, India',
        company: 'Innovaccer Analytics Private Ltd.'
    }
]

const rGroup = [
    {
        text:'Leisure',
        rgImg: rg1,
        followed: false,
    },
     {
        text: 'Activism',
        rgImg: rg2,
        followed: true,
     },
    
     {
        text: 'MBA',
        rgImg: rg3,
        followed: false,
     },
     {
        text: 'Philosophy',
        rgImg: rg4,
        followed: false,
     }

]

const FeedSection = ({logIn}) => {
    const [joined, setJoined] = useState(false);
  return (
    <div className='pt-5'>
      
        <div className='lg:flex hidden justify-between items-center pb-2 border-b-[1px] '>
            <div className='flex gap-x-3'>
                <div className='font-medium'>All Posts</div>
                <div>Article</div>
                <div>Event</div>
                <div>Education</div>
                <div>Job</div>
            </div>

            <div className='flex gap-x-3'>
                <div className='flex items-center gap-x-1 p-2 bg-[#EDEEF0] rounded-lg'>
                    <p className=' font-medium'>Write a Post</p>
                    <BsFillCaretDownFill/>
                </div>

                {
                    !joined && <div className='flex items-center gap-x-1 p-2 rounded-lg bg-[#2F6CE5] text-[#fff] hover:cursor-pointer' onClick={() =>setJoined(!joined)}>
                                    <HiUserGroup/>
                                    <p className='font-medium'>Join Group</p>
                                </div>
                }

                {
                    joined &&   <div className='flex items-center gap-x-1 p-2 rounded-lg bg-[#fff] text-[#6A6A6B] border-[#989899] border-[1px] hover:cursor-pointer' onClick={()=>setJoined(!joined)}>
                                    <RiLoginBoxLine/>
                                    <p className='font-medium'>Leave Group</p>
                                </div>
                }

            </div>
        </div>

        <div className='flex w-full justify-between pt-8'>
            <div className='flex flex-col gap-y-5 lg:w-[60%] w-full pb-5'>
                {
                    data.map(d => (
                        <div className='border-[1px] rounded-lg'>
                            <img src={d.imgUrl} className='w-full rounded-tl-lg rounded-tr-lg'/>

                            <div className='flex flex-col gap-y-3 p-5'>
                                <h1 className='font-semibold text-2xl'>{d.heading}</h1>
                                {
                                    d.date && d.location && <div className='flex items-center gap-x-10'>
                                        <div className='flex items-center gap-x-2 font-semibold'>
                                            <BsCalendarEvent/>
                                            <p>{d.date}</p>
                                        </div>

                                        <div className='flex items-center gap-x-2 font-semibold'>
                                            <CiLocationOn/>
                                            <p>{d.location}</p>
                                        </div>
                                    </div>
                                }

                                {
                                    d.location && d.company && <div className='flex items-center gap-x-10'>
                                        <div className='flex items-center gap-x-2 font-semibold'>
                                            <PiSuitcaseSimpleThin/>
                                            <p>{d.company}</p>
                                        </div>

                                        <div className='flex items-center gap-x-2 font-semibold'>
                                            <CiLocationOn/>
                                            <p>{d.location}</p>
                                        </div>
                                    </div>
                                }
                                <p className='font-normal text-lg'>{d.desc}</p>
                                {d.btnText && <div className={`${d.btnText === 'Visit Website' ? 'text-[#E56135]' : 'text-[#02B875]'} w-full text-center border-[1px]  rounded-lg p-2 font-semibold text-sm`}>{d.btnText}</div>}
                                <div className='flex justify-between pt-3 items-center'>
                                    <div className='flex items-center gap-x-2'>
                                        <img src={d.userImg} className='w-[48px] h-[48px]'/>
                                        <p className='font-semibold text-lg'>{d.user}</p>
                                    </div>

                                    <div className='flex gap-x-5'>
                                        <div className='flex gap-x-1 items-center text-sm'>
                                            <AiOutlineEye/>
                                            <p className='text-sm font-medium'>1.4k Views</p>
                                        </div>

                                        <div className=' flex items-center justify-center p-2 bg-[#EDEEF0]'>
                                            <BsShareFill/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='lg:flex-col gap-y-5 w-[22%] lg:flex hidden'>
                <div className='flex justify-between items-center pb-2 border-b-2'>
                    <div className='flex gap-x-2 items-center font-normal text-sm'>
                        <CiLocationOn/>
                        <p>Noida, India</p>
                    </div>

                    <div>
                        <MdModeEditOutline/>
                    </div>
                </div>

                <div className='flex items-center gap-x-2'>
                    <AiOutlineInfoCircle size={24}/>
                    <p className='text-xs text-justify'>Your location will help us serve better and extend a personalised experience.</p>
                </div>

                {
                    logIn &&  <div className='flex flex-col gap-y-3'>
                                <div className='flex items-center'>
                                    <BiSolidLike/>
                                    <p>Recommended Groups</p>
                                </div>

                                {
                                    rGroup.map((grp) => (
                                        <div className='flex justify-between items-center pt-5'>
                                            <div className='flex items-center gap-x-3'>
                                                <img src={grp.rgImg}/>
                                                <p className='text-sm font-normal'>{grp.text}</p>
                                            </div>

                                            <div>
                                                {
                                                    !grp.followed && <div className='bg-[#EDEEF0] py-2 px-5 rounded-full' onClick={() => grp.followed = !grp.followed }>Follow</div>
                                                }

                                                {
                                                    grp.followed && <div className='bg-[#000] text-[#fff] py-2 px-5 rounded-full'>Followed</div>
                                                }
                                            </div>
                                        </div>
                                    ))
                                }

                             </div>
                }

                {logIn && <p className='text-[#2F6CE5] text-sm font-normal text-right pt-10'>See More...</p>}
            </div>
        </div>
    </div>
  )
}

export default FeedSection
