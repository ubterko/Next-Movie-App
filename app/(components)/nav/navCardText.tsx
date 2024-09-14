"use client"


import { MdFavoriteBorder } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";
import { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";

import Link from 'next/link'
import { HiXMark } from "react-icons/hi2";
import { SiAmazonprime, SiAppletv } from "react-icons/si";
import { TbBrandDisney } from "react-icons/tb";

const NavLinks = [
    {
        "name": "Streaming on Netflix",
        "icon": RiNetflixFill,
        "link": "/streaming_on_netflix"
    },
    {
        "name": "Streaming on Disney",
        "icon": TbBrandDisney,
        "link": "/streaming_on_hulu"
    },
    {
        "name": "Streaming on AppleTv",
        "icon": SiAppletv,
        "link": "/streaming_on_appletv"
    },
    {
        "name": "Streaming on Amazon",
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
    }
]

function NavCardText(){
    
    return (
        <>
            {
                NavLinks.map((item, index) => {
                    const IconComponent = item.icon
                    return (    
                                                     
                            <div className="p-5 bg-opacity-80 w-[15.5vw] text-white hover:nav-hover-sm" >
                                <Link href={item.link}>{item.name}</Link>
                            </div>
                                                       
                    )
                })
            }
        </>
    )
}

export default NavCardText;