"use client"

import Image from "next/image";
import {Navigator,updateExpression} from '/src/app/navigator/page.js';
import { redirect } from 'next/navigation'
import { useState } from "react"


export default function Home() {
  const [youtubeEmbed, setYoutubeEmbed] = useState("https://www.youtube.com/embed/AEv02RYOwX0?si=ciFDQXirRNFGYHS7")
  
  const [hideTool, sethideTool] = useState("transition ease-in-out delay-50 h-0 w-0 object-contain opacity-100 group-hover:opacity-100 transition duration-300")
  const [showTool, setshowTool] = useState("transition ease-in-out delay-50 h-20 w-20 object-contain opacity-100 group-hover:opacity-100 transition duration-300")
  const [davinciresolve, setDavinciResolve] = useState("transition ease-in-out delay-50 h-0 w-0 object-contain opacity-100 group-hover:opacity-100 transition duration-300")
  const [premierepro, setPremierePro] = useState("transition ease-in-out delay-50 h-20 w-20 object-contain opacity-100 group-hover:opacity-100 transition duration-300")
  const [aftereffect, setAfterEffect] = useState("transition ease-in-out delay-50 h-20 w-20 object-contain opacity-100 group-hover:opacity-100 transition duration-300")
  const [gimp, setGimp] = useState("transition ease-in-out delay-50 h-20 w-20 object-contain opacity-100 group-hover:opacity-100 transition duration-300")


  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function handleClick(link,toolset) {
    setYoutubeEmbed(link);
    handleScrollToTop();

    if(toolset == "toolset1"){
      setDavinciResolve(hideTool)
      setPremierePro(showTool)
      setAfterEffect(showTool)
      setGimp(showTool)
    }
    else if(toolset == "toolset2"){
      setDavinciResolve(showTool)
      setPremierePro(hideTool)
      setAfterEffect(hideTool)
      setGimp(showTool)
    }
  };


  function handleToolChangeSet2(){

  }

  return (
    <div className="h-auto w-full flex items-center justify-center font-ibmplex custom-div">
      <div className="grid h-full w-full grid-cols-10 grid-rows-8 gap-5 p-10">

        <div className="transition ease-in-out delay-50 hover:scale-105 bg-[#DBD3D3] hover:bg-[#EC8305] opacity-90 hover:opacity-100 hover:shadow-2xl h-full w-full 
        xl:col-span-2 xl:row-span-2 grids-cols-2 grid-rows-2 p-10 gap-4 rounded-md shadow-md cursor-pointer" 
        onMouseEnter={() => updateExpression("happy","You can see all of my really cool work over there ;D")} 
        onMouseLeave={() => updateExpression("idle","test")}
        onClick={() => redirect('/portfolio')}>
          <h1 className="text-left text-4xl xl:text-5xl gap-10">Back</h1>
          <h1 className="text-left text-1xl xl:text-3xl gap-10">to the portfolio selection</h1>
        </div>

        <div className="transition ease-in-out delay-50 hover:scale-105 bg-[#DBD3D3] hover:bg-[#EC8305] opacity-90 hover:opacity-100 hover:shadow-2xl h-full w-full 
        xl:col-span-2 xl:row-span-2 grids-cols-2 grid-rows-2 p-10 gap-4 rounded-md shadow-md cursor-pointer" 
        onMouseEnter={() => updateExpression("happy","You can see all of my really cool work over there ;D")} 
        onMouseLeave={() => updateExpression("idle","test")}
        onClick={() => redirect('https://youtube.com/playlist?list=PLDLCHs26Pdrf2SyYkULnSTCyEOiJH-QYY&si=De41KbcehTln22hf')}>
          <h1 className="text-left text-4xl xl:text-5xl gap-10">See full playlist</h1>
          <h1 className="text-left text-1xl xl:text-3xl gap-10">on Youtube</h1>
        </div>


        <div class="transition ease-in-out delay-50 w-full relative mx-auto h-auto overflow-hidden rounded-lg xl:col-span-6 xl:row-span-3 group shadow-lg hover:shadow-xl cursor-pointer h_iframe">
          <iframe className="rounded-md shadow-md" width="full" height="full" src={youtubeEmbed} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      
        <div className="group transition ease-in-out delay-50 bg-[#DBD3D3] hover:bg-[#EC8305] opacity-90 hover:opacity-100 hover:shadow-2xl h-full w-full 
        xl:col-span-4 xl:row-span-1 grids-cols-2 grid-rows-2 p-10 gap-4 rounded-md shadow-md" 
>

          
          <h1 className="transition ease-in-out delay-50 text-center text-4xl xl:text-4xl gap-10 group-hover:scale-75 group-hover:opacity-0">
            Editing tools used for this project
          </h1>
          <div className="group-hover:-translate-y-5 transition ease-in-out delay-50 flex justify-center mt-4 group-hover:scale-150">
            <img 
              src="https://www.svgrepo.com/show/452150/adobe-premiere.svg" 
              alt="Adobe Premiere Logo" 
              className={premierepro}
            />
            <img 
              src="https://www.svgrepo.com/show/452141/adobe-after-effects.svg" 
              alt="Adobe After Effects Logo" 
              className={aftereffect}
            />
            <img 
              src="https://img.icons8.com/?size=100&id=40604&format=png&color=000000" 
              alt="Davinci Resolve" 
              className={davinciresolve}
            />
            <img 
              src="https://www.svgrepo.com/show/424934/gimp-logo-editor.svg" 
              alt="GIMP Logo" 
              className={gimp}
            />
          </div>
        </div>



        
        <div class="transition ease-in-out delay-50 w-full relative mx-auto h-full overflow-hidden rounded-lg xl:col-span-10 xl:row-span-5 group shadow-lg hover:shadow-xl h_iframe">
        <h1 className="text-center text-4xl xl:text-3xl py-10">More videos that I edited!</h1>
          <div className="grid h-auto w-full grid-cols-10 grid-rows-5 gap-5 py-3 px-5">

          <div className="transition-all duration-300 w-full relative mx-auto h-auto overflow-hidden rounded-lg xl:col-span-2 xl:row-span-2 group shadow-lg hover:shadow-2xl cursor-pointer h_iframe"
          onClick={() => handleClick("https://www.youtube.com/embed/AEv02RYOwX0?si=ciFDQXirRNFGYHS7","toolset1")}>
            <div className="relative">
              <img
                className="rounded-lg shadow-lg w-full h-full object-cover"
                src="https://img.youtube.com/vi/AEv02RYOwX0/maxresdefault.jpg"
                alt="Ludwig Thinks He's Better Than Me..."
                title="Ludwig Thinks He's Better Than Me..."
              />
              <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs font-semibold py-1 px-2 rounded-md">
                45:47
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex justify-center items-center">
                <button
                  className="bg-white text-black px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                  aria-label="Play Video"
                >
                  ▶ Play
                </button>
              </div>
            </div>
            <div className="text-center py-3 px-6">
              <h1 className="text-2xl xl:text-3xl font-semibold mb-1 text-gray-900 break-words">
                Ludwig thinks he's better than me...
              </h1>
              <h2 className="text-lg xl:text-xl font-medium text-gray-500 mb-2">
                ConnorDawg
              </h2>
              <div className="flex justify-center items-center text-gray-500 text-sm">
                <span className="mr-2">👁 697K views</span>
                <span>•</span>
                <span className="ml-2"> 30k likes</span>
              </div>
            </div>
          </div>

          <div className="transition-all duration-300 w-full relative mx-auto h-auto overflow-hidden rounded-lg xl:col-span-2 xl:row-span-2 group shadow-lg hover:shadow-2xl cursor-pointer h_iframe"
           onClick={() => handleClick("https://www.youtube.com/embed/PbmonKkT49M?si=0t9Zreg-s-n4Lgfi","toolset1")}>
            <div className="relative">
              <img
                className="rounded-lg shadow-lg w-full h-full object-cover"
                src="https://img.youtube.com/vi/PbmonKkT49M/maxresdefault.jpg"
                alt="I Can't Stop Buying More Models..."
                title="I Can't Stop Buying More Models..."
              />
              <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs font-semibold py-1 px-2 rounded-md">
                15:17
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex justify-center items-center">
                <button
                  className="bg-white text-black px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                  aria-label="Play Video"
                >
                  ▶ Play
                </button>
              </div>
            </div>
            <div className="text-center py-3 px-6">
              <h1 className="text-2xl xl:text-3xl font-semibold mb-1 text-gray-900 break-words">
                I Can't Stop Buying More Models... 
              </h1>
              <h2 className="text-lg xl:text-xl font-medium text-gray-500 mb-2">
                ironmouse
              </h2>
              <div className="flex justify-center items-center text-gray-500 text-sm">
                <span className="mr-2">👁 124K views</span>
                <span>•</span>
                <span className="ml-2"> 10k likes</span>
              </div>
            </div>
          </div>

          <div className="transition-all duration-300 w-full relative mx-auto h-auto overflow-hidden rounded-lg xl:col-span-2 xl:row-span-2 group shadow-lg hover:shadow-2xl cursor-pointer h_iframe"
          onClick={() => handleClick("https://www.youtube.com/embed/3JrmhToTQeM?si=E5BKUXu6Nfto6NRZ","toolset1")}>
            <div className="relative">
              <img
                className="rounded-lg shadow-lg w-full h-full object-cover"
                src="https://img.youtube.com/vi/3JrmhToTQeM/maxresdefault.jpg"
                alt="The Real Japanese Sakura Viewing Experience "
                title="The Real Japanese Sakura Viewing Experience "
              />
              <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs font-semibold py-1 px-2 rounded-md">
                38:40
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex justify-center items-center">
                <button
                  className="bg-white text-black px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                  aria-label="Play Video"
                >
                  ▶ Play
                </button>
              </div>
            </div>
            <div className="text-center py-3 px-6">
              <h1 className="text-2xl xl:text-3xl font-semibold mb-1 text-gray-900 break-words">
                The Real Japanese Sakura Viewing Experience 
              </h1>
              <h2 className="text-lg xl:text-xl font-medium text-gray-500 mb-2">
                PremierTwo
              </h2>
              <div className="flex justify-center items-center text-gray-500 text-sm">
                <span className="mr-2">👁 84K views</span>
                <span>•</span>
                <span className="ml-2"> 4.2k likes</span>
              </div>
            </div>
          </div>


          <div className="transition-all duration-300 w-full relative mx-auto h-auto overflow-hidden rounded-lg xl:col-span-2 xl:row-span-2 group shadow-lg hover:shadow-2xl cursor-pointer h_iframe"
          onClick={() => handleClick("https://www.youtube.com/embed/DGWmA5q-PJo?si=rP4Hy0yPYHnS7TBE","toolset2")}>
            <div className="relative">
              <img
                className="rounded-lg shadow-lg w-full h-full object-cover"
                src="https://img.youtube.com/vi/DGWmA5q-PJo/maxresdefault.jpg"
                alt="Talking to a Legendary NewGrounds Animator"
                title="Talking to a Legendary NewGrounds Animator"
              />
              <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs font-semibold py-1 px-2 rounded-md">
                15:17
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex justify-center items-center">
                <button
                  className="bg-white text-black px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                  aria-label="Play Video"
                >
                  ▶ Play
                </button>
              </div>
            </div>
            <div className="text-center py-3 px-6">
              <h1 className="text-2xl xl:text-3xl font-semibold mb-1 text-gray-900 break-words">
              Talking to a Legendary NewGrounds Animator  
              </h1>
              <h2 className="text-lg xl:text-xl font-medium text-gray-500 mb-2">
                ironmouse
              </h2>
              <div className="flex justify-center items-center text-gray-500 text-sm">
                <span className="mr-2">👁 118K views</span>
                <span>•</span>
                <span className="ml-2"> 9.2k likes</span>
              </div>
            </div>
          </div>

          <div className="transition-all duration-300 w-full relative mx-auto h-auto overflow-hidden rounded-lg xl:col-span-2 xl:row-span-2 group shadow-lg hover:shadow-2xl cursor-pointer h_iframe"
          onClick={() => handleClick("https://www.youtube.com/embed/ytLOEj24lSo?si=VoxLmhosdAXGqGjO","toolset2")}>
            <div className="relative">
              <img
                className="rounded-lg shadow-lg w-full h-full object-cover"
                src="https://img.youtube.com/vi/ytLOEj24lSo/maxresdefault.jpg"
                alt="He Tried To Take Over My Kitchen..."
                title="He Tried To Take Over My Kitchen..."
              />
              <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs font-semibold py-1 px-2 rounded-md">
                15:47
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex justify-center items-center">
                <button
                  className="bg-white text-black px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                  aria-label="Play Video"
                >
                  ▶ Play
                </button>
              </div>
            </div>
            <div className="text-center py-3 px-6">
              <h1 className="text-2xl xl:text-3xl font-semibold mb-1 text-gray-900 break-words">
                He Tried To Take Over My Kitchen...  
              </h1>
              <h2 className="text-lg xl:text-xl font-medium text-gray-500 mb-2">
                OniGiri
              </h2>
              <div className="flex justify-center items-center text-gray-500 text-sm">
                <span className="mr-2">👁 66K views</span>
                <span>•</span>
                <span className="ml-2"> 3.8k likes</span>
              </div>
            </div>
          </div>

          <div className="transition-all duration-300 w-full relative mx-auto h-auto overflow-hidden rounded-lg xl:col-span-2 xl:row-span-2 group shadow-lg hover:shadow-2xl cursor-pointer h_iframe"
          onClick={() => handleClick("https://www.youtube.com/embed/lCMlf9ukMVs?si=KYpb5PnhzxfR2Ptg","toolset2")}>
            <div className="relative">
              <img
                className="rounded-lg shadow-lg w-full h-full object-cover"
                src="https://img.youtube.com/vi/lCMlf9ukMVs/maxresdefault.jpg"
                alt="She Really Put My Cooking Skills To Test"
                title="She Really Put My Cooking Skills To Test"
              />
              <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs font-semibold py-1 px-2 rounded-md">
                15:52
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex justify-center items-center">
                <button
                  className="bg-white text-black px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                  aria-label="Play Video"
                >
                  ▶ Play
                </button>
              </div>
            </div>
            <div className="text-center py-3 px-6">
              <h1 className="text-2xl xl:text-3xl font-semibold mb-1 text-gray-900 break-words">
                She Really Put My Cooking Skills To Test 
              </h1>
              <h2 className="text-lg xl:text-xl font-medium text-gray-500 mb-2">
                OniGiri
              </h2>
              <div className="flex justify-center items-center text-gray-500 text-sm">
                <span className="mr-2">👁 274K views</span>
                <span>•</span>
                <span className="ml-2"> 11k likes</span>
              </div>
            </div>
          </div>

          <div className="transition-all duration-300 w-full relative mx-auto h-auto overflow-hidden rounded-lg xl:col-span-2 xl:row-span-2 group shadow-lg hover:shadow-2xl cursor-pointer h_iframe"
          onClick={() => handleClick("https://www.youtube.com/embed/-U9XYdht-ng?si=XqAKq5d77jPvb2HV","toolset2")}>
            <div className="relative">
              <img
                className="rounded-lg shadow-lg w-full h-full object-cover"
                src="https://img.youtube.com/vi/-U9XYdht-ng/maxresdefault.jpg"
                alt="Ironmouse Discovers Liminal Space...Again!" 
                title="Ironmouse Discovers Liminal Space...Again!"
              />
              <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs font-semibold py-1 px-2 rounded-md">
                23:16
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex justify-center items-center">
                <button
                  className="bg-white text-black px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                  aria-label="Play Video"
                >
                  ▶ Play
                </button>
              </div>
            </div>
            <div className="text-center py-3 px-6">
              <h1 className="text-2xl xl:text-3xl font-semibold mb-1 text-gray-900 break-words">
                Ironmouse Discovers Liminal Space...Again! 
              </h1>
              <h2 className="text-lg xl:text-xl font-medium text-gray-500 mb-2">
                ironmouse
              </h2>
              <div className="flex justify-center items-center text-gray-500 text-sm">
                <span className="mr-2">👁 167K views</span>
                <span>•</span>
                <span className="ml-2"> 9.7k likes</span>
              </div>
            </div>
          </div>

          <div className="transition-all duration-300 w-full relative mx-auto h-auto overflow-hidden rounded-lg xl:col-span-2 xl:row-span-2 group shadow-lg hover:shadow-2xl cursor-pointer h_iframe"
          onClick={() => handleClick("https://www.youtube.com/embed/AR4PAVzo-ao?si=kHLb8AHORp7hxpCQ","toolset2")}>
            <div className="relative">
              <img
                className="rounded-lg shadow-lg w-full h-full object-cover"
                src="https://img.youtube.com/vi/AR4PAVzo-ao/maxresdefault.jpg"
                alt="I Tried Making Thai Curry Noodle Soup For The First Time!" 
                title="I Tried Making Thai Curry Noodle Soup For The First Time!"
              />
              <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs font-semibold py-1 px-2 rounded-md">
                13:12
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex justify-center items-center">
                <button
                  className="bg-white text-black px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                  aria-label="Play Video"
                >
                  ▶ Play
                </button>
              </div>
            </div>
            <div className="text-center py-3 px-6">
              <h1 className="text-2xl xl:text-3xl font-semibold mb-1 text-gray-900 break-words">
                I Tried Making Thai Curry Noodle Soup For The First Time! 
              </h1>
              <h2 className="text-lg xl:text-xl font-medium text-gray-500 mb-2">
                OniGiri
              </h2>
              <div className="flex justify-center items-center text-gray-500 text-sm">
                <span className="mr-2">👁 52K views</span>
                <span>•</span>
                <span className="ml-2"> 3.1k likes</span>
              </div>
            </div>
          </div>

          <div className="transition-all duration-300 w-full relative mx-auto h-auto overflow-hidden rounded-lg xl:col-span-2 xl:row-span-2 group shadow-lg hover:shadow-2xl cursor-pointer h_iframe"
          onClick={() => handleClick("https://www.youtube.com/embed/m-qbHAdzD8c?si=rYfZltsYy3Uuqj0k","toolset2")}>
            <div className="relative">
              <img
                className="rounded-lg shadow-lg w-full h-full object-cover"
                src="https://img.youtube.com/vi/m-qbHAdzD8c/maxresdefault.jpg"
                alt="KEYCAPS FOR VTUBERS" 
                title="KEYCAPS FOR VTUBERS"
              />
              <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs font-semibold py-1 px-2 rounded-md">
                6:27
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex justify-center items-center">
                <button
                  className="bg-white text-black px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                  aria-label="Play Video"
                >
                  ▶ Play
                </button>
              </div>
            </div>
            <div className="text-center py-3 px-6">
              <h1 className="text-2xl xl:text-3xl font-semibold mb-1 text-gray-900 break-words">
                KEYCAPS FOR VTUBERS 
              </h1>
              <h2 className="text-lg xl:text-xl font-medium text-gray-500 mb-2">
                OniGiri
              </h2>
              <div className="flex justify-center items-center text-gray-500 text-sm">
                <span className="mr-2">👁 7.4K views</span>
                <span>•</span>
                <span className="ml-2"> 675 likes</span>
              </div>
            </div>
          </div>

          <div className="transition-all duration-300 w-full relative mx-auto h-auto overflow-hidden rounded-lg xl:col-span-2 xl:row-span-2 group shadow-lg hover:shadow-2xl cursor-pointer h_iframe"
          onClick={() => handleClick("https://www.youtube.com/embed/WypAw_5sYv4?si=v6MV3jctpCkuS9Ih","toolset2")}>
            <div className="relative">
              <img
                className="rounded-lg shadow-lg w-full h-full object-cover"
                src="https://img.youtube.com/vi/WypAw_5sYv4/maxresdefault.jpg"
                alt="If Your Video Is Bad, I'll End You!" 
                title="If Your Video Is Bad, I'll End You!"
              />
              <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs font-semibold py-1 px-2 rounded-md">
                16:03
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex justify-center items-center">
                <button
                  className="bg-white text-black px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                  aria-label="Play Video"
                >
                  ▶ Play
                </button>
              </div>
            </div>
            <div className="text-center py-3 px-6">
              <h1 className="text-2xl xl:text-3xl font-semibold mb-1 text-gray-900 break-words">
              If Your Video Is Bad, I'll End You!
              </h1>
              <h2 className="text-lg xl:text-xl font-medium text-gray-500 mb-2">
                ironmouse
              </h2>
              <div className="flex justify-center items-center text-gray-500 text-sm">
                <span className="mr-2">👁 237K views</span>
                <span>•</span>
                <span className="ml-2"> 13k likes</span>
              </div>
            </div>
          </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
