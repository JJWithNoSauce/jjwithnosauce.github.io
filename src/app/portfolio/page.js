"use client"

import Image from "next/image";
import {Navigator,updateExpression} from '/src/app/navigator/page.js';
import { redirect } from 'next/navigation'


export default function Home() {
  return (
<div className="h-screen w-full flex items-center justify-center font-ibmplex custom-div px-4 sm:px-6 lg:px-8">
      <div className="grid h-full w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-10 grid-rows-8 gap-4 sm:gap-6 lg:gap-10 p-4 sm:p-6 lg:p-10">

        <div className="transition ease-in-out delay-50 hover:scale-105 bg-[#DBD3D3] hover:bg-[#EC8305] opacity-90 hover:opacity-100 hover:shadow-2xl h-full w-full 
        col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-2 xl:row-span-8 grids-cols-4 grid-rows-3 p-4 sm:p-6 lg:p-10 gap-4 rounded-md shadow-md cursor-pointer" 
        onMouseEnter={() => updateExpression("happy","You can go back by using that button!")} 
        onMouseLeave={() => updateExpression("idle","")}
        onClick={() => redirect('/')}>
          <h1 className="text-left text-2xl sm:text-3xl md:text-4xl xl:text-5xl gap-10">Back</h1>
          <h1 className="text-left text-base sm:text-lg md:text-xl xl:text-3xl gap-10">to the main page</h1>
        </div>

        <div className="hover:-translate-y-3 transition ease-in-out delay-50 hover:scale-105 bg-[#DBD3D3] hover:bg-[#EC8305] opacity-90 hover:opacity-100 hover:shadow-2xl h-full w-full 
        col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-3 xl:row-span-4 grids-cols-4 grid-rows-3 p-4 sm:p-6 lg:p-10 gap-4 rounded-md shadow-md cursor-pointer" 
        onMouseEnter={() => updateExpression("happy","Check out some of the video game I made or worked on!")} 
        onMouseLeave={() => updateExpression("idle","whaa..? I thought you'd be interested in that.")}
        onClick={() => redirect('/portfolio/gamedev')}>
          <h1 className="text-left text-2xl sm:text-3xl md:text-4xl xl:text-5xl gap-10">Game Making</h1>
          <h1 className="text-left text-base sm:text-lg md:text-xl xl:text-2xl gap-10">Video game that I made or worked on.</h1>
        </div>
        
        
        <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-5 xl:row-span-4 hover:-translate-y-3 transition ease-in-out delay-50 hover:scale-105 bg-[#DBD3D3] hover:bg-[#EC8305] opacity-90 hover:opacity-100 hover:shadow-2xl
         h-full w-full grids-cols-4 grid-rows-3 p-4 sm:p-6 lg:p-10 gap-4 rounded-md shadow-md cursor-pointer"
         onClick={() => redirect('/portfolio/postproduction')}
         onMouseEnter={() => updateExpression("happy","Wanna see some of the video I edited myself?")} 
         onMouseLeave={() => updateExpression("idle","It's super fun~")}>
          <h1 className="text-left text-2xl sm:text-3xl md:text-4xl xl:text-5xl">Post Production</h1>
          <h1 className="text-left text-base sm:text-lg md:text-xl xl:text-2xl gap-10">Video Editing, Visual effects, Audio mixing, etc</h1>
        </div>
        
        <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-5 xl:row-span-4 hover:-translate-y-3 transition ease-in-out delay-50 hover:scale-105 bg-[#DBD3D3] hover:bg-[#EC8305] opacity-90 hover:opacity-100 hover:shadow-2xl
         h-full w-full grids-cols-4 grid-rows-3 p-4 sm:p-6 lg:p-10 gap-4 rounded-md shadow-md cursor-pointer"
         onMouseEnter={() => updateExpression("happy","I make website using javascript framework such as NextJS and more!")} 
         onMouseLeave={() => updateExpression("idle","")}
         onClick={() => redirect('/portfolio/frontend')}
         >
          <h1 className="text-left text-2xl sm:text-3xl md:text-4xl xl:text-5xl">Frontend Design and Development</h1>
          <h1 className="text-left text-base sm:text-lg md:text-xl xl:text-2xl gap-10">User Interface and Experience design and Website Development!</h1>
          </div>
        
        <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-3 xl:row-span-4 bg-[#DBD3D3] opacity-90 hover:opacity-100 h-full w-full grids-cols-4 grid-rows-3 p-4 sm:p-6 lg:p-10 gap-4 rounded-md shadow-md"
        onMouseEnter={() => updateExpression("happy","Ahhh.. I also haven't finished on the digital arts section yet.. I draw cartoony stuffs and make art assets.")} 
        onMouseLeave={() => updateExpression("idle","")}>
          <h1 className="text-right text-2xl sm:text-3xl md:text-4xl xl:text-5xl gap-10">Digital Arts and Animations</h1>
          <h1 className="text-right text-base sm:text-lg md:text-xl xl:text-2xl gap-10">(coming soon)</h1>
        </div>
      </div>
    </div>
  );
}
