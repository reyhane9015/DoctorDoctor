

import React from "react";
import HeroSearch from './HeroSearch';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";



const Hero: React.FC = () => {


    const count1 = useMotionValue(100);
    const rounded1 = useTransform(count1, Math.round);

    const count2 = useMotionValue(2200);
    const rounded2 = useTransform(count2, Math.round);

    const count3 = useMotionValue(900);
    const rounded3 = useTransform(count3, Math.round);


    useEffect(() => {

        const animation1 = animate(count1, 500, { duration: 5 });
        const animation2 = animate(count2, 2500, { duration: 5 });
        const animation3 = animate(count3, 960, { duration: 5 });

        return () => {
            animation1.stop();
            animation2.stop();
            animation3.stop();
          };
    }, []);


  return (
    <section className="relative bg_hero bg-primary-default text-center flex flex-col items-center justify-center h-[480px] py-12 px-4 sm:px-6 lg:px-12">
        <h1 className="text-3xl font-semibold text-white">
        <span>دکتر دکتر</span>
            <br/>
            <div className="my-4">نوبت‌دهی اینترنتی و مشاوره آنلاین پزشکان ایران</div>
        </h1>

        <HeroSearch />



        <div className="flex items-center justify-center gap-4 text-xl font-semibold my-8 text-white">
            <div className="px-12 border-dashed border-l border-white">
                <motion.div>{rounded1}</motion.div>
                <div className="opacity-80 text-lg">پزشک</div>
            </div>

            <div className="px-12 border-dashed border-l border-white">
                {/* <div>+9,000,000</div> */}
                <motion.div>{rounded2}</motion.div>
                <div className="opacity-80 text-lg">نوبت موفق</div>
            </div>

            <div>
                {/* <div className="px-12">+1,245</div> */}
                <motion.div className="px-12">{rounded3}</motion.div>
                <div className="opacity-80 text-lg">شهر و روستا</div>
            </div>
        </div>

        <div className="flex items-center gap-2 text-white text-sm mt-4">
            <button>جستجوهای پرتکرار: </button>
            <button className="p-2 border border-primary-light rounded-xl text-md text-primary-light hover:text-secondery-default hover:border-secondery-default">عمومی</button>
            <button className="p-2 border border-primary-light rounded-xl text-md text-primary-light hover:text-secondery-default hover:border-secondery-default">عمومی</button>
            <button className="p-2 border border-primary-light rounded-xl text-md text-primary-light hover:text-secondery-default hover:border-secondery-default">عمومی</button>
            <button className="p-2 border border-primary-light rounded-xl text-md text-primary-light hover:text-secondery-default hover:border-secondery-default">عمومی</button>
            <button className="p-2 border border-primary-light rounded-xl text-md text-primary-light hover:text-secondery-default hover:border-secondery-default">عمومی</button>
            <button className="p-2 border border-primary-light rounded-xl text-md text-primary-light hover:text-secondery-default hover:border-secondery-default">عمومی</button>
            <button className="p-2 border border-primary-light rounded-xl text-md text-primary-light hover:text-secondery-default hover:border-secondery-default">عمومی</button>
            <button className="p-2 border border-primary-light rounded-xl text-md text-primary-light hover:text-secondery-default hover:border-secondery-default">عمومی</button>
        </div>


    </section>
  )
}

export default Hero;
