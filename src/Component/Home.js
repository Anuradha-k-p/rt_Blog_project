import { useContext } from "react"
import { Store } from "../ContextCompo/ContextCompo"
import { NavLink } from "react-router-dom";
import "./Style.css"




function Home(){
  const [ContextData] = useContext(Store);
  console.log(ContextData);

  return(
    <>
    
    {/* {ContextData.filter((item)=> item.Category === "Home")
    
    .map((item,index)=>{
      return(
        <>
        <img src={item.image} alt="pic"/>
        <h3>{item.Title}</h3>
        <p>{item.Description}</p>

        
        </>
      )

    })} */}
        

      
      <div className="Titleimages">
        <div className="bigimage">
          <img
            src="https://media.tomtom.com/m/2260170723d81048/original/Peugeot3008-CarLaunch-HPSlider-Desktop-1920x700px.jpg"
            alt="not found"
          ></img>
        </div>

        <div className="smallimage">
          <img
            src="https://www.foodfood.com/blog/wp-content/uploads/2022/05/Latest-Indian-Wedding-Food-Menu-List.jpg"
            alt="not found"
            height="240px"
            width="500px"
          ></img>

          <img
            src="https://lh3.googleusercontent.com/iN2Dkn4l9yoWKx0FMcIi2_1qzfa0MK_BKzeH7IC__wwMhO1vfOLBBangUteiJnIgpbV7AiEHc3mbhXNDLMJOaYAuH_9midBGd4fCI_P0=h450-rw"
            alt="not found"
            height="240px"
            width="500px"
          ></img>
        </div>
      </div>

      <div className="borderbottom">
      <h1 className="side">Latest</h1>
      </div>
   

      <div className="middlecontainer">
        {ContextData.filter((item) =>  item.id >= 84 && item.id <= 86 && item.Category === "Home"  )
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


      <div className="maincontainer">

        <div id="Lparent1">
          <h1 className="side">Latest Articles</h1>
          {ContextData.filter((item) => item.id >= 76 && item.id <= 84 &&item.Category === "Home")

            .map((item, index) => {
              return (
                <div key={index}>
                     <NavLink to={`/detail/${item.id}`} className="linkdes">
                
                  <div id="parent2">
                    
                    <img
                      id="leftsideimage "
                      className="imageleftside"
                      src={item.image}
                      alt="not found"
                      height="100px"
                      width="180px"
                    />
                   
                    <div id="Description2 " className="home-left-description">
                    <h4>{item.Title}</h4> 
                      <p>{item.Description.slice(0,110)+"..."}</p>
                    </div>
                  </div>
                  </NavLink>
                </div>
              );
            })}
       
        </div>

    <div className="middlecontainerright">
     
      
        <div className="Rparent1">
          <h1 className="side">Top Post</h1>
         
          {ContextData
            .filter(
              (item) => item.id >= 80 && item.id <= 83 && item.Category === "Home"
            )
            .map((item, index) => {
              return (
                <div id="parent2" className="parent2-top-post" key={index}>
                     <NavLink to={`/detail/${item.id}`} className="linkdes">
                  <img
                    src={item.image}
                    alt="not found"
                    height="130px"
                    width="210px"
                    id="rightsideimage"
                    className="homerightsideimage"
                  />
                  <div className="rightsidetitle-decription">
              <h3 className="center">{item.Title}</h3>
                  <div id="Description"  className="home-right-description">
                    <p>{item.Description.slice(0,90)}</p>
                    <h3 id="number">{index+1}</h3>
                  </div>
                  </div>
                  </NavLink>
                </div>
              );
            })}
        </div>
        <div className="Advertise"><h2 className="Adtext">Advertisement</h2></div>
    </div>
      </div>






    </>
  )
}

export default Home
