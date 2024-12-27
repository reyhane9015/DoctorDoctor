"use client";

import React from 'react';


interface RootLayoutPros {
    children: React.ReactNode;
}


const RootLayout: React.FC<RootLayoutPros> = ({ children }) => {

  return (

    <section className="p-12">

      <div>
          {children}
      </div>

    </section>

  );
};


export default RootLayout;
