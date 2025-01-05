"use client"

import Image from "next/image";
import {Navigator,updateExpression} from './navigator/page';


export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center font-ibmplex">
      <div className="grid h-full w-full grid-cols-10 grid-rows-8 gap-5 p-10">
        <div className="col-span-10 row-span-5 xl:col-span-5 xl:row-span-8 bg-indigo-200 h-full w-full grids-cols-4 grid-rows-3 p-10 gap-4 rounded-md shadow-md">
          <h1 className="text-left text-4xl xl:text-5xl gap-10">Hiya! I'm JJWithNoSauce!</h1>
          <h2 className="text-left text-3xl xl:text-4xl gap-10">Website's underconstruction, still working on it.</h2>
          
          
          
          
          
          </div>

        <div className="xl:col-span-3 xl:row-span-4 bg-indigo-200 h-full w-full grids-cols-4 grid-rows-3 p-10 gap-4 rounded-md shadow-md">
        <h1 className="text-left text-4xl xl:text-5xl gap-10">Portfolio</h1>
        </div>
        
        
        <div className="xl:col-span-2 xl:row-span-2 bg-indigo-200 h-full w-full grids-cols-4 grid-rows-3 p-10 gap-4 rounded-md shadow-md">
          <h1 className="text-left text-2xl xl:text-3xl">Skills</h1>
        </div>
        
        <div className="xl:col-span-2 xl:row-span-2 bg-indigo-200 h-full w-full grids-cols-4 grid-rows-3 p-10 gap-4 rounded-md shadow-md">
          <h1 className="text-left text-2xl xl:text-3xl">Tools</h1>
          </div>
        
        <div className="xl:col-span-5 xl:row-span-2 bg-indigo-200 h-full w-full grids-cols-4 grid-rows-3 p-10 gap-4 rounded-md shadow-md">
          <h1 className="text-right text-3xl xl:text-4xl gap-10">Notable Projects</h1>

        </div>
        <div className="xl:col-span-2 xl:row-span-2 bg-indigo-200 h-full w-full grids-cols-4 grid-rows-3 p-10 gap-4 rounded-md shadow-md">Links</div>
        <div className="xl:col-span-3 xl:row-span-2 bg-indigo-200 h-full w-full grids-cols-4 grid-rows-3 p-10 gap-4 rounded-md shadow-md">Contacts</div>
      </div>
    </div>
  );
}
