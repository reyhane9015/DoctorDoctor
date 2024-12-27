
import React from "react";
import Link from "next/link";
import ArrowLeft from '../icons/ArrowLeft';
import Image from "next/image";



const Services: React.FC = () => {

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 lg:px-12 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-secondery-default">


      <div className="bg-primary-light border border-secondery-default h-[270px] flex flex-col justify-between text-right gap-2 lg:gap-8 rounded-[20px_35px_20px_35px] p-8 outline-dashed outline-2 outline-offset-2 hover:outline-offset-4 cursor-pointer">
          <h2 className="font-semibold text-xl text-primary-default">دریافت نوبت حضوری</h2>
          <p className="font-semibold text-sm">دریافت نوبت اینترنتی برای مراجعه حضوری به مطب پزشکان</p>
          <Link href="/" className="flex items-center gap-2 hover:opacity-70">
            لیست پزشکان
            <ArrowLeft />
          </Link>
      </div>

      <div className="bg-primary-light border border-secondery-default h-[270px] flex flex-col justify-between text-right gap-2 lg:gap-8 rounded-[20px_35px_20px_35px] p-8 outline-dashed outline-2 outline-offset-2 hover:outline-offset-4 cursor-pointer">
          <h2 className="font-semibold text-xl text-primary-default">مشاوره تلفنی</h2>
          <p className="font-semibold text-sm">دریافت مشاوره از پزشکان متخصص و مجرب به صورت تلفنی</p>
          <Link href="/" className="flex items-center gap-2 hover:opacity-70">
            لیست پزشکان
            <ArrowLeft />
          </Link>
      </div>

      <div className="bg-primary-light border border-secondery-default h-[270px] flex flex-col justify-between text-right gap-2 lg:gap-8 rounded-[20px_35px_20px_35px] p-8 outline-dashed outline-2 outline-offset-2 hover:outline-offset-4 cursor-pointer">
          <h2 className="font-semibold text-xl text-primary-default">خدمات پزشکی و آزمایش در محل</h2>
          <p className="font-semibold text-sm">دریافت خدمات پزشکی انجام انواع آزمایشات در منزل شما</p>
          <Link href="/" className="flex items-center gap-2 hover:opacity-70">
            لیست پزشکان
            <ArrowLeft />
          </Link>
      </div>

      <div className="bg-primary-light border border-secondery-default h-[270px] flex flex-col justify-between text-right gap-2 lg:gap-8 rounded-[20px_35px_20px_35px] p-8 outline-dashed outline-2 outline-offset-2 hover:outline-offset-4 cursor-pointer">
          <h2 className="font-semibold text-xl text-primary-default">خدمات پزشکی و آزمایش در محل</h2>
          <p className="font-semibold text-sm">دریافت خدمات پزشکی انجام انواع آزمایشات در منزل شما</p>
          <Link href="/" className="flex items-center gap-2 hover:opacity-70">
            لیست پزشکان
            <ArrowLeft />
          </Link>
      </div>



    </div>
  )
}

export default Services
