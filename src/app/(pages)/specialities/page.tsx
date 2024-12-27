"use client";

import React  from 'react';
import ButtonSecondery from './../../../components/common/ButtonSecondery';


const SplecialitiesPage: React.FC = () => {

  return (
    <section className="container mx-auto p-12">

      <p className="font-bold">دکتردکتر - لیست تخصص های پزشکی فعال</p>

      <div className="py-12">

        <div className="flex items-center justify-between gap-8">
           <div className="basis-3/4">
             <p className="font-bold py-4">اطفال</p>
             <div className="line-clamp-2">
                برای آبله‌مرغان، دیابت کودکان،
                سرماخوردگی، عفونت در اطفال و... به متخصص کودکان مراجعه می‌شود.
                متخصصان اطفال با معاینه کودکان و ارزیابی وضعیتشان
                دست به تجویز دارو و درمان وضعیت‌های مختلف می‌زنند. 
                دریافت نوبت متخصص اطفال و نوزادان
                متخصصان اطفال با معاینه کودکان و ارزیابی وضعیتشان
                دست به تجویز دارو و درمان وضعیت‌های مختلف می‌زنند. 
                دریافت نوبت متخصص اطفال و نوزادان
             </div>
           </div>
           <div className="basis-1/4 text-center flex flex-col justify-between">
             <div className="flex items-center justify-between space-x-3 relative overflow-auto p-8">
               <div className="flex justify-center -space-x-3 font-mono text-white text-sm font-bold leading-6">
                  <div className="z-30 w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white">04</div>
                  <div className="z-20 w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white">03</div>
                  <div className="z-10 w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white">02</div>
                  <div className="z-0 w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white">01</div>
               </div>
               <span className="opacity-50 font-sm">+445</span>
             </div>
             <ButtonSecondery label={"مشاهده پزشکان"} onClick={() => console.log("hhh")}/>
           </div>
        </div>

        <div className="flex items-center justify-between gap-8">
           <div className="basis-3/4">
             <p className="font-bold py-4">اطفال</p>
             <div className="line-clamp-2">
                برای آبله‌مرغان، دیابت کودکان،
                سرماخوردگی، عفونت در اطفال و... به متخصص کودکان مراجعه می‌شود.
                متخصصان اطفال با معاینه کودکان و ارزیابی وضعیتشان
                دست به تجویز دارو و درمان وضعیت‌های مختلف می‌زنند. 
                دریافت نوبت متخصص اطفال و نوزادان
                متخصصان اطفال با معاینه کودکان و ارزیابی وضعیتشان
                دست به تجویز دارو و درمان وضعیت‌های مختلف می‌زنند. 
                دریافت نوبت متخصص اطفال و نوزادان
             </div>
           </div>
           <div className="basis-1/4 text-center flex flex-col justify-between">
             <div className="flex items-center justify-between space-x-3 relative overflow-auto p-8">
               <div className="flex justify-center -space-x-3 font-mono text-white text-sm font-bold leading-6">
                  <div className="z-30 w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white">04</div>
                  <div className="z-20 w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white">03</div>
                  <div className="z-10 w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white">02</div>
                  <div className="z-0 w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white">01</div>
               </div>
               <span className="opacity-50 font-sm">+445</span>
             </div>
             <ButtonSecondery label={"مشاهده پزشکان"} onClick={() => console.log("hhh")}/>
           </div>
        </div>

      </div>
    </section>
  )
}

export default SplecialitiesPage;
