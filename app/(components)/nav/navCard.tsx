"use client"

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

const NavLinks = [
   
    {
        "name": "Netflix",
        "icon": RiNetflixFill,
        "link": "/streaming_on_netflix"
    },
    {
        "name": "Disney",
        "icon": TbBrandDisney,
        "link": "/streaming_on_hulu"
    },
    {
        "name": "AppleTv",
        "icon": SiAppletv,
        "link": "/streaming_on_appletv"
    },
    {
        "name": "AmazonPrime",
        "icon": SiAmazonprime,
        "link": "/streaming_on_amazon_prime"
    },
    {
        "name": "Favourites",
        "icon": MdFavoriteBorder,
        "link": "/favourites"
    },
    {
        "name": "Week Top 10",
        "icon": FaChartBar,
        "link": "/weekTop10"
    },
]

function NavCard(){
    return (
        <>
            {
                NavLinks.map((item, index) => {
                    const IconComponent = item.icon
                    return (    
                            <div className="flex items-center text-white w-[270px] hover:nav-hover-sm">
                                <div className="p-3 m-2 rounded-full group bg-white/5 bg-opacity-80">
                                    <Link href={item.link}>{<IconComponent size={28} />}</Link>
                                </div>
                                <div className="w-[205px] scale-0 group-hover:scale-100" >
                                    <Link href={item.link}>{item.name}</Link>
                                </div>
                                {/* <div className="bg-green-600 h-[30px] w-1 left-[0px] absolute scale-0 group-hover:scale-100"></div>
                                <div className="bg-green-600 h-[15px] w-1 right-[0px] absolute"></div> */}
                            </div>                            
                    )
                })
            }
        </>
    )
}

export default NavCard;