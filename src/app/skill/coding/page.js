"use client"

import Image from "next/image";
import {Navigator,updateExpression} from '/src/app/navigator/page.js';
import { redirect } from 'next/navigation'


export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center font-ibmplex">
      <div className="grid h-full w-full grid-cols-10 grid-rows-8 gap-5 p-10">

        <div className="transition ease-in-out delay-50 hover:scale-105 bg-[#DBD3D3] hover:bg-[#EC8305] opacity-90 hover:opacity-100 hover:shadow-2xl h-full w-full 
        xl:col-span-2 xl:row-span-8 grids-cols-4 grid-rows-3 p-10 gap-4 rounded-md shadow-md cursor-pointer" 
        onClick={() => redirect('/')}>
          <h1 className="text-left text-4xl xl:text-5xl gap-10">Back</h1>
          <h1 className="text-left text-1xl xl:text-3xl gap-10">to the main page</h1>
        </div>

        <div className="transition ease-in-out delay-50 opacity-90 hover:opacity-100 h-full w-full 
        xl:col-span-8 xl:row-span-1 grids-cols-4 grid-rows-3 gap-4">
            <div className="flex flex-wrap place-content-evenly text-center p-10">
              <p className="transition ease-in-out delay-50 hover:scale-110 text-5xl xl:text-5xl scale-125 cursor-pointer opacity-100 hover:opacity-100" onClick={() => redirect('/skill/coding')}>Coding</p>
              <p className="transition ease-in-out delay-50 hover:scale-105 text-4xl xl:text-5xl cursor-pointer opacity-70 hover:opacity-100" onClick={() => redirect('/skill/creative')}>Creative</p>
              <p className="transition ease-in-out delay-50 hover:scale-105 text-4xl xl:text-5xl cursor-pointer opacity-70 hover:opacity-100" onClick={() => redirect('/skill/experience')}>Work Experience</p>
            </div>
        </div>
        
        <div className="transition ease-in-out delay-50 opacity-90 hover:opacity-100 h-full w-full 
        xl:col-span-8 xl:row-span-7 grids-cols-4 grid-rows-4 border-2 rounded-md shadow-md">
            <div class="mx-20 mt-20 w-Full p-4 shadow-md rounded-lg border-t-2 hover:scale-105 transition ease-in-out delay-50">
              <div class="flex justify-between pb-4">
                  <p class="font-bold text-xl">Coding and techs related skill sets</p>
              </div>

              <div class="grid gap-3  grid-cols-1 md:grid-cols-2 lg:grid-cols-4" id="accordion-collapse-body-1">

                  <a href="#"
                      class="flex border items-center rounded-md cursor-pointer transition duration-500 shadow-sm hover:shadow-md">
                      <div class="w-16 p-2 shrink-0">
                        <img src="https://www.svgrepo.com/show/512600/object-connection-round-1097.svg" alt="" class="h-12 w-12"></img>
                      </div>
                      <div class="p-2">
                          <p class="font-semibold text-lg">Object-Oriented Programming (OOP)</p>
                          <span class="text-gray-600">Experienced in making programs that uses OOP's principle</span>
                      </div>
                  </a>

                  <a href="#"
                      class="flex border items-center rounded-md cursor-pointer transition duration-500 shadow-sm hover:shadow-md">
                      <div class="w-16 p-2 shrink-0">
                        <img src="https://www.svgrepo.com/show/341856/godot-engine.svg" alt="" class="h-12 w-12"></img>
                      </div>
                      <div class="p-2">
                          <p class="font-semibold text-lg">Game Development</p>
                          <span class="text-gray-600">Experienced in implementing gameplay's system, user interface, user experience , in-game animations and effects</span>
                      </div>
                  </a>

                  <a href="#"
                      class="flex border items-center rounded-md cursor-pointer transition duration-500 shadow-sm hover:shadow-md">
                      <div class="w-16 p-2 shrink-0">
                          <img src="https://www.svgrepo.com/show/535339/database.svg" alt="" class="h-12 w-12"></img>
                      </div>
                      <div class="p-2">
                          <p class="font-semibold text-lg">Database Management System and Database Design</p>
                          <span class="text-gray-600">Experienced in using DBMS to manage and utilize database within various projects</span>
                      </div>
                  </a>

                  <a href="#"
                      class="flex border items-center rounded-md cursor-pointer transition duration-500 shadow-sm hover:shadow-md">
                      <div class="w-16 p-2 shrink-0">
                          <img src="https://www.svgrepo.com/show/342062/next-js.svg" alt="" class="h-12 w-12"></img>
                      </div>
                      <div class="p-2">
                          <p class="font-semibold text-lg">Front-end Development and Design</p>
                          <span class="text-gray-600">Experienced in Front-end Development in various projects, using js frameworks such as Next-JS</span>
                      </div>
                  </a>

                  <a href="#"
                      class="flex border items-center rounded-md cursor-pointer transition duration-500 shadow-sm hover:shadow-md">
                      <div class="w-16 p-2 shrink-0">
                          <img src="https://www.svgrepo.com/show/339651/user-interface.svg" alt="" class="h-12 w-12"></img>
                      </div>
                      <div class="p-2">
                          <p class="font-semibold text-lg">User Interface and Experience Design</p>
                          <span class="text-gray-600">Design and implement UX/UI that's innovative and simple to navigate</span>
                      </div>
                  </a>

                  <a href="#"
                      class="flex border items-center rounded-md cursor-pointer transition duration-500 shadow-sm hover:shadow-md">
                      <div class="w-16 p-2 shrink-0">
                          <img src="https://www.svgrepo.com/show/473567/cisco.svg" alt="" class="h-12 w-12"></img>
                      </div>
                      <div class="p-2">
                          <p class="font-semibold text-lg">Internetworking</p>
                          <span class="text-gray-600">Standard knowledge in Internetworking. (Cisco Networking Academy)</span>
                      </div>
                  </a>

                  <a href="#"
                      class="flex border items-center rounded-md cursor-pointer transition duration-500 shadow-sm hover:shadow-md">
                      <div class="w-16 p-2 shrink-0">
                          <img src="https://www.svgrepo.com/show/457070/programming.svg" alt="" class="h-12 w-12"></img>
                      </div>
                      <div class="p-2">
                          <p class="font-semibold text-lg">Programming</p>
                          <span class="text-gray-600">Coding with C#, C++, C, Java, Javascript, Lua, Python, GdScript, etc</span>
                      </div>
                  </a>

                  <a href="#"
                      class="flex border items-center rounded-md cursor-pointer transition duration-500 shadow-sm hover:shadow-md">
                      <div class="w-16 p-2 shrink-0">
                          <img src="https://www.svgrepo.com/show/341619/arch-linux.svg" alt="" class="h-12 w-12"></img>
                      </div>
                      <div class="p-2">
                          <p class="font-semibold text-lg">Wait.. I'm a Linux user?</p>
                          <span class="text-gray-600">Ability to navigate through Linux operating system, deployed home-server using Debian.</span>
                      </div>
                  </a>
              </div>
          </div>
        </div>
        
        

          
          
        
      </div>
    </div>
  );
}
