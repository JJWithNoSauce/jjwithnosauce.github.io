"use client"

import Image from "next/image";
import {Navigator,updateExpression} from '/src/app/navigator/page.js';
import { redirect } from 'next/navigation'


export default function Home() {
  return (
<div className="min-h-screen w-full flex items-center justify-center font-ibmplex custom-div">
<div className="grid h-full w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-10 grid-rows-8 gap-4 p-4 sm:gap-6 sm:p-6 md:gap-8 md:p-8 lg:gap-10 lg:p-10">

        <div className="transition ease-in-out delay-50 hover:scale-105 bg-[#DBD3D3] hover:bg-[#EC8305] opacity-90 hover:opacity-100 hover:shadow-2xl h-full w-full 
        xl:col-span-2 xl:row-span-8 grids-cols-4 grid-rows-3 p-10 gap-4 rounded-md shadow-md cursor-pointer" 
        onMouseEnter={() => updateExpression("happy","You can go back by clicking that button!")} 
        onMouseLeave={() => updateExpression("idle","You certainly can.")}
        onClick={() => redirect('/portfolio')}>
          <h1 className="text-left text-4xl xl:text-5xl gap-10">Back</h1>
          <h1 className="text-left text-1xl xl:text-3xl gap-10">to the portfolio selection</h1>
        </div>

        <div className="transition ease-in-out delay-50 w-full relative mx-auto h-auto overflow-hidden rounded-lg xl:col-span-4 xl:row-span-4 group shadow-lg hover:shadow-xl cursor-pointer"
        onClick={() => window.open('https://github.com/JJWithNoSauce/Salon-db-Webservice', '_blank')}
        onMouseEnter={() => updateExpression("happy","Salon-db is a Web-Service for Salon Management which is capable of stock management , client management , employee management , order management , etc. I worked on the Frontend, I made information from the database appeared on the page using NextJS, MySQL, and Tailwind with daisyUI!")} 
        onMouseLeave={() => updateExpression("idle","")}>
          <img src="/SalonDB_Thumbnail.png" alt="image" class="w-full h-full relative z-0 rounded-lg scale-100 transition-all duration-500 group-hover:scale-125 group-hover:opacity-50"></img>
          <h1 class="transition-all duration-300 absolute inset-0 flex items-center justify-center text-4xl xl:text-5xl text-black z-10 pointer-events-none group-hover:scale-150 opacity-0 group-hover:opacity-100 ">Salon DB</h1>
        </div>

        <div className="transition ease-in-out delay-50 w-full relative mx-auto h-auto overflow-hidden rounded-lg xl:col-span-4 xl:row-span-4 group shadow-lg hover:shadow-xl cursor-pointer"
        onClick={() => window.open('https://github.com/JJWithNoSauce/jjwithnosauce.github.io', '_blank')}
        onMouseEnter={() => updateExpression("happy","You are currently viewing it right now! This project was developed for the sole purpose of providing information about me, I developed this using NextJS and Tailwind. I utilized bento UI design and limit scrolling, this compact version of the portfolio reduces overinforming the user which is really nice! It even has the little me to guide and explain stuff to the user, isn't that cute? I'm currently working on a new design in which will prioritize more interactivity than ever! and the version that you are seeing now will soon be accessible through the compact version of the website!")} 
        onMouseLeave={() => updateExpression("idle","")}>
          <img src="/JJgithubioThumbnail.png" alt="image" class="w-full h-full relative z-0 rounded-lg scale-100 transition-all duration-500 group-hover:scale-125 group-hover:opacity-50"></img>
          <h1 class="transition-all duration-300 absolute inset-0 flex items-center justify-center text-4xl xl:text-5xl text-black z-10 pointer-events-none group-hover:scale-100 scale-75 opacity-0 group-hover:opacity-100 ">JJ's Compact Portfolio</h1>
        </div>

        <div className="transition ease-in-out delay-50 w-full relative mx-auto h-auto overflow-hidden rounded-lg xl:col-span-4 xl:row-span-4 group shadow-lg hover:shadow-xl cursor-pointer"
        onClick={() => window.open('https://github.com/JJWithNoSauce/StudentCheckInSystem', '_blank')}
        onMouseEnter={() => updateExpression("happy","StudentCheckInSystem is a webservice which has the ability to check student attendant and manage classrooms, powered by Spring Boot and Thymeleaf. I worked on the Frontend and the UI!")} 
        onMouseLeave={() => updateExpression("idle","")}>
          <img src="/StudentCheckInThumbnail.png" alt="image" class="w-full h-full relative z-0 rounded-lg scale-100 transition-all duration-500 group-hover:scale-125 group-hover:opacity-50"></img>
          <h1 class="transition-all duration-300 absolute inset-0 flex items-center justify-center text-4xl xl:text-5xl text-black z-10 pointer-events-none group-hover:scale-100 scale-75 opacity-0 group-hover:opacity-100 ">StudentCheckInSystem</h1>
        </div>
      </div>
    </div>
  );
}
