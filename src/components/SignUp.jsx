import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import {RxCross2} from 'react-icons/rx'
import signUpImg from '../assets/signup.png'

const SignUp = ({signUpPage, setSignUpPage, loginPage, setLoginPage}) => {
  return (
    <div className='relative bg-[#FFFFFF] flex flex-col gap-y-8 lg:w-[736px] h-[513px] w-full rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <div className='text-[#008A45] lg:flex hidden bg-[#EFFFF4] text-center px-8 py-3 text-sm font-medium rounded-tr-xl rounded-tl-xl'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</div>

        <div className='flex w-full pl-6 pr-6 gap-x-5'>
            <div className='lg:w-[50%] w-full flex flex-col gap-y-3'>
                <div className='font-bold text-2xl lg:mt-0 mt-5'>Create Account</div>

                <div className='flex flex-col w-full  border-[1px]'>
                    <div className='w-full flex'>
                        <input type='text' placeholder='First Name' className='w-[50%] border-r-[1px] p-3 bg-[#F7F8FA]'/>
                        <input type='text' placeholder='Last Name' className='w-[50%] p-3 bg-[#F7F8FA]'/>
                    </div>
                    <input type='email' placeholder='Email' className='border-t-[1px] border-b-[1px] p-3 bg-[#F7F8FA]'/>
                    <input type='password' placeholder='Password' className=' border-b-[1px]    p-3 bg-[#F7F8FA]'/>
                    <input type='password' placeholder='Confirm Password' className=' p-3 bg-[#F7F8FA]'/>
                </div>

                <div className='w-full flex items-center justify-between'>
                    <div className='lg:w-full w-[50%] rounded-full bg-[#2F6CE5] font-semibold text-sm text-center text-[#fff] p-2'>Create Account</div>
                    <p className='lg:hidden  underline'>or Sign In</p>
                </div>

                <div className='flex flex-col gap-y-2'>
                    <div className='flex justify-center items-center gap-x-3 p-2 border-[1px] rounded-sm'>
                        <BsFacebook/>
                        <p>Sign up with Facebook</p>
                    </div>

                    <div className='flex justify-center items-center gap-x-3 p-2 border-[1px] rounded-sm'>
                        <FcGoogle/>
                        <p>Sign up with Google</p>
                    </div>
                </div>
            </div>

            <div className='w-[50%] lg:flex lg:flex-col hidden'>
                <div className='text-sm font-semibold text-right'>
                    <p>Already have an account? <span className='text-[#2F6CE5] font-semibold hover:cursor-pointer' onClick={() => {setLoginPage(!loginPage); setSignUpPage(!signUpPage)}}>Sign In</span></p>
                </div>

                <div>
                    <img src={signUpImg}/>
                </div>

                <div className=' font-normal text-xs'>By signing up, you agree to our Terms & conditions, Privacy policy</div>
            </div>
        </div>

        <div className='absolute right-0 -top-10 p-2 rounded-full hover:cursor-pointer bg-gray-100' onClick={() => setSignUpPage(!signUpPage)}>
            <RxCross2/>
        </div>
    </div>
  )
}

export default SignUp
