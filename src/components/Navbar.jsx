import React from 'react'
import {BsSearch} from 'react-icons/bs'
import logo from '../assets/whole.png'
import {AiFillCaretDown} from 'react-icons/ai'

const Navbar = ({logIn, setLogIn, signUpPage, setSignUpPage}) => {
  return (
    <div className=''>
        <div className='flex w-11/12 justify-between items-center mx-auto p-2'>
            <div>
                <img src={logo}/>
            </div>

            <div className='px-8 py-3 bg-[#F2F2F2] rounded-full flex items-center text-[#5C5C5C] gap-x-3'>
                <BsSearch/>

                <div>Search for your favorite groups in ATG</div>
            </div>

            <div>
                {
                    !logIn && <div className='flex  items-center hover:cursor-pointer' onClick={() => setSignUpPage(!signUpPage)}>
                        <p className='text-[#2E2E2E] font-bold'>Create account.</p>
                        <p className='text-[#2F6CE5] font-bold'>It's free!</p>
                    </div>
                }

                {
                    logIn && <div className='flex items-center hover:cursor-pointer gap-x-3'>
                        <div className='w-[48px] h-[48px] rounded-full bg-[#fff] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'></div>
                        <div className='font-semibold'>Abhishek</div>
                        <AiFillCaretDown/>
                    </div>
                }
                
            </div>
        </div>
    </div>
  )
}

export default Navbar
