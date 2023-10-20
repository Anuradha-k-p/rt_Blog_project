// import { useState } from "react"

// const ImageSlider = ({ slides}) => {
//     const [currentIndex, setCurrentUser] = useState(0);

//     const slideStyle = {
//         width: "100%",
//         height: "100%",
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         borderRadius: "10px",
//         backgroundImage: `url(${slides[currentIndex].url})`

//     }

//     const right = {
//         position: "absolute",
//         top: "50%",
//         transform: "translate(0,-50%)",
//         left: "32px",
//         fontSize: "45px",
//         color: "#fff",
//         zIndex: 1,
//         cursor: "pointer",
//     }
//     const left = {
//         position: "absolute",
//         top: "50%",
//         transform: "translate(0,-50%)",
//         right: "32px",
//         fontSize: "45px",
//         color: "#fff",
//         zIndex: 1,
//         cursor: "pointer",
//     }


//     return(
//         <>
//         <div className="sliderstyle"> 
      
//         <div style={slideStyle}></div>

//         <div style={right}> 0 </div>
//         <div style={left}> 0 </div>


//         </div>
//         </>
//     )
// }

// export default ImageSlider