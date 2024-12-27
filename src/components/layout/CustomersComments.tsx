"use client";


import React from "react";
import Link from "next/link";
import HeaderSection from './../common/HeaderSection';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper styles
import 'swiper/css/navigation'; // Navigation module styles
import 'swiper/css/pagination'; // Pagination module styles

import { Navigation, Pagination } from 'swiper/modules';
import ArrowLeft from './../icons/ArrowLeft';



const CustomersComments: React.FC = () => { 

  return (
    <div className="container mx-auto py-12">


        <HeaderSection Header={"نظرات کاربران دکتردکتر"} Description={"بیش از ۷ میلیون کاربر از خدمات دکتردکتر استفاده کرده‌اند"} />

        <div className="bg_hero text-center flex items-center justify-center bg-secondery-default rounded-md text-white p-4 mx-8">

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                // className=""
                >
                <SwiperSlide>
                    <div className="py-4 m-4">
                        <div className="py-4 px-2 bg-secondery-light rounded-md text-white shadow-sm">
                            <div className="py-4 px-3">
                                <div className="flex items-start gap-4">
                                    <div className="relative -top-12 h-[100px] overflow-hidden rounded-md">
                                        <Image src="/images/user1.png" className="filter grayscale" width={90} height={90} alt="doctor" />
                                    </div>
                                    <div className="flex flex-col items-center justify-between gap-2">
                                        <h5>بهناز خرم</h5>
                                        <span className="opacity-50 text-sm">15 مهر 1402</span>
                                    </div>
                                </div>
                                <p className="opacity-70 leading-6 text-sm text-justify line-clamp-4 text-right mb-4 px-4">
                                برای عمل زیبایی بینی خدمت دکتر بهنام خرمی آمدم 
                                و خیلی راضی هستم 
                                چون مشکل تنفسی هم همراه با جراحی درمانی و زیبایی حل شد
                                </p>
                                <p className="border-dashed border-t opacity-60 text-sm py-4">مراجعه به دکتر بهنام خرمی </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="py-4 m-4">
                        <div className="py-4 px-2 bg-secondery-light rounded-md text-white shadow-sm">
                            <div className="py-4 px-3">
                                <div className="flex items-start gap-4">
                                    <div className="relative -top-12 h-[100px] overflow-hidden rounded-md">
                                        <Image src="/images/user1.png" className="filter grayscale" width={90} height={90} alt="doctor" />
                                    </div>
                                    <div className="flex flex-col items-center justify-between gap-2">
                                        <h5>بهناز خرم</h5>
                                        <span className="opacity-50 text-sm">15 مهر 1402</span>
                                    </div>
                                </div>
                                <p className="opacity-70 leading-6 text-sm text-justify line-clamp-4 text-right mb-4 px-4">
                                واقعا دکترتو دسترسی به پزشک‌ها رو خیلی راحت کرده مخصوصا اینکه ما 
                                میتونیم نظر بقیه بیمارا رو هم راجع‌ به دکتربدونیم. کارتون عالیه
                                میتونیم نظر بقیه بیمارا رو هم راجع‌ به دکتربدونیم. کارتون عالیه
                                </p>
                                <p className="border-dashed border-t opacity-60 text-sm py-4">مراجعه به دکتر بهنام خرمی </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="py-4 m-4">
                        <div className="py-4 px-2 bg-secondery-light rounded-md text-white shadow-sm">
                            <div className="py-4 px-3">
                                <div className="flex items-start gap-4">
                                    <div className="relative -top-12 h-[100px] overflow-hidden rounded-md">
                                        <Image src="/images/user1.png" className="filter grayscale" width={90} height={90} alt="doctor" />
                                    </div>
                                    <div className="flex flex-col items-center justify-between gap-2">
                                        <h5>بهناز خرم</h5>
                                        <span className="opacity-50 text-sm">15 مهر 1402</span>
                                    </div>
                                </div>
                                <p className="opacity-70 leading-6 text-sm text-justify line-clamp-4 text-right mb-4 px-4">
                                برای عمل زیبایی بینی خدمت دکتر بهنام خرمی آمدم 
                                و خیلی راضی هستم 
                                چون مشکل تنفسی هم همراه با جراحی درمانی و زیبایی حل شد
                                </p>
                                <p className="border-dashed border-t opacity-60 text-sm py-4">مراجعه به دکتر بهنام خرمی </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="py-4 m-4">
                        <div className="py-4 px-2 bg-secondery-light rounded-md text-white shadow-sm">
                            <div className="py-4 px-3">
                                <div className="flex items-start gap-4">
                                    <div className="relative -top-12 h-[100px] overflow-hidden rounded-md">
                                        <Image src="/images/user1.png" className="filter grayscale" width={90} height={90} alt="doctor" />
                                    </div>
                                    <div className="flex flex-col items-center justify-between gap-2">
                                        <h5>بهناز خرم</h5>
                                        <span className="opacity-50 text-sm">15 مهر 1402</span>
                                    </div>
                                </div>
                                <p className="opacity-70 leading-6 text-sm text-justify line-clamp-4 text-right mb-4 px-4">
                                برای عمل زیبایی بینی خدمت دکتر بهنام خرمی آمدم 
                                و خیلی راضی هستم 
                                چون مشکل تنفسی هم همراه با جراحی درمانی و زیبایی حل شد
                                </p>
                                <p className="border-dashed border-t opacity-60 text-sm py-4">مراجعه به دکتر بهنام خرمی </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                
                <SwiperSlide>
                    <div className="py-4 m-4">
                        <div className="py-4 px-2 bg-secondery-light rounded-md text-white shadow-sm">
                            <div className="py-4 px-3">
                                <div className="flex items-start gap-4">
                                    <div className="relative -top-12 h-[100px] overflow-hidden rounded-md">
                                        <Image src="/images/user1.png" className="filter grayscale" width={90} height={90} alt="doctor" />
                                    </div>
                                    <div className="flex flex-col items-center justify-between gap-2">
                                        <h5>بهناز خرم</h5>
                                        <span className="opacity-50 text-sm">15 مهر 1402</span>
                                    </div>
                                </div>
                                <p className="opacity-70 leading-6 text-sm text-justify line-clamp-4 text-right mb-4 px-4">
                                برای عمل زیبایی بینی خدمت دکتر بهنام خرمی آمدم 
                                و خیلی راضی هستم 
                                چون مشکل تنفسی هم همراه با جراحی درمانی و زیبایی حل شد
                                </p>
                                <p className="border-dashed border-t opacity-60 text-sm py-4">مراجعه به دکتر بهنام خرمی </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
                
        </div>


    </div>
  )
}

export default CustomersComments;
