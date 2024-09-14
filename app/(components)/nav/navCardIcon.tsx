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
        "name": "Streaming on Amazon Prime",
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

function NavCardIcon(){
    return (
        <>
            {
                NavLinks.map((item, index) => {
                    const IconComponent = item.icon
                    return (  
                            <div className="flex justify-center">
                                <div className="p-3 m-2 text-white">
                                    {<IconComponent size={28} />}
                                </div>
                            </div>
                    )
                })
            }
        </>
    )
}

export default NavCardIcon;