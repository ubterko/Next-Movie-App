"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { RootState , DispatchApp} from "../redux/store";
import { useGetFanFavouritesQuery, useGetWeekTop10Query, } from "../redux/assets/movieApi";
import Search from "./search";
import Card from "./card";
import { Link, List } from "../redux/assets/types";

// import data from './test.json'
import Nav from "./nav/nav";
import WeekTop from "./sections/weekTop10";
import { usePagination } from "./hooks/usePagination";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import WhatsStreaming from "./sections/whatsStreaming";


export default function Home() {
  const {data, isFetching, error } = useGetFanFavouritesQuery()
  const movieArray = data?.data.list 
  const { visibleItems, showAll, setShowAll } = usePagination(movieArray)
  
  // console.log(movieArray)
  //movieArray.titleText

  

  return (
    <div>
      <div className="w-[60vw]">
        <div className="flex justify-center mt-10">
          <Search />
        </div>
        <div className="flex flex-col justify-center mt-10">
            <h1 className="text-[#86C232] font-bold m-1">Favourites</h1>
            <div className="flex justify-between gap-4 flex-wrap">
              {
                visibleItems?.map((movieObj: any, index: number) => (
                  <Card movie={movieObj}  />
                )
              )
            }
          </div>
          {!showAll && <div className="relative left-[90%] text-gray-400 m-1">
            <button onClick={() => setShowAll(!showAll)}>
                <div className="flex justify-center items-center font-medium">
                  show all 
                  <IoMdArrowDropright size={24} className="inline" />
                </div>
              </button>
          </div>}
        </div>

        <div>
          <h1 className="text-[#86C232] font-bold m-1">Streaming on Netflix</h1>
          <div className="flex justify-between flex-wrap"><WhatsStreaming providerName="Netflix" /></div>
        </div>
      
        <div>
          <h1 className="text-[#86C232] font-bold m-1">Streaming on Apple TV+</h1>
          <div className="flex justify-between flex-wrap"><WhatsStreaming providerName="Apple TV+" /></div>
        </div>
      </div>
    </div>
  )
}

