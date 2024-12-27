"use client";


import React from 'react';
import HeaderSection from './../common/HeaderSection';
import Link from "next/link";
import ArrowLeft from '../icons/ArrowLeft';
import Image from "next/image";


const Services: React.FC = () => {

  return (
    <div className="container mx-auto py-12">


        <HeaderSection Header={"در چه تخصصی به دنبال پزشک هستید؟"} 
            Description={"نوبت‌دهی اینترنتی و رایگان از پزشکان سراسر ایران"} 
            ShowMore={"مشاهده همه تخصص ها"}
        />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-2 text-secondery-default text-sm mt-4">
            <div className="bg-primary-light rounded-lg p-8 custom-box-shadow">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center rounded-full bg-gray-100 w-[80px] h-[80px] rounded-full p-2 bg_selected">
                        <div className="bg-white rounded-full p-2">
                            <Image src="/images/infirmary.png" className="w-full h-[40px] rounded-md object-cover" width={40} height={40} alt="doctor" />
                        </div>
                    </div>
                    <h2 className="py-2 text-md font-bold">اطفال</h2>
                </div>
            </div>
            <div className="bg-primary-light rounded-lg p-8 custom-box-shadow">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center rounded-full bg-gray-100 w-[80px] h-[80px] rounded-full p-2 bg_selected">
                        <div className="bg-white rounded-full p-2">
                            <Image src="/images/infirmary.png" className="w-full h-[40px] rounded-md object-cover" width={40} height={40} alt="doctor" />
                        </div>
                    </div>
                    <h2 className="py-2 text-md font-bold">پوست، مو و زیبایی</h2>
                </div>
            </div>
            <div className="bg-primary-light rounded-lg p-8 custom-box-shadow">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center rounded-full bg-gray-100 w-[80px] h-[80px] rounded-full p-2 bg_selected">
                        <div className="bg-white rounded-full p-2">
                            <Image src="/images/infirmary.png" className="w-full h-[40px] rounded-md object-cover" width={40} height={40} alt="doctor" />
                        </div>
                    </div>
                    <h2 className="py-2 text-md font-bold">چشم</h2>
                </div>
            </div>
            <div className="bg-primary-light rounded-lg p-8 custom-box-shadow">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center rounded-full bg-gray-100 w-[80px] h-[80px] rounded-full p-2 bg_selected">
                        <div className="bg-white rounded-full p-2">
                            <Image src="/images/infirmary.png" className="w-full h-[40px] rounded-md object-cover" width={40} height={40} alt="doctor" />
                        </div>
                    </div>
                    <h2 className="py-2 text-md font-bold">ارتوپدی</h2>
                </div>
            </div>

            <div className="bg-primary-light rounded-lg p-8 custom-box-shadow">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center rounded-full bg-gray-100 w-[80px] h-[80px] rounded-full p-2 bg_selected">
                        <div className="bg-white rounded-full p-2">
                            <Image src="/images/infirmary.png" className="w-full h-[40px] rounded-md object-cover" width={40} height={40} alt="doctor" />
                        </div>
                    </div>
                    <h2 className="py-2 text-md font-bold">گوش، حلق و بینی</h2>
                </div>
            </div>

            <div className="bg-primary-light rounded-lg p-8 custom-box-shadow">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center rounded-full bg-gray-100 w-[80px] h-[80px] rounded-full p-2 bg_selected">
                        <div className="bg-white rounded-full p-2">
                            <Image src="/images/infirmary.png" className="w-full h-[40px] rounded-md object-cover" width={40} height={40} alt="doctor" />
                        </div>
                    </div>
                    <h2 className="py-2 text-md font-bold">ارتوپدی</h2>
                </div>
            </div>
            <div className="bg-primary-light rounded-lg p-8 custom-box-shadow">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center rounded-full bg-gray-100 w-[80px] h-[80px] rounded-full p-2 bg_selected">
                        <div className="bg-white rounded-full p-2">
                            <Image src="/images/infirmary.png" className="w-full h-[40px] rounded-md object-cover" width={40} height={40} alt="doctor" />
                        </div>
                    </div>
                    <h2 className="py-2 text-md font-bold">چشم</h2>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Services;
