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
<p className="transition ease-in-out delay-50 hover:scale-110 text-3xl md:text-5xl xl:text-5xl scale-125 cursor-pointer opacity-100 hover:opacity-100 py-1" onClick={() => redirect('/skill/creative')}>Creative</p>
<p className="transition ease-in-out delay-50 hover:scale-105 text-2xl md:text-4xl xl:text-5xl cursor-pointer opacity-70 hover:opacity-100 py-1" onClick={() => redirect('/skill/experience')}>Work Experience</p>
            </div>
          </div>
          
          <div className="transition ease-in-out delay-50 opacity-90 hover:opacity-100 h-full w-full 
        xl:col-span-8 xl:row-span-7 grids-cols-4 grid-rows-4 p-10">
              <div class="flex justify-between pb-4">
                  <p class="font-bold text-xl">Creative related skill sets</p>
              </div>

              <div class="grid gap-3  grid-cols-1 md:grid-cols-2 lg:grid-cols-4" id="accordion-collapse-body-1">

                  <a href="#"
                      class="flex border items-center rounded-md cursor-pointer transition duration-500 shadow-sm hover:shadow-md">
                      <div class="w-16 p-2 shrink-0">
                        <img src="https://www.svgrepo.com/show/209641/video-editing.svg" alt="" class="h-12 w-12"></img>
                      </div>
                      <div class="p-2">
                          <p class="font-semibold text-lg">Post Production</p>
                          <span class="text-gray-600">Experienced in Post production works which includes but not limited to video editing, color correction, image manipulation, etc</span>
                      </div>
                  </a>

                  <a href="#"
                      class="flex border items-center rounded-md cursor-pointer transition duration-500 shadow-sm hover:shadow-md">
                      <div class="w-16 p-2 shrink-0">
                        <img src="https://www.svgrepo.com/show/503154/adobe-pr.svg" alt="" class="h-12 w-12"></img>
                      </div>
                      <div class="p-2">
                          <p class="font-semibold text-lg">Video Editing</p>
                          <span class="text-gray-600">Turning long and boring footages into engaging experiences using Adobe Premiere Pro and Davinci Resolve</span>
                      </div>
                  </a>

                  <a href="#"
                      class="flex border items-center rounded-md cursor-pointer transition duration-500 shadow-sm hover:shadow-md">
                      <div class="w-16 p-2 shrink-0">
                          <img src="https://www.svgrepo.com/show/424897/gimp-logo-editor-2.svg" alt="" class="h-12 w-12"></img>
                      </div>
                      <div class="p-2">
                          <p class="font-semibold text-lg">Thumbnail Design</p>
                          <span class="text-gray-600">Ability to design eye-catching thumbnails for social media using Gimp/Photoshop</span>
                      </div>
                  </a>

                  <a href="#"
                      class="flex border items-center rounded-md cursor-pointer transition duration-500 shadow-sm hover:shadow-md">
                      <div class="w-16 p-2 shrink-0">
                          <img src="https://www.svgrepo.com/show/307863/graphic-designer-creative-draw-artist.svg" alt="" class="h-12 w-12"></img>
                      </div>
                      <div class="p-2">
                          <p class="font-semibold text-lg">Graphic Design</p>
                          <span class="text-gray-600">Ability to create assets such as Logo, Poster, etc while also using Gimp/Photoshop</span>
                      </div>
                  </a>

                  <a href="#"
                      class="flex border items-center rounded-md cursor-pointer transition duration-500 shadow-sm hover:shadow-md">
                      <div class="w-16 p-2 shrink-0">
                          <img src="https://www.svgrepo.com/show/325323/keyframe-position.svg" alt="" class="h-12 w-12"></img>
                      </div>
                      <div class="p-2">
                          <p class="font-semibold text-lg">Motion Effects Design</p>
                          <span class="text-gray-600">Make your object moves so smoothly like butter. Able to implement within various tools and game engine</span>
                      </div>
                  </a>

                  <a href="#"
                      class="flex border items-center rounded-md cursor-pointer transition duration-500 shadow-sm hover:shadow-md">
                      <div class="w-16 p-2 shrink-0">
                          <img src="https://www.svgrepo.com/show/341976/krita.svg" alt="" class="h-12 w-12"></img>
                      </div>
                      <div class="p-2">
                          <p class="font-semibold text-lg">2D Arts and Animations</p>
                          <span class="text-gray-600">Ability to make 2D art assets, 2D animations such as character movement and cutscene, Story boarding, Character Design, etc</span>
                      </div>
                  </a>

                  <a href="#"
                      class="flex border items-center rounded-md cursor-pointer transition duration-500 shadow-sm hover:shadow-md">
                      <div class="w-16 p-2 shrink-0">
                          <img src="https://www.svgrepo.com/show/473552/audacity.svg" alt="" class="h-12 w-12"></img>
                      </div>
                      <div class="p-2">
                          <p class="font-semibold text-lg">Audio Mixing</p>
                          <span class="text-gray-600">Normalizing loudness in audio, adding sounds effects and musics with seamless transition, removing background noises and make your vocal pops.</span>
                      </div>
                  </a>

                  <a href="#"
                      class="flex border items-center rounded-md cursor-pointer transition duration-500 shadow-sm hover:shadow-md">
                      <div class="w-16 p-2 shrink-0">
                          <img src="https://www.svgrepo.com/show/208993/cute.svg" alt="" class="h-12 w-12"></img>
                      </div>
                      <div class="p-2">
                          <p class="font-semibold text-lg">Adhd</p>
                          <span class="text-gray-600">Autism Denial Disorder?</span>
                      </div>
                  </a>
              </div>
          </div>
        

          
          
        
      </div>
    </div>
  );
}
