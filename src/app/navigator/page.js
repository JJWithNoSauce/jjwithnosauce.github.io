"use client"
import Image from "next/image";
import { useState , useEffect } from "react";
  
const navimg = ["/navigator_normal.gif","/navigator_smile.png","/navigator_snoot_recovery.gif"]
let currentEmotion = "idle"
let currentText = "Hello there!, I'm JJ. Feel free to look around ^ ^"

export default function Page() {
    
    const [text, setText] = useState("Hello there!, I'm JJ. Feel free to look around ^ ^")
    const [img, setImg] = useState("/navigator_normal.gif")
    const [emotion, setEmo] = useState("idle")


    useEffect(() => {
        const interval = setInterval(() => {
            console.log("ran interval")
            if (emotion != currentEmotion) {
                setExpression(currentEmotion);
                setEmo(currentEmotion)
                console.log("set Expression", emotion , img)
            }
            // if (text != currentText){
                
            // }
        }, 100); // Check every 100 milliseconds

        // Cleanup function to clear the interval on component unmount
        return () => clearInterval(interval);
    }, [emotion, currentEmotion]); // Dependencies to re-run the effect if these values change
    
    return (
        <div className="h-1/3 w-1/3 xl:h-full xl:w-full">
            <h1 id = "dialogue">{text}</h1>
            
            <Image
                id= "Navigator"
                src={img}
                width={300}
                height={300}
                alt="navigator"
            />
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
