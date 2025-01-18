"use client"
import Image from "next/image";
import { useState , useEffect } from "react";
  
const navimg = ["/navigator_normal.gif","/navigator_smile.png","/navigator_snoot_recovery.gif"]
let currentEmotion = "idle"
let currentText = ""

export default function Page() {
    
    const [text, setText] = useState("")
    const [img, setImg] = useState("/navigator_normal.gif")
    const [emotion, setEmo] = useState("idle")


    useEffect(() => {
        const interval = setInterval(() => {
            console.log("ran interval")
            if (emotion != currentEmotion) {
                setExpression(currentEmotion);
                setEmo(currentEmotion)
                setText(currentText)
                console.log("set Expression", emotion , img)
            }
            // if (text != currentText){
                
            // }
        }, 100); // Check every 100 milliseconds

        // Cleanup function to clear the interval on component unmount
        return () => clearInterval(interval);
    }, [emotion, currentEmotion]); // Dependencies to re-run the effect if these values change
    
    return (
        <div className="navigator-div transition ease-in-out delay-50 hover:scale-110">
            
            <Image
                id="Navigator"
                src={img}
                width={500}
                height={500}
                alt="navigator"
                className="transition ease-in-out delay-50 xl:w-3/5 xl:h-3/5 sm:w-1/4 sm:h-1/4 md:w-2/4 md:h-2/4 xs:w-1/4 xs:h-1/4 h-1/4 w-1/4"
            />
            <div className="dialogue-div relative cursor-pointer dark:text-white">
                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
                <div
                    class="relative p-6 bg-white dark:bg-gray-800 border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
                    <div class="flex items-center">
                        <span class="text-xl">❤️</span>
                        <h3 class="my-2 ml-3 text-lg font-bold text-gray-800 dark:text-white">JJWithNoSauce</h3>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300">
                        {text}
                    </p>
                </div>
            </div>
        </div>
        
    );


    function setExpression(expression){
        if(expression == "confused"){
            setImg(navimg[2])
        }
        else if(expression == "idle"){
            setImg(navimg[0])
        }
        else if(expression == "happy"){
            setImg(navimg[1])
        }
    } 
}

export function updateExpression(expression,text){
    currentEmotion = expression
    currentText = text
    console.log(currentEmotion , currentText)
}
