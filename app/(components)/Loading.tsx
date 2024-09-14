import { useState } from "react";
function Loading(){
    const [myArray, setMyArray] = useState([1,2,3,4,5,6,7,8,9,10,11,12])

    return(
        <>
            {
              myArray.map((item, index) => {
                return <div className="w-[250px] h-auto bg-white/5 bg-opacity-80"></div>
              })  
            }
        </>
    )
}

export default Loading;