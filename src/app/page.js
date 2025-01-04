"use client"

import Image from "next/image";
import {Navigator,updateExpression} from './navigator/page';

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="grid h-full w-full grid-cols-10 grid-rows-8 gap-5 p-10">
        <div className="col-span-10 row-span-5 xl:col-span-5 xl:row-span-8 bg-indigo-200 h-full w-full grids-cols-4 grid-rows-3 p-10 gap-4">Summary</div>
        <div className="xl:col-span-3 xl:row-span-4 bg-indigo-200 h-full w-full grids-cols-4 grid-rows-3 p-10 gap-4">Portfolio</div>
        <div className="xl:col-span-2 xl:row-span-2 bg-indigo-200 h-full w-full grids-cols-4 grid-rows-3 p-10 gap-4">Skills</div>
        <div className="xl:col-span-2 xl:row-span-2 bg-indigo-200 h-full w-full grids-cols-4 grid-rows-3 p-10 gap-4">Tools</div>
        <div className="xl:col-span-5 xl:row-span-2 bg-indigo-200 h-full w-full grids-cols-4 grid-rows-3 p-10 gap-4">Something interesting</div>
        <div className="xl:col-span-2 xl:row-span-2 bg-indigo-200 h-full w-full grids-cols-4 grid-rows-3 p-10 gap-4">Links</div>
        <div className="xl:col-span-3 xl:row-span-2 bg-indigo-200 h-full w-full grids-cols-4 grid-rows-3 p-10 gap-4">Contacts</div>
      </div>
    </div>
  );
}
