"use client"

import Image from "next/image";
import {Navigator,updateExpression} from '/src/app/navigator/page.js';
import { redirect } from 'next/navigation'


export default function Home() {
  return (
<div className="min-h-screen w-full flex items-center justify-center font-ibmplex custom-div">
  <div className="grid h-full w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-10 grid-rows-8 gap-4 p-4 sm:gap-6 sm:p-6 md:gap-8 md:p-8 lg:gap-10 lg:p-10">

        <div className="transition ease-in-out delay-50 hover:scale-105 bg-[#DBD3D3] hover:bg-[#EC8305] opacity-90 hover:opacity-100 hover:shadow-2xl h-full w-full 
        xl:col-span-2 xl:row-span-8 grids-cols-4 grid-rows-3 p-10 gap-4 rounded-md shadow-md cursor-pointer" 
        onMouseEnter={() => updateExpression("happy","You can go back by clicking that button!")} 
        onMouseLeave={() => updateExpression("idle","You certainly can.")}
        onClick={() => redirect('/portfolio')}>
<h1 className="text-left text-2xl sm:text-3xl md:text-4xl xl:text-5xl gap-4">Back</h1>
<h1 className="text-left text-lg sm:text-xl md:text-2xl xl:text-3xl gap-4">to the portfolio selection</h1>
        </div>

        <div className="transition ease-in-out delay-50 w-full relative mx-auto h-auto overflow-hidden rounded-lg xl:col-span-4 xl:row-span-4 group shadow-lg hover:shadow-xl cursor-pointer"
        onClick={() => window.open('https://jjwithnosauce.itch.io/the-witch-with-pain', '_blank')}
        onMouseEnter={() => updateExpression("happy","The Witch With Pain is the very first video game that I made! I worked on coding, arts and animation, pretty much the entire project. It's a top down movement puzzle game that was a part of a halloween gamejam and The gameplay category for this game got ranked at #32 out of 236 entries! You'll get to play as Wise, a witch that gain power through pain. Wise will have to make her way through obstacles and puzzles to get out of the cave she's trapped in.")} 
        onMouseLeave={() => updateExpression("idle","")}>
          <img src="/TheWitchWithPainThumbnail.png" alt="image" class="w-full h-full relative z-0 rounded-lg scale-100 transition-all duration-500 group-hover:scale-125 group-hover:opacity-50"></img>
<h1 class="transition-all duration-300 absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-black z-10 pointer-events-none group-hover:scale-150 opacity-0 group-hover:opacity-100 ">The Witch With Pain</h1>
        </div>
        
        
        <div class="transition ease-in-out delay-50 w-full relative mx-auto h-auto overflow-hidden rounded-lg xl:col-span-4 xl:row-span-4 group shadow-lg hover:shadow-xl cursor-pointer"
        onClick={() => window.open('https://jjwithnosauce.itch.io/6secondstep', '_blank')}
        onMouseEnter={() => updateExpression("happy","Six Second Step is a short minigame where you have to slowly move towards the goal within 1 minutes! It was a part of a one minute jam. The game was entirely developed by me.")} 
        onMouseLeave={() => updateExpression("idle","")}>
          <img src="/SixSecondStepThumbnail.png" alt="image" class="w-full h-full relative z-0 rounded-lg scale-100 transition-all duration-500 group-hover:scale-125 group-hover:opacity-50"></img>
<h1 class="transition-all duration-300 absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-black z-10 pointer-events-none group-hover:scale-150 opacity-0 group-hover:opacity-100 ">Six Second Step</h1>
        </div>
        
        
        <div class="transition ease-in-out delay-50 w-full relative mx-auto h-auto overflow-hidden rounded-lg xl:col-span-4 xl:row-span-4 group shadow-lg hover:shadow-xl cursor-pointer"
        onClick={() => window.open('https://github.com/yeaw02386/ReHeater', '_blank')}
        onMouseEnter={() => updateExpression("happy","ReHeater is a tower defender/exploration game. I worked on arts assets, animations, environments, user interface and experience, notably the spaceship animation, the character animation, main menu. This game was a part of Game Development course and was developed with a team of three.")} 
        onMouseLeave={() => updateExpression("idle","")}>
          <img src="/ReheaterThumbnail.png" alt="image" class="w-full h-full relative z-0 rounded-lg scale-100 transition-all duration-500 group-hover:scale-125 group-hover:opacity-50"></img>
<h1 class="transition-all duration-300 absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-black z-10 pointer-events-none group-hover:scale-150 opacity-0 group-hover:opacity-100 ">Reheater</h1>
        </div>
        
        <div class="transition ease-in-out delay-50 w-full relative mx-auto h-auto overflow-hidden rounded-lg xl:col-span-4 xl:row-span-4 group shadow-lg hover:shadow-xl cursor-pointer"
        onClick={() => window.open('https://github.com/JJWithNoSauce/BandaiSnakeProject', '_blank')}
        onMouseEnter={() => updateExpression("happy","BandaiSnake is a multiplayer video game which was inspired by the Snake and Ladder board game, Players can use cards to gain advantages or disrupts other players. I worked on the arts, animations, user interface. This game was a part of Game Development course and was developed with a team of three.")} 
        onMouseLeave={() => updateExpression("idle","")}>
          <img src="/BandaiSnakeThumbnail.png" alt="image" class="w-full h-full relative z-0 rounded-lg scale-110 transition-all duration-500 group-hover:scale-125 group-hover:opacity-50"></img>
<h1 class="transition-all duration-300 absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-black z-10 pointer-events-none group-hover:scale-150 opacity-0 group-hover:opacity-100 ">BandaiSnake</h1>
        </div>



      </div>
    </div>
  );
}
