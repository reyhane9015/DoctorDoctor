"use client";


import React from "react";
import Image from "next/image";
import Link from "next/link";


const Footer: React.FC = () => {

    return (
      <div className="bg-secondery-default py-20">
        <div className="container mx-auto flex gap-4">

          <div className="text-white grow md:basis-2/3">
            <ul className="flex flex-col gap-8">
              <li>
                <Image src="/images/blueDrDr.svg" width={120} height={70} alt="logo" />
              </li>
              <li>
                <p>پاسخگویی ۷ روز هفته از ساعت ۹ صبح تا ۱ بامداد</p>
                <div>
                  (پشتیبانی(02134545
                </div>
              </li>
              <li>
                <p>ما را در شبکه‌های اجتماعی دنبال کنید:</p>
                <div>
                  (پشتیبانی(02134545
                </div>
              </li>
              <li>
                <p>هران، میدان آرژانتین، خیابان بیهقی، خیابان شانزدهم شرقی، پلاک ۲۸
                  کدپستی: ۱۵۱۵۶۷۴۴۱۱
                </p>
                <div>
                  (پشتیبانی(02134545
                </div>
              </li>
              <li>
                <Link href="/" className="ml-2">قوانین و مقررات</Link>
                <Link href="/">حفظ حریم شخصی</Link>   
              </li>
            </ul>
          </div>

          <div className="basis-1/4 md:basis-1/4">
            <p className="text-primary-default font-semibold mb-4">لینک های مفید</p>
            <ul className="flex flex-col gap-2 text-white">
              <li>
                
              </li>
              <li>
                ورود و ثبت نام بیماران
              </li>
              <li>
                ورود و ثبت نام بیماران
              </li>
              <li>
                ورود و ثبت نام بیماران
              </li>
              <li>
                ورود و ثبت نام بیماران
              </li>
            </ul>
          </div>


          <div className="basis-1/4 md:basis-3/4">
            <div className="mb-8">
              <p className="text-primary-default font-semibold mb-4">گواهینامه ها</p>
              <ul className="flex gap-4 items-center">
                <li>
                   <Image src="/images/enamad.png" width={70} height={70} alt="logo" />
                </li>
                <li>
                   <Image src="/images/samandehi.png" width={70} height={70} alt="logo" />
                </li>
                <li>
                   <Image src="/images/etehadie.png" width={70} height={70} alt="logo" />
                </li>
              </ul>
            </div>

            <div>
              <p className="text-primary-default font-semibold mb-4">جوایز و افتخارات</p>
               <p className="text-white">
                برنده سه تندیس برترین وب سایت سلامت الکترونیک کشور در جشنواره وب و موبایل ایران
               </p>
            </div>

          </div>


        </div>
      </div>
    )
  }
  
  export default Footer;
  