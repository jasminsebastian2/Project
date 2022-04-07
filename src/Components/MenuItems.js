
  import React from "react";
//   import { Link } from "react-router-dom";
  
  const MenueItems = () => {
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
      <div className="py-5 mt-5 ">
        <div>
          <ul className="flex flex-col space-y-6">
            {navLinks.map((data) => (
              <li key={data.id} className="text-xl font-bold text-slate-500 cursor-pointer">
                {/* <Link key={data.id} href={data.link}>
                  {data.name}
                </Link> */}
                 {data.name}
              </li>
            ))}
          </ul>
        </div>
   
    
      </div>
    );
  };
  
  export default MenueItems;
  