"use client"

import NavCard from "./navCard";

import { MdFavoriteBorder } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";
import { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";

import Link from 'next/link'
import { HiXMark } from "react-icons/hi2";
import NavCardIcon from "./navCardIcon";
import NavCardText from "./navCardText";
import { SiAmazonprime, SiAppletv } from "react-icons/si";
import { TbBrandDisney } from "react-icons/tb";

// const NavLinks = [
//     {
//         "name": "Favourites",
//         "icon": MdFavoriteBorder,
//         "link": "/favourites"
//     },
//     {
//         "name": "Week Top 10",
//         "icon": FaChartBar,
//         "link": "/weekTop10"
//     },
//     {
//         "name": "Streaming on Netflix",
//         "icon": RiNetflixFill,
//         "link": "/streaming_on_netflix"
//     },
//     {
//         "name": "Streaming on Disney",
//         "icon": TbBrandDisney,
//         "link": "/streaming_on_hulu"
//     },
//     {
//         "name": "Streaming on AppleTv",
//         "icon": SiAppletv,
//         "link": "/streaming_on_appletv"
//     },
//     {
//         "name": "Streaming on Amazon Prime",
//         "icon": SiAmazonprime,
//         "link": "/streaming_on_amazon_prime"
//     }
// ]

function Nav(){
    const [showNav, setShowNav] = useState(false);
    return (
        <div className=""> 
            <div className="block sm:hidden">
                <button onClick={() => setShowNav((prev) => !prev)}>
                    {showNav ?
                    (<HiXMark size={32} className="text-white m-2" />):
                    (<VscThreeBars size={32} className="text-white m-2" />)
                    }
                </button>
                {showNav && 
                    <div>
                        <NavCard />
                    </div>}
            </div>                  
            
    
            {/* <div className="hidden relative md:block">
                color this  
                <div className="absolute w-[68px] h-screen z-[-0]"></div>
                <div className="flex w-[290px]">
                    <div className="relative z-10 mt-[100px] group"><NavCardIcon />
                        <span className="absolute top-0 scale-0 group-hover:scale-100 z-20"><NavCard /></span>
                    </div>
                </div>
            </div> */}




            <div className="hidden relative md:block">
                {/* color this  */}
                <div className="absolute w-[68px] h-screen z-[-0]"></div>
                <div className="flex w-[290px]">
                    <div className="relative z-10 mt-[100px] group"><NavCard />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Nav;