import React, { useState } from "react";
import {
  MenuAlt1Icon,
  XIcon,
} from "@heroicons/react/outline";
import PageContainer from "./PageContainer";
import MenueItems from "./MenuItems";
const Header = () => {
  const [burger, setBurder] = useState(false);

  const handleBurger = () => {
    setBurder(!burger);
  };


  const navLinks = [
    {
      id: 1,
      name: "All",
      link: "/home",
    },
    {
      id: 2,
      name: "Asia",
      link: "/asia",
    },
    {
      id: 3,
      name: "Europe",
      link: "/europe",
    },
  
  ];

 

 
  return (
    <header className="min-h-[10px] z-50 bg-[#FFFFFF]  sticky top-0 ">
      <PageContainer>
        <div className="pt-8 lg:flex lg:items-center lg:space-x-16">
          <div className="flex items-center justify-between">
           
              <div>
               <h1 className="text-2xl font-bold text-slate-500">Countries</h1>
              </div>
            
            <div onClick={handleBurger} className="lg:hidden">
              {burger ? (
                <XIcon className="h-10 text-gray-800" />
              ) : (
                <MenuAlt1Icon className="h-10" />
              )}
            </div>
          </div>
          <div className="lg:hidden absolute px-5 sm:px-14 bg-[#FFFF] right-0 top-28  w-full">
            {burger && <MenueItems />}
          </div>
          <div className="hidden lg:inline-flex flex-1 justify-end">
            <div className="flex items-center space-x-[22px]">
              <div className="">
                <div className="flex items-center space-x-4 select-none">
                  {navLinks.map((data) => (
                    <p
                      key={data.id}
                      className="text-xl font-bold text-slate-500 cursor-pointer"
                    >
                      {data.name}
                    </p>
                  ))}
                </div>
              </div>
              
            </div>
           
          </div>
      
        </div>
      </PageContainer>
    </header>
  );
};

export default Header;
