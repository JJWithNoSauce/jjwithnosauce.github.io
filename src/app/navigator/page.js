"use client"
import Image from "next/image";
import { useState } from "react";
  


export default function Page() {
    
    const [text, setText] = useState("Hello")
    
    return (
        <div>
            <h1 id = "header">{text}</h1>
            <Image
                id= "img1"
                src="/25231.png"
                width={300}
                height={300}
                alt="github"
                onMouseEnter={() => setText("Hovering")}
                onMouseLeave={() => setText("Not Hovering")}
            />
        </div>
    );
  }