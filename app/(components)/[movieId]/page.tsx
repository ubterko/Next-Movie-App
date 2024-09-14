'use client'

import { useGetFanFavouritesQuery } from "@/app/redux/assets/movieApi"
import { FaArrowLeft, FaStar } from "react-icons/fa"

import blurr from './blur_bg.png';
import Link from "next/link";

export default function Page({params}){
    const id = params.movieId
    const {data, isFetching, error} = useGetFanFavouritesQuery()
    const movieArray = data?.data.list 
    const movie = movieArray?.find((item) => item.id === id)

    return (
        <div className="relative w-[60vw] mt-[18vh]">
            <div className="m-5 text-white">
                <Link href="/"><FaArrowLeft /></Link>
            </div>
            <div className="flex flex-wrap w-[100%] p-5">
                <img src={movie?.primaryImage.imageUrl} alt="" className="w-[20vw] h-[50vh]" />
                <div className="w-[500px] bg-white/5 bg-opacity-80 text-white p-5">
                    <p className="font-bold">{movie?.titleText.text}</p>
                    <p className="font-medium">{movie?.releaseYear.year}</p>
                    <FaStar className="pb-1 inline" />
                    <p className="pl-1 mb-5 inline-block">{movie?.ratingsSummary.aggregateRating}</p>
                    <p>{movie?.plot.plotText.plainText}</p>
                </div>
            </div>
        </div>
    )
}