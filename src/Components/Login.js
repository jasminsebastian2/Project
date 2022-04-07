/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="flex flex-row flex-wrap w-full justify-start max-w-[1200px] gap-x-12 gap-y-6">
            <div className="w-full bg-white p-8 m-4 md:max-w-sm md:mx-auto">
                <span className=" w-full text-3xl  font-bold mb-4">
                    Sign In
                </span>
                <form className="mb-4" >
                    <div className="mb-4 md:w-full">
                        <span className=" w-full text-xl mt-[5px] font-medium mb-4">
                            New user? <button className="text-blue-500 background-transparent font-medium text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                            >
                                Create an account
                            </button>
                        </span>
                        <input
                            className="w-full lg:w-[288px] mt-[30px] border-2 border-black text-black placeholder-black hover:border-black"
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Username or Email"
                            autoComplete="off"
                        />
                    </div>
                    <div className="mb-6 md:w-full">
                        <input
                            className="w-full lg:w-[288px] mt-[30px] border-2 border-black text-black placeholder-black hover:border-black"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            autoComplete="off"
                        />
                    </div>
                    <div className='flex flex-row space-x-5'>
                        <div class=" mb-6 md:w-[36px] h-[35px] border border-black shadow px-1 py-1 rounded">
                            <img
                                src="/img/tick.png"
                                alt="language"
                                className="h-6 opacity-2"
                            />
                        </div>
                        <span class=" align-baseline font-bold text-sm text-black hover:text-blue-800 mt-[10px]" >
                            Keep me signed in
                        </span>
                    </div>


                   
                    <Link to="/home">  <button className="w-full lg:w-[288px] h-[45px] bg-black hover:bg-black text-white text-sm font-semibold px-4 py-2 rounded">Sign In</button></Link>
                       
                    

                    <div className="flex items-center mb-6 md:w-full mt-[20px]  ">
                        <label class="label">
                            <span class="label-text tex-black font-medium lg:ml-[70px]">Or Sign In With</span>
                        </label>
                    </div>

                    <div class="flex flex-row space-x-5">
                    <div class=" mb-6 md:w-[45px]  border border-black shadow px-2 py-2 rounded-full">
                            <img
                                src="/img/path.png"
                                alt="language"
                                className="h-6 opacity-2"
                            />
                        </div>
                        <div class=" mb-6 md:w-[45px]  border border-black shadow px-3 py-2 rounded-full">
                            <img
                                src="/img/face.png"
                                alt="language"
                                className="h-6 opacity-2"
                            />
                        </div>
                        <div class=" mb-6 md:w-[45px]  border border-black shadow px-3 py-2 rounded-full">
                            <img
                                src="/img/instaa.png"
                                alt="language"
                                className="h-6 opacity-2"
                            />
                        </div>
                        <div class=" mb-6 md:w-[45px]  border border-black shadow px-3 py-2 rounded-full">
                            <img
                                src="/img/twit.png"
                                alt="language"
                                className="h-6 opacity-2"
                            />
                        </div>
</div>
                </form>

            </div>
            <div class="hidden md:block mt-[100px]">
            <img
                                src="/img/logo.png"
                                alt="language"
                                className="h-[400px] opacity-2"
                            />
            </div>

        </div>
    )
}

export default Login