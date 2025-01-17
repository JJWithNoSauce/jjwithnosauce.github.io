"use client"

import Image from "next/image";
import {Navigator,updateExpression} from '/src/app/navigator/page.js';
import { redirect } from 'next/navigation'


export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center font-ibmplex">
<div className="grid h-full w-full grid-cols-1 md:grid-cols-10 grid-rows-8 gap-5 p-4 md:p-10">

        <div className="transition ease-in-out delay-50 hover:scale-105 bg-[#DBD3D3] hover:bg-[#EC8305] opacity-90 hover:opacity-100 hover:shadow-2xl h-full w-full 
col-span-1 md:col-span-2 row-span-1 md:row-span-8 grids-cols-4 grid-rows-3 p-4 md:p-10 gap-4 rounded-md shadow-md cursor-pointer"
        onClick={() => redirect('/')}>
<h1 className="text-left text-2xl md:text-4xl xl:text-5xl gap-10">Back</h1>
<h1 className="text-left text-lg md:text-1xl xl:text-3xl gap-10">to the main page</h1>
        </div>

        <div className="transition ease-in-out delay-50 opacity-90 hover:opacity-100 h-full w-full 
        xl:col-span-8 xl:row-span-1 grids-cols-4 grid-rows-3 gap-4">
<div className="xl:flex xl:flex-wrap place-content-evenly text-center py-4 md:p-10">
<p className="transition ease-in-out delay-50 hover:scale-105 text-2xl md:text-4xl xl:text-5xl cursor-pointer opacity-70 hover:opacity-100 py-1" onClick={() => redirect('/skill/coding')}>Coding</p>
<p className="transition ease-in-out delay-50 hover:scale-105 text-2xl md:text-4xl xl:text-5xl cursor-pointer opacity-70 hover:opacity-100 py-1" onClick={() => redirect('/skill/creative')}>Creative</p>
<p className="transition ease-in-out delay-50 hover:scale-110 text-3xl md:text-5xl xl:text-5xl scale-125 cursor-pointer opacity-100 hover:opacity-100 py-1" onClick={() => redirect('/skill/experience')}>Work Experience</p>
            </div>
          </div>
          <div className="transition ease-in-out delay-50 opacity-90 hover:opacity-100 h-full w-full 
        xl:col-span-8 xl:row-span-7 grids-cols-4 grid-rows-3 py-10">
            <div className="flex flex-wrap place-content-center text-center p-4 md:p-10">
              
              
              <ol class="relative border-s border-gray-200 dark:border-gray-700">                  
                  <li class="mb-10 ms-4">
                      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time class="mb-1 text-sm font-normal leading-none text-gray-400 text-gray-500">Feb 2023 - Present(part-time) · 2 yrs</time>
                      <h3 class="text-lg font-semibold text-gray-900">Freelance Video Editor for Mudan Media Group</h3>
                      <p class="mb-4 text-base font-normal text-gray-500 text-gray-400">One of freelance video editor for Mudan Media Group ,
Mudan Media Group manages content uploads for various online personalities
which provides post production services for various online
personalities such as Ironmouse from VShojo, Onigiri from
GeeXplus, Connordawg, Premiertwo, etc. </p>
                      <a href="https://youtube.com/playlist?list=PLDLCHs26Pdrf2SyYkULnSTCyEOiJH-QYY&si=F7nuIvQQzZl6nZ-i" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">See contribution<svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="https://www.svgrepo.com/show/513089/youtube-168.svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg></a>
                  </li>
                  
                  <li class="mb-10 ms-4">
                      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time class="mb-1 text-sm font-normal leading-none text-gray-400 text-gray-500">Jul 2021 - Jun 2023 · 2 yrs</time>
                      <h3 class="text-lg font-semibold text-gray-900">Freelance Video Editor on Fiverr</h3>
                      <p class="mb-4 text-base font-normal text-gray-500 text-gray-400">Operates and manage post production services on Fiverr with over 54 jobs(Video and thumbnail projects) completed.
For past rating and customer experiences, Please refer to the Fiverr's page down below.</p>
                      <a href="https://www.fiverr.com/jjwithnosauce/edit-your-video-to-your-desire" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">See Fiverr page<svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="https://www.svgrepo.com/show/513089/youtube-168.svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                      </svg></a>
                  </li>
                  
              </ol>




            </div>
          </div>
        

          
          
        
      </div>
    </div>
  );
}
