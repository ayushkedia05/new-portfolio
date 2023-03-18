import React from 'react'
import { Image } from '@mantine/core';
import pic from './me2.png'
import {SiCodeforces,SiLeetcode,SiCodechef} from 'react-icons/si';
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import Link from "react-scroll/modules/components/Link";


export default function Profile() {
  return (
    <div name="Home"    className="  bg-slate-200 " >
        <div >
         
             
        <div className=" lg:flex lg:justify-around max-w-[75%] m-auto column-2 pt-[90px] ">
                <div className="flex flex-col justify-center lg:items-start w-full px-2 py-8 container ">
            <p className="text-2xl font-semibold">HI, I am</p>
            <h1 className="py-3 text-4xl md:text-7xl font-bold underline underline-offset-8 ">
              AYUSH<span className='text-cyan-900'> KEDIA</span>
            </h1>
            <p className="text-1xl mt-4 max-w-2xl">A competitive programmer and full-stack developer with over one year's experience working in startups. Experience in JavaScript, C++, React, Node Js, and MongoDB.</p>
           
            <div className={` flex flex-wrap gap-6 mt-8`}>
            <a href="https://www.linkedin.com/in/ayush-kedia-4a3519200/">
            <AiFillLinkedin size="2rem" />
          </a>
          <a href="https://github.com/ayushkedia05">
            <AiFillGithub size="2rem" />
          </a>
          <a href="https://codeforces.com/profile/ayushkedia0511">
            <SiCodeforces size="2rem" />
          </a>
          <a href="https://leetcode.com/ayushkedia05/">
            <SiLeetcode size="2rem" />
          </a>
          <a href="#">
            <SiCodechef size="2rem" />
          </a>
        </div>

        <Link to="video" smooth={true} duration={500} className="flex pt-5 pb-9 ">
              <button className="bg-[#294c5a] w-[200px] rounded-md font-medium mt-6 mx-auto py-3 text-white ">
                Get Started
              </button>
            </Link>
            
          </div>
    <div>
          <Image
     
        quality={100}
        src={pic}
        alt="Picture of the author"
        // width={100}
        // height={500}
      />
    
          </div>
        </div>
        
        </div>
    </div>
  )
}
