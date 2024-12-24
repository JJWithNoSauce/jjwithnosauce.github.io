"use client"
import Image from "next/image";
import { useState } from "react";
  
const navimg = ["/navigator_normal.gif","/navigator_smile.png","/navigator_snoot_recovery.gif"]
let currentEmotion = "happy"
let currentText = "Hello there!, I'm JJ. Feel free to look around ^ ^"

export default function Page() {
    
    const [text, setText] = useState("Hello there!, I'm JJ. Feel free to look around ^ ^")
    const [img, setImg] = useState("/navigator_normal.gif")
    const [emotion, setEmo] = useState("happy")

    
    return (
        <div>
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
    
    // function detectChange(){
    //     while(true){detectChange()
    //         if(emotion != currentEmotion){
    //             alert(detected)
    //             setExpression(currentEmotion)
    //         }
    //     }
    // }
    
}

export function updateExpression(expression,text){
    currentEmotion = expression
    currentText = text
    alert("updateExpression called")
}
