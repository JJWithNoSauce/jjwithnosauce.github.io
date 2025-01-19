"use client"

import Image from "next/image";
import {Navigator,updateExpression} from '/src/app/navigator/page.js';
import { redirect } from 'next/navigation'


export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center font-ibmplex">
<div className="grid h-full w-full grid-cols-1 md:grid-cols-10 grid-rows-8 gap-10 p-4 md:p-10">

        <div className="transition ease-in-out delay-50 hover:scale-105 bg-[#DBD3D3] hover:bg-[#EC8305] opacity-90 hover:opacity-100 hover:shadow-2xl h-full w-full 
col-span-1 md:col-span-2 row-span-1 md:row-span-8 grids-cols-4 grid-rows-3 p-4 md:p-10 gap-4 rounded-md shadow-md cursor-pointer"
        onClick={() => redirect('/')}>
<h1 className="text-left text-2xl md:text-4xl xl:text-5xl gap-10">Back</h1>
<h1 className="text-left text-lg md:text-1xl xl:text-3xl gap-10">to the main page</h1>
        </div>

        <div className="transition ease-in-out delay-50 opacity-90 hover:opacity-100 h-full w-full 
        xl:col-span-8 xl:row-span-1 grids-cols-4 grid-rows-3 gap-4">
<div className="flex flex-wrap place-content-evenly text-center p-4 md:p-10">
<p className="transition ease-in-out delay-50 hover:scale-105 text-2xl md:text-4xl xl:text-5xl cursor-pointer opacity-70 hover:opacity-100" onClick={() => redirect('/skill/coding')}>Coding</p>
<p className="transition ease-in-out delay-50 hover:scale-105 text-2xl md:text-4xl xl:text-5xl cursor-pointer opacity-70 hover:opacity-100" onClick={() => redirect('/skill/creative')}>Creative</p>
<p className="transition ease-in-out delay-50 hover:scale-105 text-2xl md:text-4xl xl:text-5xl cursor-pointer opacity-70 hover:opacity-100" onClick={() => redirect('/skill/experience')}>Work Experience</p>
            </div>
          </div>
          <div className="transition ease-in-out delay-50 opacity-90 hover:opacity-100 h-full w-full 
        xl:col-span-8 xl:row-span-7 grids-cols-4 grid-rows-3 border-2 border-4 rounded-md shadow-md ">
<div className="flex flex-wrap place-content-center text-center p-4 md:p-10">
              <p className="transition ease-in-out delay-50 hover:scale-105 text-3xl xl:text-4xl">Please select a category</p>
            </div>
          </div>
        

          
          
        
      </div>
    </div>
  );
}
