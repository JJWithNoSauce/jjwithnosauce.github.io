"use client"

import Image from "next/image";
import {Navigator,updateExpression} from '/src/app/navigator/page.js';
import { redirect } from 'next/navigation'


export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center font-ibmplex custom-div">
      <div className="grid h-full w-full grid-cols-10 grid-rows-8 gap-10 p-10">

        <div className="transition ease-in-out delay-50 hover:scale-105 bg-[#DBD3D3] hover:bg-[#EC8305] opacity-90 hover:opacity-100 hover:shadow-2xl h-full w-full 
        xl:col-span-2 xl:row-span-8 grids-cols-4 grid-rows-3 p-10 gap-4 rounded-md shadow-md cursor-pointer" 
        onMouseEnter={() => updateExpression("happy","You can go back by clicking that button!")} 
        onMouseLeave={() => updateExpression("idle","You certainly can.")}
        onClick={() => redirect('/portfolio')}>
          <h1 className="text-left text-4xl xl:text-5xl gap-10">Back</h1>
          <h1 className="text-left text-1xl xl:text-3xl gap-10">to the portfolio selection</h1>
        </div>

        <div className="transition ease-in-out delay-50 w-full relative mx-auto h-auto overflow-hidden rounded-lg xl:col-span-8 xl:row-span-8 group shadow-lg hover:shadow-xl cursor-pointer col-span-10 row-span-6"
        onClick={() => window.open('https://github.com/JJWithNoSauce/Salon-db-Webservice', '_blank')}
        onMouseEnter={() => updateExpression("happy","Salon-db is a Web-Service for Salon Management which is capable of stock management , client management , employee management , order management , etc. I worked on the Frontend, I made information from the database appeared on the page using NextJS, MySQL, and Tailwind with daisyUI!")} 
        onMouseLeave={() => updateExpression("idle","")}>
          <img src="/SalonDB_Thumbnail.png" alt="image" class="w-full h-full relative z-0 rounded-lg scale-100 transition-all duration-500 group-hover:scale-125 group-hover:opacity-50"></img>
          <h1 class="transition-all duration-300 absolute inset-0 flex items-center justify-center text-4xl xl:text-5xl text-black z-10 pointer-events-none group-hover:scale-150 opacity-0 group-hover:opacity-100 ">Salon DB</h1>
        </div>
      </div>
    </div>
  );
}
