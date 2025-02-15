"use client"

import Image from "next/image";
import {Navigator,updateExpression} from './navigator/page';
import { redirect } from 'next/navigation'


export default function Home() {
  return (
<div className="h-screen w-full flex items-center justify-center font-ibmplex custom-div">
      <div className="grid h-full w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-10 grid-rows-8 gap-4 p-4 sm:gap-6 sm:p-6 md:gap-8 md:p-8 lg:gap-10 lg:p-10">
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 row-span-5 xl:row-span-8 bg-[#DBD3D3] h-full w-full grids-cols-4 grid-rows-3 p-4 sm:p-6 md:p-8 lg:p-10 gap-2 sm:gap-3 md:gap-4 lg:gap-5 rounded-md shadow-md"
        onMouseEnter={() => updateExpression("happy","Nice to meet you recruiter! Feel free to explore my website, it's a bit scuffed at the moment but I'll do my best to make this website better in the future!")} 
        onMouseLeave={() => updateExpression("idle","")} onClick={() => redirect('/portfolio')}>
          <div>
            <h1 className="text-left text-2xl sm:text-3xl md:text-4xl xl:text-5xl gap-4 sm:gap-6 md:gap-8 lg:gap-10">Hiya! I'm JJWithNoSauce!</h1>
            <h2 className="text-left text-xl sm:text-2xl md:text-3xl xl:text-4xl gap-4 sm:gap-6 md:gap-8 lg:gap-10 py-1 sm:py-2 md:py-3">A content creator who strives to make unique experiences!</h2>
            {/* <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              <span class="sr-only">Icon description</span>
            </button> */}
          </div>
          
          
          
          
          
          
        </div>

        <div className="hover:-translate-y-1 sm:hover:-translate-y-2 md:hover:-translate-y-3 transition ease-in-out delay-50 hover:scale-105 bg-[#DBD3D3] hover:bg-[#EC8305] opacity-90 hover:opacity-100 hover:shadow-2xl h-full w-full 
        col-span-1 sm:col-span-2 md:col-span-3 xl:col-span-3 row-span-4 grids-cols-4 grid-rows-3 p-4 sm:p-6 md:p-8 lg:p-10 gap-2 sm:gap-3 md:gap-4 lg:gap-5 rounded-md shadow-md cursor-pointer" 
        onMouseEnter={() => updateExpression("happy","You can see all of my really cool work in there.")} 
        onMouseLeave={() => updateExpression("idle","")} onClick={() => redirect('/portfolio')}>
          <h1 className="text-left text-2xl sm:text-3xl md:text-4xl xl:text-5xl gap-4 sm:gap-6 md:gap-8 lg:gap-10">Portfolio</h1>
        </div>
        
        
        <div className="col-span-1 sm:col-span-2 md:col-span-2 xl:col-span-2 row-span-4 hover:-translate-y-1 sm:hover:-translate-y-2 md:hover:-translate-y-3 transition ease-in-out delay-50 hover:scale-105 bg-[#DBD3D3] hover:bg-[#EC8305] opacity-90 hover:opacity-100 hover:shadow-2xl
         h-full w-full grids-cols-4 grid-rows-3 p-4 sm:p-6 md:p-8 lg:p-10 gap-2 sm:gap-3 md:gap-4 lg:gap-5 rounded-md shadow-md cursor-pointer"
         onClick={() => redirect('/skill')}
         onMouseEnter={() => updateExpression("happy","Wanna explore more about what I can do?")} 
         onMouseLeave={() => updateExpression("idle","")}>
          <h1 className="text-left text-2xl sm:text-3xl md:text-4xl xl:text-5xl">Skills and Experience</h1>
        </div>
        
        {/* <div className="xl:col-span-2 xl:row-span-2 hover:-translate-y-3 transition ease-in-out delay-50 hover:scale-105 bg-[#DBD3D3] hover:bg-[#EC8305] opacity-90 hover:opacity-100 hover:shadow-2xl
         h-full w-full grids-cols-4 grid-rows-3 p-10 gap-4 rounded-md shadow-md cursor-pointer">
          <h1 className="text-left text-2xl xl:text-3xl">Tools</h1>
          </div> */}
        
        <div className="col-span-1 sm:col-span-2 md:col-span-3 xl:col-span-5 row-span-2 bg-[#DBD3D3] opacity-90 hover:opacity-100 h-full w-full grids-cols-4 grid-rows-3 p-4 sm:p-6 md:p-8 lg:p-10 gap-2 sm:gap-3 md:gap-4 lg:gap-5 rounded-md shadow-md">
          <h1 className="text-right text-xl sm:text-2xl md:text-3xl xl:text-5xl gap-4 sm:gap-6 md:gap-8 lg:gap-10">Services and Commission</h1>
          <h1 className="text-right text-sm sm:text-base md:text-lg xl:text-2xl gap-4 sm:gap-6 md:gap-8 lg:gap-10">(coming soon)</h1>
        </div>
        
        <div className="col-span-1 sm:col-span-2 md:col-span-2 xl:col-span-2 row-span-2 bg-[#DBD3D3] opacity-90 hover:opacity-100 h-full w-full grids-cols-4 grid-rows-3 p-4 sm:p-6 md:p-8 lg:p-10 gap-2 sm:gap-3 md:gap-4 lg:gap-5 rounded-md shadow-md">
          <h1 className="text-right text-xl sm:text-2xl md:text-2xl xl:text-3xl gap-4 sm:gap-6 md:gap-8 lg:gap-10">Links</h1>
          <h1 className="text-right text-sm sm:text-base md:text-lg xl:text-2xl gap-4 sm:gap-6 md:gap-8 lg:gap-10">(coming soon)</h1>
        </div>
        
        <div className="col-span-1 sm:col-span-2 md:col-span-3 xl:col-span-3 row-span-2 bg-[#DBD3D3] opacity-90 hover:opacity-100 h-full w-full grids-cols-4 grid-rows-3 p-4 sm:p-6 md:p-8 lg:p-10 gap-2 sm:gap-3 md:gap-4 lg:gap-5 rounded-md shadow-md">
          <h1 className="text-right text-xl sm:text-2xl md:text-2xl xl:text-3xl gap-4 sm:gap-6 md:gap-8 lg:gap-10">Contacts</h1>
          <h1 className="text-right text-sm sm:text-base md:text-lg xl:text-2xl gap-4 sm:gap-6 md:gap-8 lg:gap-10">(coming soon)</h1>
        </div>
      </div>
    </div>
  );
}
