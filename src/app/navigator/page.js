"use client"
import Image from "next/image";
import { useState } from "react";
  


export default function Page() {
    
    const [text, setText] = useState("Hello there!, I'm JJ. Feel free to look around ^ ^")
    const [img, setImg] = useState("/navigator_normal.gif")

    
    return (
        <div>
            <h1 id = "header">{text}</h1>
            
            <Image
                id= "Navigator"
                src={img}
                width={300}
                height={300}
                alt="navigator"
            />
        </div>
        
    );

function SetExpression(expression,text){
    

    // switch(expression){
    //     case "idle":
    //         setImg("/navigator_normal.gif");
    //         alert("yay")
    //     case "confused":
    //         setImg("/navigator_snoot_recovery.gif");
    // }
        if(expression == "confused"){
            setImg("/navigator_snoot_recovery.gif");
        }
        else if(expression == "idle"){
            setImg("/navigator_normal.gif");
        }
        else if(expression == "happy"){
            setImg("/navigator_smile.png");
        }
        setText(text)
    }  
}
