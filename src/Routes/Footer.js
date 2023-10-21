
import "./Footer.css";
import { NavLink } from "react-router-dom";
function Footer(){
    return(

      <footer>
 
      <div className="footermedia">
      <div className="pro-mediaicon">
        <h1>THE SIREN</h1>
        <p>Better Vision For  Better connection</p>
     
      </div>
                       
                
      <div >
          <ul className="footerlinks">
              <li>
          <NavLink style={({isActive})=>({color:(isActive)?"red":"black"})} to="/" className="DynamicLink" >Home</NavLink></li>
              <li>
          <NavLink style={({isActive})=>({color:(isActive)?"red":"black"})} to="/Hollywood" className="DynamicLink" >Hollywood</NavLink></li>
              <li>
          <NavLink style={({isActive})=>({color:(isActive)?"red":"black"})} to="/Bollywood" className="DynamicLink" >Bollywood</NavLink></li>
      
              
      </ul>
          </div>
          <div >
            <ul className="footerlinks">
            <li>
          <NavLink style={({isActive})=>({color:(isActive)?"red":"black"})} to="/Technology"  className="DynamicLink">Technology </NavLink></li>
              <li>
          <NavLink style={({isActive})=>({color:(isActive)?"red":"black"})} to="/Fitness"  className="DynamicLink">Fitness</NavLink></li>
              <li>
              <NavLink style={({isActive})=>({color:(isActive)?"red":"black"})} to="/Food"  className="DynamicLink">Food</NavLink></li>
            </ul>
          </div>
          <div id="copyright-phone">
          <p><i className="fa-regular fa-copyright"></i>Swapnali Pawar</p>

        <p> <i class="fa-solid fa-envelope"></i>abc@gmail.com</p>

        
        
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
