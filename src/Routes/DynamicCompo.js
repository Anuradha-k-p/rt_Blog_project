import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Store } from "../ContextCompo/ContextCompo";
import { NavLink } from "react-router-dom";
import "./Dynamic.css"


function DynamicCompo(){
  const [ContextData] = useContext(Store);
  const Navigate = useNavigate();

   const id = useParams().id;
   console.log(id);
   const id2=parseInt(id)


   const elementSelect = ContextData.find((item) => item.id === id2);   

   const categorynew = elementSelect ? elementSelect.Category : "";


   const relatedItems = ContextData
   .filter(
     (item) =>
       item.Category === categorynew &&
       (item.id % 5 === 1 || item.id % 3 === 2 || item.id % 3 === 0)
   )
   .slice(0, 3);
 console.log(categorynew);

 
    return(
        <>
        <h1>dynamic</h1>
        {/* {ContextData.filter((item)=> item.id === parseInt(id))
    
    .map((item,index)=>{
      return(
        <>
       <div className="dynamicBox">
        <h2>{item.Title}</h2>
        <img src={item.image} alt="pic" className="img"/>
        <p>{item.Description}</p>
        </div>
      

        
        </>
      )

    })} */}

{ContextData.filter((item)=>item.id===id2)
      .map((item,index)=>{
        return(
            <div key={index}>


      <div className="ParentTop">
        
        <div className="leftDetail">
          <div className="Like-share">
          <h2><i className="fa-regular fa-thumbs-up none2"></i>LIKE</h2>
          <h2><i class="fa-solid fa-share-nodes none"></i>Share</h2>
          </div>
        </div>
        <div className="detail">
          
          <h1>{item.Title}</h1>
          <div className="profile-icons">

            <div className="profile"><i className="fa-regular fa-user"></i> <span>Ketan Katkar</span></div>

          <div className="pro-mediaicon">
                  <NavLink id="iconlink"><i className="fa-brands fa-square-instagram" to="https://www.instagram.com/"></i></NavLink>
                   <NavLink id="iconlink"><i className="fa-brands fa-linkedin"></i></NavLink>
                   <NavLink id="iconlink"><i className="fa-brands fa-facebook"></i></NavLink>
                   <NavLink id="iconlink"><i className="fa-brands fa-github"></i></NavLink>
          </div>

          </div>

          <img
          className="Detailpageimg"
            src={item.image}
            alt="not found"
            height="200px"
            width="560px"
          />
          <br />
          <h2>{item.Description}</h2>
         
        </div>
        
        <div className="rightDetails"></div>
      </div>
             
              </div>
        )
      })}
          {/* 3 horizontal div */}
          <div className="borderbottom">
     
  
      <h1>More From The Siren</h1>
      
   
      </div>
   

      <div className="middlecontainer">
        {relatedItems.map((item, index) => {
            return (
              <div className="middlecontainerimage" key={index}>
                   <NavLink to={`/detailpage/${item.id}`} className="linkdes linkdes2">
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






   <div className="btn">
    <button onClick={()=> Navigate(-1)} className="backbtn">Back</button>
    </div>

        </>
    )
}
export default DynamicCompo;