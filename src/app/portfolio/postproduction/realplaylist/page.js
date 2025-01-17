"use client"

import Image from "next/image";
import {Navigator,updateExpression} from '/src/app/navigator/page.js';
import { redirect } from 'next/navigation'
import { useState , useEffect } from "react"

export default function Home() {
  const [youtubeEmbed, setYoutubeEmbed] = useState("https://www.youtube.com/embed/AEv02RYOwX0?si=ciFDQXirRNFGYHS7")
  
  const [hideTool, sethideTool] = useState("transition ease-in-out delay-50 h-0 w-0 object-contain opacity-100 group-hover:opacity-100 transition duration-300")
  const [showTool, setshowTool] = useState("transition ease-in-out delay-50 h-20 w-20 object-contain opacity-100 group-hover:opacity-100 transition duration-300")
  const [davinciresolve, setDavinciResolve] = useState("transition ease-in-out delay-50 h-0 w-0 object-contain opacity-100 group-hover:opacity-100 transition duration-300")
  const [premierepro, setPremierePro] = useState("transition ease-in-out delay-50 h-20 w-20 object-contain opacity-100 group-hover:opacity-100 transition duration-300")
  const [aftereffect, setAfterEffect] = useState("transition ease-in-out delay-50 h-20 w-20 object-contain opacity-100 group-hover:opacity-100 transition duration-300")
  const [gimp, setGimp] = useState("transition ease-in-out delay-50 h-20 w-20 object-contain opacity-100 group-hover:opacity-100 transition duration-300")

  const [videos, setVideos] = useState([]);

  const fetchPlaylistVideos = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLDLCHs26Pdrf2SyYkULnSTCyEOiJH-QYY&key=AIzaSyBRLUKsTUMFogIUK4AoqYVqzwRaakyWxBM"
      );
      const data = await response.json();
      const videoData = data.items.map((item) => ({
        link: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,
        thumbnail: `https://img.youtube.com/vi/${item.snippet.resourceId.videoId}/maxresdefault.jpg`,
        title: item.snippet.title,
        creator: item.snippet.channelTitle,
        views: "N/A", // Views and likes require additional API calls
        likes: "N/A",
        duration: "N/A",
        toolset: "toolset1",
      }));
      setVideos(videoData);
    } catch (error) {
      console.error("Error fetching playlist videos:", error);
    }
  };

  useEffect(() => {
    fetchPlaylistVideos();
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function handleClick(link, toolset) {
    setYoutubeEmbed(link);
    handleScrollToTop();

    if (toolset === "toolset1") {
      setDavinciResolve(hideTool);
      setPremierePro(showTool);
      setAfterEffect(showTool);
      setGimp(showTool);
    } else if (toolset === "toolset2") {
      setDavinciResolve(showTool);
      setPremierePro(hideTool);
      setAfterEffect(hideTool);
      setGimp(showTool);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center font-ibmplex custom-div">
      <div className="grid h-full w-full grid-cols-1 md:grid-cols-10 md:grid-rows-8 gap-5 p-5 md:p-10">
        <div className="transition ease-in-out delay-50 hover:scale-105 bg-[#DBD3D3] hover:bg-[#EC8305] opacity-90 hover:opacity-100 hover:shadow-2xl h-full w-full 
            col-span-1 md:col-span-2 md:row-span-2 grids-cols-2 grid-rows-2 p-5 md:p-10 gap-4 rounded-md shadow-md cursor-pointer" 
            onMouseEnter={() => updateExpression("happy","You can see all of my really cool work over there ;D")} 
            onMouseLeave={() => updateExpression("idle","test")}
            onClick={() => redirect('/portfolio')}>
          <h1 className="text-left text-3xl md:text-4xl xl:text-5xl gap-10">Back</h1>
          <h1 className="text-left text-lg md:text-xl xl:text-3xl gap-10">to the portfolio selection</h1>
        </div>

        <div className="transition ease-in-out delay-50 hover:scale-105 bg-[#DBD3D3] hover:bg-[#EC8305] opacity-90 hover:opacity-100 hover:shadow-2xl h-full w-full 
            col-span-1 md:col-span-2 md:row-span-2 grids-cols-2 grid-rows-2 p-5 md:p-10 gap-4 rounded-md shadow-md cursor-pointer" 
            onMouseEnter={() => updateExpression("happy","You can see all of my really cool work over there ;D")} 
            onMouseLeave={() => updateExpression("idle","test")}
            onClick={() => redirect('https://youtube.com/playlist?list=PLDLCHs26Pdrf2SyYkULnSTCyEOiJH-QYY&si=De41KbcehTln22hf')}>
          <h1 className="text-left text-3xl md:text-4xl xl:text-5xl gap-10">See full playlist</h1>
          <h1 className="text-left text-lg md:text-xl xl:text-3xl gap-10">on Youtube</h1>
        </div>

        <div className="transition ease-in-out delay-50 w-full relative mx-auto h-64 md:h-auto overflow-hidden rounded-lg col-span-1 md:col-span-6 md:row-span-3 group shadow-lg hover:shadow-xl cursor-pointer h_iframe">
          <iframe className="rounded-md shadow-md w-full h-full min-h-64" src={youtubeEmbed} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <div className="group transition ease-in-out delay-50 bg-[#DBD3D3] hover:bg-[#EC8305] opacity-90 hover:opacity-100 hover:shadow-2xl h-full w-full 
            col-span-1 md:col-span-4 md:row-span-1 grids-cols-2 grid-rows-2 p-5 md:p-10 gap-4 rounded-md shadow-md">
          <h1 className="transition ease-in-out delay-50 text-center text-3xl md:text-4xl xl:text-4xl gap-10 group-hover:scale-75 group-hover:opacity-0">
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

        <div className="transition ease-in-out delay-50 w-full relative mx-auto h-full overflow-hidden rounded-lg col-span-1 md:col-span-10 md:row-span-5 group shadow-lg hover:shadow-xl h_iframe">
          <h1 className="text-center text-3xl md:text-4xl xl:text-3xl py-10">More videos that I edited!</h1>
          <div className="grid h-auto w-full grid-cols-1 md:grid-cols-10 md:grid-rows-5 gap-5 py-3 px-5">
            {videos.map((video, index) => (
              <div key={index} className="transition-all duration-300 w-full relative mx-auto h-auto overflow-hidden rounded-lg col-span-1 md:col-span-2 md:row-span-2 group shadow-lg hover:shadow-2xl cursor-pointer h_iframe"
                onClick={() => handleClick(video.link, video.toolset)}>
                <div className="relative">
                  <img
                    className="rounded-lg shadow-lg w-full h-full object-cover"
                    src={video.thumbnail}
                    alt={video.title}
                    title={video.title}
                  />
                  <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs font-semibold py-1 px-2 rounded-md">
                    {video.duration}
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
                  <h1 className="text-xl md:text-2xl xl:text-3xl font-semibold mb-1 text-gray-900 break-words">
                    {video.title}
                  </h1>
                  <h2 className="text-base md:text-lg xl:text-xl font-medium text-gray-500 mb-2">
                    {video.creator}
                  </h2>
                  <div className="flex justify-center items-center text-gray-500 text-sm">
                    <span className="mr-2">👁 {video.views} views</span>
                    <span>•</span>
                    <span className="ml-2"> {video.likes} likes</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
