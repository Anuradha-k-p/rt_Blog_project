import "./Footer.css";
import { NavLink } from "react-router-dom";
function Footer(){
    return(

      <footer>
 
      <div className="footermedia">
      <div className="pro-mediaicon">
        <h1>THE</h1><br/>
        <h1>SIREN</h1>
     
      </div>
                       
                
      <div >
          <ul className="footerlinks">
              <li>
          <NavLink style={({isActive})=>({color:(isActive)?"red":"black"})} to="/" className="link" >Home</NavLink></li>
              <li>
          <NavLink style={({isActive})=>({color:(isActive)?"red":"black"})} to="/Hollywood" className="link" >Hollywood</NavLink></li>
              <li>
          <NavLink style={({isActive})=>({color:(isActive)?"red":"black"})} to="/Bollywood" className="link" >Bollywood</NavLink></li>
      
              
      </ul>
          </div>
          <div >
            <ul className="footerlinks">
            <li>
          <NavLink style={({isActive})=>({color:(isActive)?"red":"black"})} to="/Technology"  className="link">Technology </NavLink></li>
              <li>
          <NavLink style={({isActive})=>({color:(isActive)?"red":"black"})} to="/Fitness"  className="link">Fitness</NavLink></li>
              <li>
              <NavLink style={({isActive})=>({color:(isActive)?"red":"black"})} to="/Food"  className="link">Food</NavLink></li>
            </ul>
          </div>
          <div id="copyright-phone">
          <p><i className="fa-regular fa-copyright"></i>Swapnali Pawar</p>
        <p><i className="fa-solid fa-phone"></i>0000000000</p>
        
          </div>
      
        {/* <div className="pro-mediaicon">
                        <h3>Follow us:</h3> 
                        
                        <NavLink id="iconlink"><i className="fa-brands fa-square-instagram"></i></NavLink>
                         <NavLink id="iconlink"><i className="fa-brands fa-linkedin"></i></NavLink>
                         <NavLink id="iconlink"><i className="fa-brands fa-facebook"></i></NavLink>
                         <NavLink id="iconlink"><i className="fa-brands fa-github"></i></NavLink>
                </div>
                 */}
                </div>
      </footer>
      
      
      
    )
  }

export default Footer;
