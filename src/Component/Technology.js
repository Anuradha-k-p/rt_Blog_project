
import { useContext } from "react"
import { Store } from "../ContextCompo/ContextCompo"
import { NavLink } from "react-router-dom";
import "./Style.css"


function Technology(){
  const [ContextData] = useContext(Store);
  console.log(ContextData);

  return(
    <>
    <div id="scroll-container">
   <h1 id="scroll-text">Technology.....</h1> 

    </div>

      <div className="middlecontainer">
        {ContextData.filter((item) =>  item.id >= 52 && item.id <= 54 && item.Category === "technology"  )
          .map((item, index) => {
            return (
              <div className="middlecontainerimage" key={index}>
                   <NavLink to={`/detail/${item.id}`} className="linkdes linkdes2">
                <img
                  src={item.image}
                  alt="not found"
                  height="250px"
                  width="390px"
                  id="boximg"
                />
                <div id="Description2">
                <h2>{item.Title}</h2>
                  <p>{item.Description.slice(0,110)+"..."}</p>
                </div>
                </NavLink>
              </div>
            );
          })}
      </div>

    {/* {ContextData.filter((item)=> item.Category === "technology")
    
    .map((item,index)=>{
      return(
        <>
        <img src={item.image} alt="pic"/>
        <h3>{item.Title}</h3>
        <p>{item.Description}</p>

        
        </>
      )

    })}
     */}

     

          
<div className="maincontainer">
   

        <div id="Lparent1">
          <h1 className="side side2">Latest Articles</h1>
          {ContextData.filter((item) => item.Category === "technology")

            .map((item, index) => {
              return (
                <div key={index}>
                     <NavLink to={`/detail/${item.id}`} className="linkdes">
                  <div id="parent2">
                    <img
                      id="leftsideimage"
                      src={item.image}
                      alt="not found"
                      height="100px"
                      width="160px"
                    />
                    <div id="Description3">
                      <h4>{item.Title}</h4>
                      <p>{item.Description.slice(0,100)+"..."}</p>
                    </div>
                  </div>
                  </NavLink>
                </div>
              );
            })}
          
        </div>

    <div className="middlecontainerright">
    
       
      
        <div className="Rparent1">
          <h1 className="side2 side">Top Post</h1>
          
          {ContextData
            .filter(
              (item) =>item.id >= 48 && item.id <= 51 && item.Category === "technology"
            )
            .map((item, index) => {
              return (
                <div id="parent2" key={index}>
                     <NavLink to={`/detail/${item.id}`} className="linkdes linkdes3">
                  <img
                    src={item.image}
                    alt="not found"
                    height="100px"
                    width="130px"
                  />
                  <div id="Description">
                    <p>{item.Description.slice(0,100)+"..."}</p>
                  </div>
                  <h3 id="number">{index+1}</h3>
                  </NavLink>
                </div>
              );
            })}
        </div>
        <div className="Advertise2 side2 "><h2 className="Adtext2">Advertisement</h2></div>
        </div>
        </div>





  
    
    </>
  )
}
 export default Technology
