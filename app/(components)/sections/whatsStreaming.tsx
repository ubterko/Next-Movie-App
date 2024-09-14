import { useGetWhatsStreamingQuery } from "../../redux/assets/movieApi";
// import data from '../../whatsStreaming.json'
import Card from "../card";
import { FaStar } from "react-icons/fa";
import { usePagination } from "../hooks/usePagination";
import { IoMdArrowDropright } from "react-icons/io";

function WhatsStreaming(props: any){
    const {data, isFetching, error } = useGetWhatsStreamingQuery();
    const dataArray = data?.data
    const providerData = dataArray?.find(item => item.providerName === props.providerName)
    console.log(props.providerName)
    const providerArray = providerData?.edges
    const { visibleItems, showAll, setShowAll } = usePagination(providerArray)
    return(
        <>
            {
                visibleItems?.map((movie,index) => {
                    return <div className="flex flex-col w-[250px] h-auto p-4 bg-white/5 bg-opacity-80 animate-slideup">
                                <div className="relative w-full h-56 group">
                                    <img src={movie.title.primaryImage.imageUrl} alt="movie-primary-image" className="card-img" />
                                </div>
                                <div className="relative mt-10 flex flex-col">
                                    <p className="truncate text-white font-bold">{movie.title.originalTitleText.text}</p> 
                                    <p className="font-bold text-xs text-gray-200 ">{movie.title.releaseYear.year}</p>
                                    <div>
                                        <FaStar className="inline mr-1 mb-1.5 text-white"/><span className="text-white">{movie.title.ratingsSummary.aggregateRating}</span>
                                    </div>
                                </div>
                            </div>
                        })  
            }
            {!showAll && <div className="relative left-[90%] text-gray-400 m-1 inline">
            <button onClick={() => setShowAll(!showAll)}>
                <div className="flex justify-center items-center">
                  show all 
                  <IoMdArrowDropright size={24} className="inline" />
                </div>
              </button>
          </div>}
        </>
    )
}

export default WhatsStreaming;