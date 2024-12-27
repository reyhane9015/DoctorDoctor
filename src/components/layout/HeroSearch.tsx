import React from "react";



const HeroSearch: React.FC = () => {


  return (
    <div className="max-w-[600px] flex items-center justify-center gap-2 p-2 bg-white rounded-md my-4">
        <div className="bg-primary-light p-2 text-primary-default">انتخاب شهر</div>
        <input className="" placeholder="نام پزشک، تخصص، بیماری، مرکز‌درمانی، خدمت و..." />
    </div>
  )
}

export default HeroSearch;
