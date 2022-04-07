
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="p-10 lg:ml-[500px] text-[#FFFFFF]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 justify-center">
            <div className="mb-5 justify-center">
            <div class="flex flex-row space-x-5 justify-center">
                    <div class=" mb-6 md:w-[45px]  border border-black shadow px-2 py-2 rounded-full">
                            <img
                                src="/img/path.png"
                                alt="language"
                                className="h-6 opacity-2"
                            />
                        </div>
                        <div class=" mb-6 md:w-[45px]  border border-black shadow px-3 py-2 rounded-full">
                            <img
                                src="/img/face.png"
                                alt="language"
                                className="h-6 opacity-2"
                            />
                        </div>
                        <div class=" mb-6 md:w-[45px]  border border-black shadow px-3 py-2 rounded-full">
                            <img
                                src="/img/instaa.png"
                                alt="language"
                                className="h-6 opacity-2"
                            />
                        </div>
                        <div class=" mb-6 md:w-[45px]  border border-black shadow px-3 py-2 rounded-full">
                            <img
                                src="/img/twit.png"
                                alt="language"
                                className="h-6 opacity-2"
                            />
                        </div>



</div>
<div className="mb-5 flex flex-col space-x-5 justify-center">
              <p className="text-[12px] text-black p-6 mt-[-30px] ">Example@email.com</p>
              
            <p className="text-[12px] text-black">Copyright © 2022 Name.</p>
            </div>
            </div>
           
           
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
