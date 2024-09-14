import { FaStar } from "react-icons/fa";
// import { Link } from "../redux/assets/types";
import Link from "next/link";

function Card({movie}: any){
    return (
        <div className="flex flex-col w-[250px] h-auto p-4 bg-white/5 bg-opacity-80 animate-slideup">
            {/* <Link href="blog/8"> */}
            <Link href={`${movie.id}`}>
                <div className="relative w-full h-56 group">
                    <img src={movie.primaryImage.imageUrl} alt="movie-primary-image" className="w-[240px] h-[250px]" />
                </div>
                <div className="relative mt-10 flex flex-col">
                    <p className="truncate text-white font-bold">{movie.titleText.text}</p> 
                    <p className="font-bold text-xs text-gray-200 ">{movie.releaseYear.year}</p>
                    <div>
                        <FaStar className="inline mr-1 mb-1.5 text-white"/><span className="text-white">{movie.ratingsSummary.aggregateRating}</span>
                    </div>
                </div>
            </Link>
        </div>
    )  
}

export default Card; 