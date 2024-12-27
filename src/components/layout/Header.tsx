"use client";


import React from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from './../common/ButtonPrimary';
import ButtonSecondery from './../common/ButtonSecondery';

import DropDown from './../common/DropDown';



const Header: React.FC = () => {

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto text-sm h-[80px] flex items-center justify-between">
        <div className="flex gap-4">
          <Image src="/images/blueDrDr.svg" width={120} height={70} alt="logo" />

          <ul className="flex items-center gap-4 opacity-60 text-secondery-default">
            <li>
              <div>
                <Link href="/" className="hover:text-primary-default">نوبت‌دهی</Link>
              </div>
            </li>
            <li>
              <div>
                <Link href="/" className="hover:text-primary-default">مشاوره تلفنی</Link>
              </div>
            </li>
            <li>
              <div>
                <Link href="/" className="hover:text-primary-default">مراکز درمانی</Link>
              </div>
            </li>
            <li>
              {/* <DropDown /> */}
            </li>
            <li>
              <div>
                <Link href="/" className="hover:text-primary-default">مجله سلامت</Link>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/loginUsers">
            <ButtonPrimary label={"ورود کاربران"} onClick={() => console.log("bbb")}/>
          </Link>
          <Link href="/loginDoctors">
            <ButtonSecondery label={"ورود پزشکان"} onClick={() => console.log("hhh")}/>
          </Link>
        </div>
      </div>
   </header>
  )
}

export default Header;
