"use client"

import Image from "next/image";
import {Navigator,updateExpression} from './navigator/page';


export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center font-ibmplex">
      <div className="grid h-full w-full grid-cols-10 grid-rows-8 gap-5 p-10">
        <div className="col-span-10 row-span-5 xl:col-span-5 xl:row-span-8 bg-indigo-200 h-full w-full grids-cols-4 grid-rows-3 p-10 gap-4 rounded-md shadow-md">
          <div>
            <h1 className="text-left text-4xl xl:text-5xl gap-10">Hiya! I'm JJWithNoSauce!</h1>
            <h2 className="text-left text-3xl xl:text-4xl gap-10 py-3">A content creator who strives to make unique experiences!</h2>
            

            {/* <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              <span class="sr-only">Icon description</span>
            </button> */}
          
          
          </div>
          
          
          
          
          
          
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
        
        <div className="xl:col-span-2 xl:row-span-2 bg-indigo-200 h-full w-full grids-cols-4 grid-rows-3 p-10 gap-4 rounded-md shadow-md">
          <h1 className="text-right text-2xl xl:text-3xl gap-10">Links</h1>
        </div>
        
        <div className="xl:col-span-3 xl:row-span-2 bg-indigo-200 h-full w-full grids-cols-4 grid-rows-3 p-10 gap-4 rounded-md shadow-md">
          <h1 className="text-right text-2xl xl:text-3xl gap-10">Contacts</h1>
        </div>
      </div>
    </div>
  );
}
