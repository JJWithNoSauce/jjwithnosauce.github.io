"use client"

import Image from "next/image";
import {Navigator,updateExpression} from '/src/app/navigator/page.js';
import { redirect } from 'next/navigation'


export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center font-ibmplex custom-div">
      <div className="grid h-full w-full grid-cols-10 grid-rows-8 gap-5 p-10">

        <div className="hover:translate-y-3 transition ease-in-out delay-50 hover:scale-105 bg-[#DBD3D3] hover:bg-[#EC8305] opacity-90 hover:opacity-100 hover:shadow-2xl h-full w-full 
        xl:col-span-2 xl:row-span-8 grids-cols-4 grid-rows-3 p-10 gap-4 rounded-md shadow-md cursor-pointer" 
        onMouseEnter={() => updateExpression("happy","You can see all of my really cool work over there ;D")} 
        onMouseLeave={() => updateExpression("idle","test")}
        onClick={() => redirect('/')}>
          <h1 className="text-left text-4xl xl:text-5xl gap-10">Back</h1>
          <h1 className="text-left text-1xl xl:text-3xl gap-10">to the main page</h1>
        </div>
      </div>
    </div>
  );
}
