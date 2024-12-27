"use client";


import React from "react";
import Link from "next/link";
import ArrowLeft from './../icons/ArrowLeft';
import HeaderSection from './../common/HeaderSection';
import Image from "next/image";
// import Transition from './../../app/Transition';




const Magazin: React.FC = () => {


  return (
    <div className="container mx-auto py-12">


        <HeaderSection Header={"مجله‌ سلامت"} Description={"آخرین مطالب مجله‌ سلامت دکتر دکتر" } ShowMore={"مشاهده همه"}/>


        <div className="grid grid-cols-5 grid-rows-5 gap-4 min-h-[500px]">

            {/* content 1 */}
            <div className="row-start-2 row-end-5 p-2 border-2 text-center rounded-md shadow-md">
                
                <Image src="/images/magazine/mag1.jpg" width={200} height={100} className="w-full h-[100px] rounded-md object-cover" alt="doctor" />
               
               <div className="flex flex-col gap-2 text-center font-semibold">
                    <p className="truncate px-8 text-md py-2">11111</p>
                </div>
                <div className="opacity-60 border-dotted border-t-2 text-xs text-right py-4 flex items-center justify-around">
                   <p> 25 مهر 1402</p>
                    <Link href="/" className="flex items-center gap-2 text-primary-default hover:opacity-70">
                        مطالعه مقاله
                        <ArrowLeft />
                    </Link>
                </div>

            </div>

            {/* content 2 */}
            <div className="row-start-1 row-end-4 p-2 border-2 text-center rounded-md">

                <Image src="/images/magazine/mag2.png" width={200} height={100} className="w-full h-[100px] rounded-md object-cover" alt="doctor" />

               <div className="flex flex-col gap-2 text-center font-semibold">
                    <p className="truncate px-8 text-md py-2">222222</p>
                </div>
                <div className="opacity-60 border-dotted border-t-2 text-xs text-right py-4 flex items-center justify-around">
                   <p> 25 مهر 1402</p>
                    <Link href="/" className="flex items-center gap-2 text-primary-default hover:opacity-70">
                        مطالعه مقاله
                        <ArrowLeft />
                    </Link>
                </div>
            </div>


            {/* content 3 */}
            <div className="col-start-2 row-start-4 row-end-6 p-2 border-2 text-center rounded-md">

                <Image src="/images/magazine/mag3.png" width={200} height={100} className="w-full h-[100px] rounded-md object-cover" alt="doctor" />

               
               <div className="flex flex-col gap-2 text-center font-semibold">
                    <p className="truncate px-8 text-md py-2">33333</p>
                </div>
                <div className="opacity-60 border-dotted border-t-2 text-xs text-right py-4 flex items-center justify-around">
                   <p> 25 مهر 1402</p>
                    <Link href="/" className="flex items-center gap-2 text-primary-default hover:opacity-70">
                        مطالعه مقاله
                        <ArrowLeft />
                    </Link>
                </div>
            </div>

            {/* content 4 */}
            <div className="col-start-3 row-start-2 row-end-5 p-2 border-2 text-center rounded-md">

                <Image src="/images/magazine/mag4.png" width={200} height={100} className="w-full h-[100px] rounded-md object-cover" alt="doctor" />

               
               <div className="flex flex-col gap-2 text-center font-semibold">
                    <p className="truncate px-8 text-md py-2">4444</p>
                </div>
                <div className="opacity-60 border-dotted border-t-2 text-xs text-right py-4 flex items-center justify-around">
                   <p> 25 مهر 1402</p>
                    <Link href="/" className="flex items-center gap-2 text-primary-default hover:opacity-70">
                        مطالعه مقاله
                        <ArrowLeft />
                    </Link>
                </div>
            </div>


       
            {/* content 5 */}
            <div className="col-start-4 row-start-1 row-end-4 p-2 border-2 text-center rounded-md">

                <Image src="/images/magazine/mag5.png" width={200} height={100} className="w-full h-[100px] rounded-md object-cover" alt="doctor" />

               
               <div className="flex flex-col gap-2 text-center font-semibold">
                    <p className="truncate px-8 text-md py-2">5555</p>
                </div>
                <div className="opacity-60 border-dotted border-t-2 text-xs text-right py-4 flex items-center justify-around">
                   <p> 25 مهر 1402</p>
                    <Link href="/" className="flex items-center gap-2 text-primary-default hover:opacity-70">
                        مطالعه مقاله
                        <ArrowLeft />
                    </Link>
                </div>
            </div>


            {/* content 6 */}
            <div className="col-start-4 row-start-4 row-end-6 p-2 border-2 text-center rounded-md">

              <Image src="/images/magazine/mag6.jpeg" width={200} height={100} className="w-full h-[100px] rounded-md object-cover" alt="doctor" />

               
               <div className="flex flex-col gap-2 text-center font-semibold">
                    <p className="truncate px-8 text-md py-2">6666</p>
                </div>
                <div className="opacity-60 border-dotted border-t-2 text-xs text-right py-4 flex items-center justify-around">
                   <p> 25 مهر 1402</p>
                    <Link href="/" className="flex items-center gap-2 text-primary-default hover:opacity-70">
                        مطالعه مقاله
                        <ArrowLeft />
                    </Link>
                </div>
            </div>


            {/* content 7 */}
            <div className="col-start-5 row-start-2 row-end-5 p-2 border-2 text-center rounded-md">

               <Image src="/images/magazine/mag7.jpeg" width={200} height={100} className="w-full h-[100px] rounded-md object-cover" alt="doctor" />

               
               <div className="flex flex-col gap-2 text-center font-semibold">
                    <p className="truncate px-8 text-md py-2">7777</p>
                </div>

                <div className="opacity-60 border-dotted border-t-2 text-xs text-right py-4 flex items-center justify-around">
                   <p> 25 مهر 1402</p>
                    <Link href="/" className="flex items-center gap-2 text-primary-default hover:opacity-70">
                        مطالعه مقاله
                        <ArrowLeft />
                    </Link>
                </div>
            </div>

      
        </div>

 
    </div>
  )
}

export default Magazin
