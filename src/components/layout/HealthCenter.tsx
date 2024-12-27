"use client";


import React from "react";
import HeaderSection from './../common/HeaderSection';
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import TopHealthCenter from './TopHealthCenter';


const HealthCenter: React.FC = () => {


    const [tabIndex, setTabIndex] = useState(0);

    
  return (
    <div className="container mx-auto py-12">


        <HeaderSection Header={"مراکز درمانی"} Description={"نوبت‌دهی اینترنتی و رایگان از پزشکان سراسر ایران"} />

       

        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList className="grid grid-cols-5 gap-4 text-secondery-default">
                <Tab className="bg-white rounded-lg p-8 custom-box-shadow">
                    <div className="flex flex-col items-center justify-center">
                         <div className="flex items-center justify-center rounded-full bg-gray-100 w-[80px] h-[80px] rounded-full p-2 bg_selected">
                            <div className="bg-white rounded-full p-2">
                                <Image src="/images/infirmary.png" className="w-full h-[40px] rounded-md object-cover" width={40} height={40} alt="doctor" />
                            </div>
                        </div>
                        <h2 className="py-2 text-xl font-bold">درمانگاه</h2>
                        <p className="opacity-70 text-sm">37 درمانگاه</p>
                    </div>
                </Tab>

                <Tab className="bg-white rounded-lg p-8 custom-box-shadow">
                    <div className="flex flex-col items-center justify-center">
                         <div className="flex items-center justify-center rounded-full bg-gray-100 w-[80px] h-[80px] rounded-full p-2 bg_selected">
                            <div className="bg-white rounded-full p-2">
                                <Image src="/images/infirmary.png" className="w-full h-[40px] rounded-md object-cover" width={40} height={40} alt="doctor" />
                            </div>
                        </div>
                        <h2 className="py-2 text-xl font-bold">آزمایشگاه</h2>
                        <p className="opacity-70 text-sm">80 آزمایشگاه</p>
                    </div>
                </Tab>

                <Tab className="bg-white rounded-lg p-8 custom-box-shadow">
                    <div className="flex flex-col items-center justify-center">
                         <div className="flex items-center justify-center rounded-full bg-gray-100 w-[80px] h-[80px] rounded-full p-2 bg_selected">
                            <div className="bg-white rounded-full p-2">
                                <Image src="/images/infirmary.png" className="w-full h-[40px] rounded-md object-cover" width={40} height={40} alt="doctor" />
                            </div>
                        </div>
                        <h2 className="py-2 text-xl font-bold">بیمارستان</h2>
                        <p className="opacity-70 text-sm">87 بیمارستان</p>
                    </div>
                </Tab>

                <Tab className="bg-white rounded-lg p-8 custom-box-shadow">
                    <div className="flex flex-col items-center justify-center">
                         <div className="flex items-center justify-center rounded-full bg-gray-100 w-[80px] h-[80px] rounded-full p-2 bg_selected">
                            <div className="bg-white rounded-full p-2">
                                <Image src="/images/infirmary.png" className="w-full h-[40px] rounded-md object-cover" width={40} height={40} alt="doctor" />
                            </div>
                        </div>
                        <h2 className="py-2 text-xl font-bold">کلینیک</h2>
                        <p className="opacity-70 text-sm">55 کلینیک</p>
                    </div>
                </Tab>

                <Tab className="bg-white rounded-lg p-8 custom-box-shadow">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center rounded-full bg-gray-100 w-[80px] h-[80px] rounded-full p-2 bg_selected">
                            <div className="bg-white rounded-full p-2">
                                <Image src="/images/infirmary.png" className="w-full h-[40px] rounded-md object-cover" width={40} height={40} alt="doctor" />
                            </div>
                        </div>
                        
                        <h2 className="py-2 text-xl font-bold">مرکز تصویربرداری</h2>
                        <p className="opacity-70 text-sm">12 مرکز تصویربرداری</p>
                    </div>
                </Tab>

            </TabList>


            {/* Content 1 */}
            <TabPanel>
                <div className="bg-white p-2 rounded-lg px-4 my-4">
                    <HeaderSection Header={"برترین درمانگاه‌ها"} ShowMore={"مشاهده همه"} />

                    <TopHealthCenter />

                </div>
            </TabPanel>

             {/* Content 2 */}
            <TabPanel>
                <div className="bg-white p-2 rounded-lg px-4 my-4">
                    <HeaderSection Header={"برترین آزمایشگاه ‌ها"} ShowMore={"مشاهده همه"} />
                     <TopHealthCenter />
                </div>
            </TabPanel>

            {/* Content 3 */}
            <TabPanel>
                <div className="bg-white p-2 rounded-lg px-4 my-4">
                    <HeaderSection Header={"برترین بیمارستان ‌ها"} ShowMore={"مشاهده همه"} />
                     <TopHealthCenter />
                </div>
            </TabPanel>

            {/* Content 4 */}
            <TabPanel>
                <div className="bg-white p-2 rounded-lg px-4 my-4">
                    <HeaderSection Header={"برترین کلینیک ها"} ShowMore={"مشاهده همه"} />
                     <TopHealthCenter />
                </div>
            </TabPanel>

            {/* Content 5 */}
            <TabPanel>
                <div className="bg-white p-2 rounded-lg px-4 my-4">
                    <HeaderSection Header={"برترین مرکز تصویربرداری ها"} ShowMore={"مشاهده همه"} />
                     <TopHealthCenter />
                </div>
            </TabPanel>
        </Tabs>


    </div>
  )
}

export default HealthCenter;
