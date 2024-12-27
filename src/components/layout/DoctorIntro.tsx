"use client";

import React from "react";
import Link from "next/link";
import HeaderSection from './../common/HeaderSection';
import Image from "next/image";
import Star from './../icons/Star';
import ButtonSecondery from "../common/ButtonSecondery";


const DoctorIntro: React.FC = () => {

  return (
    <div className="container mx-auto">


        <HeaderSection Header={"معرفی پزشکان"} Description={"نوبت‌دهی اینترنتی و رایگان از پزشکان سراسر ایران"} ShowMore={"مشاهده همه پزشکان"} />

       <div className="grid grid-cols-4 gap-4 text-secondery-default">

            <Link href="/" className="bg-white text-center custom-box-shadow border-primary-default flex flex-col justify-between text-right gap-2 rounded-md p-8 cursor-pointer">
                <div className="flex items-center justify-center">
                    <span className="relative right-[12px] -top-[25px] flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <Image src="/images/doctor1.webp" className="rounded-full ring-4 ring-primary-default" width={80} height={80} alt="doctor" />
                </div>

               
        

               <div className="flex flex-col gap-2 text-center font-semibold">
                   <p className="text-primary-default">دکتر علی ناطقی</p>
                   <p className="truncate px-8 opacity-60 text-sm">تخصص کودکان و نوزادان و بزرگسالان/نوزادان و بزرگسالان</p>
                   <div className="flex items-start justify-center opacity-60 text-sm">
                        <Star />
                        <span>4.8</span>
                        <span>(435نظر)</span>
                    </div>
                    <div className="opacity-60 text-sm">شیراز</div>
               </div>

                <ButtonSecondery label={"دریافت نوبت"} onClick={() => console.log()} />
            </Link>

            
            <Link href="/" className="bg-white text-center custom-box-shadow border-primary-default flex flex-col justify-between text-right gap-2 rounded-md p-8 cursor-pointer">
                <div className="flex items-center justify-center">
                    <Image src="/images/doctor2.webp" className="rounded-full ring-4 ring-primary-default" width={80} height={80} alt="doctor" />
                </div>
               
        

               <div className="flex flex-col gap-2 text-center font-semibold">
                   <p className="text-primary-default">دکتر علی ناطقی</p>
                   <p className="truncate px-8 opacity-60 text-sm">تخصص کودکان و نوزادان و بزرگسالان</p>
                   <div className="flex items-start justify-center opacity-60 text-sm">
                        <Star />
                        <span>4.8</span>
                        <span>(435نظر)</span>
                    </div>
                    <div className="opacity-60 text-sm">شیراز</div>
               </div>

               <ButtonSecondery label={"دریافت نوبت"} onClick={() => console.log()} />

            </Link>

            
            <Link href="/" className="bg-white text-center custom-box-shadow border-primary-default flex flex-col justify-between text-right gap-2 rounded-md p-8 cursor-pointer">
                <div className="flex items-center justify-center">
                    <span className="relative right-[12px] -top-[25px] flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <Image src="/images/doctor3.webp" className="rounded-full ring-4 ring-primary-default" width={80} height={80} alt="doctor" />
                </div>
               
        

               <div className="flex flex-col gap-2 text-center font-semibold">
                   <p className="text-primary-default">دکتر علی ناطقی</p>
                   <p className="truncate px-8 opacity-60 text-sm">تخصص کودکان و نوزادان و بزرگسالان</p>
                   <div className="flex items-start justify-center opacity-60 text-sm">
                        <Star />
                        <span>4.8</span>
                        <span>(435نظر)</span>
                    </div>
                    <div className="opacity-60 text-sm">شیراز</div>
               </div>

                <ButtonSecondery label={"دریافت نوبت"} onClick={() => console.log()} />
            </Link>


            <Link href="/" className="bg-white text-center custom-box-shadow border-primary-default flex flex-col justify-between text-right gap-2 rounded-md p-8 cursor-pointer">
                <div className="flex items-center justify-center">
                    <Image src="/images/doctor4.webp" className="rounded-full ring-4 ring-primary-default" width={80} height={80} alt="doctor" />
                </div>
               
        

               <div className="flex flex-col gap-2 text-center font-semibold">
                   <p className="text-primary-default">دکتر علی ناطقی</p>
                   <p className="truncate px-8 opacity-60 text-sm">تخصص کودکان و نوزادان و بزرگسالان</p>
                   <div className="flex items-start justify-center opacity-60 text-sm">
                        <Star />
                        <span>4.8</span>
                        <span>(435نظر)</span>
                    </div>
                    <div className="opacity-60 text-sm">شیراز</div>
               </div>

                <ButtonSecondery label={"دریافت نوبت"} onClick={() => console.log()} />
            </Link>
       

      </div> 

    </div>
  )
}

export default DoctorIntro;



