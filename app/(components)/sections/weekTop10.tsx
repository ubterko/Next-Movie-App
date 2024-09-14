'use client'

import { FaStar } from "react-icons/fa";
import { useGetWeekTop10Query } from "../../redux/assets/movieApi";
// import data from './weekTop.json'
import { usePagination } from "../hooks/usePagination";
import { IoMdArrowDropright } from "react-icons/io";

function WeekTop(){
    const {data, isFetching, error} = useGetWeekTop10Query();
    const weekTop = data?.data
    const {visibleItems, showAll, setShowAll} = usePagination(weekTop, 3);


    return(
        <div className="w-[17vw]">
            <h3 className="text-white font-bold mt-[110px] text-center">Week Top 10</h3>
            <div className="flex flex-col items-between items-center mt-[10px]">
                {visibleItems?.map((item, index) => {
                    return (
                        
                            <div className="p-2 bg-white/5 bg-opacity-80 w-44 rounded-3xl text-white text-base m-2">
                                <img className="w-40 h-40 rounded-3xl" src={item.primaryImage.imageUrl} alt="week_top_10" />
                                {/* <div>
                                    <p>{item.originalTitleText.text}</p>
                                    <FaStar className="inline mr-1 mb-1.5 text-white" />
                                    <p>{item.ratingsSummary.aggregateRating}</p>
                                </div> */}
                            </div>
                    )
                })}
            </div>
            {!showAll && <div className="relative left-[50%] text-gray-400 m-1 inline">
                <button onClick={() => setShowAll(!showAll)}>
                    <div className="flex justify-center items-center">
                        Show all 
                        <IoMdArrowDropright size={24} className="inline" />
                    </div>
                </button>
            </div>}
        </div>
    )
}

export default WeekTop;